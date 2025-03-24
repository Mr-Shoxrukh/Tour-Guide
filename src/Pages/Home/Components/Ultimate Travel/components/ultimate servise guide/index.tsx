import { useNavigate, useParams } from "react-router-dom";
import React, { useEffect, useState } from "react";
import {
  getAuth,
  onAuthStateChanged,
  signInWithEmailLink,
  sendSignInLinkToEmail,
} from "firebase/auth";
import axios from "axios";
import Header from "../../../../../Home/Components/header";
import {
  Box,
  Button,
  CircularProgress,
  Container,
  FormControl,
  FormControlLabel,
  FormLabel,
  InputLabel,
  MenuItem,
  Radio,
  RadioGroup,
  Select,
  TextField,
  Typography,
} from "@mui/material";
import emailjs from "emailjs-com";
import { BookingCard, BookingWrapper } from "../../../../../Booking/style";
import { ToastContainer, toast } from "react-toastify";
import Footer from "../../../../../Home/Components/footer";
import { doc, getDoc } from "firebase/firestore";
import { db } from "../../../../../../db/firebase";
interface GuideData {
  id: string;
  guideImg: string;
  guideName: string;
}

const auth = getAuth();
function Booking() {
  const { guideId } = useParams();
  const [guide, setGuide] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [email, setEmail] = useState("");
  const [code, setCode] = useState("");
  const [generatedCode, setGeneratedCode] = useState<string | null>(null);
  const [userEmail, setUserEmail] = useState<string | null>(null);
  const [transport, setTransport] = useState("car");
  const [numberOfPeople, setnumberOfPeople] = useState<string>("");
  const [isSent, setIsSent] = useState(false);
  const [user, setUser] = useState<any>(null);
  const navigate = useNavigate();
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setUser(user);
      if (!user) {
        toast.error("Booking qilish uchun ro‘yxatdan o‘ting!");
        navigate("/signup");
      }
    });

    return () => unsubscribe();
  }, [navigate]);
  useEffect(() => {
    if (!guideId) return;

    const fetchGuideData = async () => {
      try {
        const guideDocRef = doc(db, "guides", guideId);
        const guideSnapshot = await getDoc(guideDocRef);

        if (guideSnapshot.exists()) {
          setGuide({
            id: guideSnapshot.id,
            ...guideSnapshot.data(),
          });
        } else {
          console.log("Guide ma'lumoti topilmadi");
        }
      } catch (error) {
        console.error("Xatolik yuz berdi:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchGuideData();
  }, [guideId]);
  const signInWithOTP = async (email: string) => {
    const actionCodeSettings = {
      url: "http://your-app.com",
      handleCodeInApp: true,
    };

    try {
      await sendSignInLinkToEmail(auth, email, actionCodeSettings);
      window.localStorage.setItem("emailForSignIn", email);
      console.log("✅ Emailga tasdiqlash kodi yuborildi:", email);
    } catch (error) {
      console.error("❌ OTP yuborishda xatolik:", error);
    }
  };
  const auth = getAuth();
  const handleBooking = async () => {
    if (!user) {
      toast.error("Booking qilish uchun ro‘yxatdan o‘ting!");
      navigate("/signup");
      return;
    }

    sendToTelegramBot(email, numberOfPeople, transport);
    toast.success("Booking muvaffaqiyatli bajarildi!");
  };
  const sendVerificationCode = async () => {
    handleBooking();
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email.trim()) || email == "") {
      toast.error("Noto‘g‘ri email formati! To‘g‘ri email kiriting.");
      return;
    }
    if (!email.trim() || !emailRegex.test(email.trim())) {
      toast.error("Noto‘g‘ri yoki bo‘sh email manzil! To‘g‘ri email kiriting.");
      return;
    }

    const verification_code = Math.floor(
      100000 + Math.random() * 900000
    ).toString();
    setGeneratedCode(verification_code);

    const templateParams = {
      to_email: email.trim(),
      verification_code: verification_code,
    };

    try {
      const response = await emailjs.send(
        "service_nm2wz8o",
        "template_rtz6uqi",
        templateParams,
        "Rl8mSc2VDDwj4Unh0"
      );

      toast.success("Tasdiqlash kodi emailga yuborildi! ");
    } catch (error: any) {
      toast.error(
        "❌ Email yuborishda xatolik yuz berdi! Iltimos, qayta urinib ko‘ring."
      );
    }
  };

  const handleTransportChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setTransport(event.target.value);
    console.log("Tanlangan transport turi:", event.target.value);
  };
  const verifyCode = () => {
    if (code === generatedCode) {
      toast.success("✅ Email tasdiqlandi! Jarayon muvaffaqiyatli tugadi.");
    } else {
      toast.error("❌ Noto‘g‘ri kod. Qayta urinib ko‘ring.");
    }
  };

  const sendToTelegramBot = async (
    email: string,
    selectedPeople: string,
    selectedTransport: string
  ) => {
    if (isSent) {
      toast.warning(" Xabar allaqachon yuborilgan!");
      return;
    }
    const botToken = "7716014519:AAFB5XdsTar9a_jkMNIa5Yu-Ck3hkra5eUs";
    const chatId = "6287309235";
    const message = `🆕 Yangi buyurtma:\n📧 From: ${email}\n🌍 Tanlangan tur: ${selectedPeople}\n📅 Sana: ${selectedTransport}`;

    const url = `https://api.telegram.org/bot${botToken}/sendMessage`;

    try {
      await axios.post(url, {
        chat_id: chatId,
        text: message,
      });

      console.log("Ma'lumot Telegram botga yuborildi!");
      setIsSent(true);
    } catch (error) {
      console.error("Telegram botga xabar yuborishda xatolik:", error);
    }
  };
  const handleVerifyCode = async () => {
    if (code) {
      navigate("/home");
    }
    sendToTelegramBot(email, numberOfPeople, transport);
    if (code.trim() === "") {
      toast.error("Tasdiqlash kodini kiriting!");
      return;
    }
  };

  if (loading) {
    return (
      <Box
        sx={{
          display: "flex",
          height: "70vh",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <CircularProgress />
      </Box>
    );
  }

  if (!guide) {
    return <p>No data found!</p>;
  }
  return (
    <>
      <Container maxWidth="xl">
        <Header />
        <BookingWrapper>
          <BookingCard>
            <img src={guide.guideImg} alt={guide.guideName} width="300" />
            <Typography variant="body1">{guide.guideExperience}</Typography>
          </BookingCard>
          <Box sx={{ maxWidth: "400px", margin: "auto", textAlign: "center" }}>
            <h2>Email tasdiqlash</h2>

            <TextField
              label="Email"
              type="email"
              fullWidth
              margin="normal"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <Button
              variant="contained"
              color="primary"
              onClick={sendVerificationCode.bind(setGeneratedCode)}
            >
              Tasdiqlash kodini yuborish
            </Button>

            <TextField
              label="Tasdiqlash kodi"
              type="text"
              fullWidth
              margin="normal"
              value={code}
              onChange={(e) => setCode(e.target.value)}
            />
            <Button
              variant="contained"
              color="success"
              onClick={handleVerifyCode}
            >
              Kodni tekshirish
            </Button>

            <TextField
              type="number"
              value={numberOfPeople}
              onChange={(e) => setnumberOfPeople(e.target.value)}
            />

            <RadioGroup value={transport} onChange={handleTransportChange}>
              <FormControlLabel
                value="car"
                control={<Radio />}
                label="Avtomobil"
              />
              <FormControlLabel
                value="bus"
                control={<Radio />}
                label="Avtobus"
              />
              <FormControlLabel
                value="train"
                control={<Radio />}
                label="Poyezd"
              />
            </RadioGroup>

            <Button variant="contained" color="secondary" onClick={verifyCode}>
              Tasdiqlash
            </Button>
          </Box>
        </BookingWrapper>
      </Container>
      <Footer />
      <ToastContainer />
    </>
  );
}

export default Booking;
