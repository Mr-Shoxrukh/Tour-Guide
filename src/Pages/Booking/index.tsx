import { useParams } from "react-router-dom";
import React, { useEffect, useState } from "react";
import {
  getAuth,
  onAuthStateChanged,
  signInWithEmailLink,
  sendSignInLinkToEmail,
} from "firebase/auth";
import axios from "axios";
import Header from "../../Pages/Home/Components/header";
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
import { BookingCard, BookingWrapper } from "./style";
import { ToastContainer, toast } from "react-toastify";
import Footer from "../Home/Components/footer";
import { doc, getDoc } from "firebase/firestore";
import { db } from "../../db/firebase";
interface Guide {
  id: string;
  guideName: string;
  title: string;
  guideExperience: string;
  guideImg: string;
}

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

  // 🔥 Foydalanuvchini tekshirish
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user?.email) {
        setUserEmail(user.email);
        console.log("✅ Foydalanuvchi tizimga kirgan:", user.email);
      } else {
        console.log("⚠️ Foydalanuvchi tizimga kirmagan.");
      }
    });

    return () => unsubscribe();
  }, []);

  // 🔥 Firestore-dan ma'lumot olish
  useEffect(() => {
    const fetchGuideData = async () => {
      if (!guideId) return;

      const guideRef = doc(db, "guides", guideId);
      const guideSnap = await getDoc(guideRef);

      if (guideSnap.exists()) {
        setGuide(guideSnap.data());
      } else {
        console.log("🚫 Guide ma'lumoti topilmadi");
      }
      setLoading(false);
    };

    fetchGuideData();
  }, [guideId]);

  // 🔥 OTP orqali tizimga kirish
  const signInWithOTP = async (email: string) => {
    const actionCodeSettings = {
      url: "http://your-app.com", // O'zingizning URL'ingiz
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
  const emailLink = window.location.href;
  // 🔥 Avtomatik tizimga kirish
  useEffect(() => {
    async function signInWithEmail() {
      if (await signInWithEmailLink(auth, window.location.href)) {
        let email = window.localStorage.getItem("emailForSignIn");

        if (!email) {
          email = window.prompt("Iltimos, email kiriting:");
        }

        if (email) {
          try {
            await signInWithEmailLink(auth, email, window.location.href);
            console.log("✅ Muvaffaqiyatli tizimga kirildi");
            window.localStorage.removeItem("emailForSignIn");
          } catch (error) {
            console.error("❌ Tizimga kirishda xatolik:", error);
          }
        }
      }
    }
  }, []);
  const sendVerificationCode = async () => {
    if (!email.trim()) {
      toast.warning("Iltimos, email kiriting!");
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email.trim())) {
      toast.error("Noto‘g‘ri email formati! To‘g‘ri email kiriting.");
      return;
    }
    const verificationCode = Math.floor(
      100000 + Math.random() * 900000
    ).toString();
    setGeneratedCode(verificationCode);

    const templateParams = {
      to_email: email.trim(),
      verification_code: verificationCode,
    };
    console.log(verificationCode);

    try {
      const response = await emailjs.send(
        "service_nm2wz8o",
        "template_rtz6uqi",
        templateParams,
        "Rl8mSc2VDDwj4Unh0"
      );

      console.log("✅ Email yuborildi:", response);
      toast.success("Tasdiqlash kodi emailga yuborildi!");
    } catch (error: any) {
      console.error("❌ Xatolik:", error);
      toast.error(`Kod yuborishda xatolik yuz berdi: ${error.text}`);
    }
  };
  // const handleTransportChange = (
  //   event: React.ChangeEvent<HTMLInputElement>
  // ) => {
  //   setFormData({ ...formData, transport: event.target.value });
  // };
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
    const botToken = "7716014519:AAFB5XdsTar9a_jkMNIa5Yu-Ck3hkra5eUs";
    const chatId = "5639461053"; // Guide botining chat ID sini oling
    const message = `🆕 Yangi buyurtma:\n📧 Email: ${email}\n🌍 Tanlangan tur: ${selectedPeople}\n📅 Sana: ${selectedTransport}`;

    const url = `https://api.telegram.org/bot${botToken}/sendMessage`;

    try {
      await axios.post(url, {
        chat_id: chatId,
        text: message,
      });

      console.log("Ma'lumot Telegram botga yuborildi!");
    } catch (error) {
      console.error("Telegram botga xabar yuborishda xatolik:", error);
    }
  };
  const handleVerifyCode = async () => {
    if (code.trim() === "") {
      toast.error("Tasdiqlash kodini kiriting!");
      return;
    }

    try {
      let storedEmail = window.localStorage.getItem("emailForSignIn");
      if (!storedEmail) {
        storedEmail = window.prompt("Iltimos, email kiriting:");
      }

      if (storedEmail) {
        // Firebase orqali OTP orqali tizimga kirish
        await signInWithEmailLink(auth, storedEmail, window.location.href);

        console.log("✅ Tasdiqlash muvaffaqiyatli!");

        // Mahalliy saqlangan emailni o'chirib tashlash
        window.localStorage.removeItem("emailForSignIn");

        // Foydalanuvchi tanlagan ma'lumotlar
        const selectedPeople = numberOfPeople;
        const selectedTransport = transport;

        // Telegram botga ma'lumot yuborish
        await sendToTelegramBot(storedEmail, selectedPeople, selectedTransport);

        toast.success("Tasdiqlash muvaffaqiyatli va ma’lumot yuborildi!");
      }
    } catch (err) {
      console.error("❌ Xatolik:", err);
      toast.error("Tasdiqlash kodi noto‘g‘ri yoki link eskirgan!");
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
            <img src={guide.guideImg} alt={guide.title} width="300" />
            <Typography variant="body1">{guide.guideExperience}</Typography>
          </BookingCard>
          <Box sx={{ maxWidth: "400px", margin: "auto", textAlign: "center" }}>
            <h2>Email tasdiqlash</h2>

            {/* Email kiritish maydoni */}
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
              onClick={sendVerificationCode}
            >
              Tasdiqlash kodini yuborish
            </Button>

            {/* Tasdiqlash kodi */}
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

            {/* Odamlar soni */}
            <TextField
              type="number"
              value={numberOfPeople}
              onChange={(e) => setnumberOfPeople(e.target.value)}
            />

            {/* Transport turi tanlash */}
            {/* <RadioGroup value={transport} onChange={handleTransportChange}>
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
            </RadioGroup> */}

            {/* Tasdiqlash tugmasi */}
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
