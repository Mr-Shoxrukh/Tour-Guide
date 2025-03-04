import { useParams } from "react-router-dom";
import React, { useEffect, useState } from "react";
import { createClient } from "@supabase/supabase-js";
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
import { BookingCard, BookingFrom, BookingWrapper } from "./style";
import { ToastContainer, toast } from "react-toastify";
import Footer from "../Home/Components/footer";
import { stringify } from "querystring";
interface Guide {
  id: string;
  guideName: string;
  title: string;
  guideExperience: string;
  guideImg: string;
}
const supabaseUrl = "https://mjcedactmdisysxnyusx.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im1qY2VkYWN0bWRpc3lzeG55dXN4Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3Mzk4NzE0MjksImV4cCI6MjA1NTQ0NzQyOX0.9slbpltg1VrHV4ZxI6gcXvP9zus0kXpQH6oqFmy_RO0";
const supabase = createClient(supabaseUrl, supabaseKey, {
  auth: {
    persistSession: true, // Sessiyani saqlash
    autoRefreshToken: true, // Tokenni avtomatik yangilash
    detectSessionInUrl: true,
  },
});

function Booking() {
  const { guideId } = useParams();
  const [guide, setGuide] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [email, setEmail] = useState("");
  const [code, setCode] = useState("");
  const [generatedCode, setGeneratedCode] = useState<string | null>(null);
  const [formData, setFormData] = useState({
    peopleCount: "",
    email: "",
    transport: "",
  });
  const [userEmail, setUserEmail] = useState<string | null>(null);
  const [numberOfPeople, setnumberOfPeople] = useState<string>("");
  const [otpInput, setOtpInput] = useState<string>("");

  const [transport, setTransport] = React.useState("car");

  useEffect(() => {
    const fetchUser = async () => {
      const { data, error } = await supabase.auth.getUser();

      if (error) {
        console.error("Foydalanuvchi ma'lumotlarini olishda xatolik:", error);
        return;
      }

      if (data?.user?.email) {
        setUserEmail(data.user.email ?? null);
        // sendVerificationCode(data.user.email);
      } else {
        console.log("⚠️ Foydalanuvchi tizimga kirmagan.");
      }
    };

    fetchUser();
  }, []);
  const checkUser = async () => {
    const { data: sessionData } = await supabase.auth.getSession();

    if (!sessionData?.session) {
      console.error("Sessiya topilmadi ❌");
      return;
    }

    const { data: userData, error } = await supabase.auth.getUser();

    if (error) {
      console.error("Foydalanuvchi ma'lumotlarini olishda xatolik:", error);
    } else {
      console.log("Foydalanuvchi:", userData.user);
    }
  };

  checkUser();
  const checkSession = async () => {
    const { data, error } = await supabase.auth.getSession();

    if (!data.session) {
      console.log(
        "Sessiya yo‘q ❌, foydalanuvchi qayta tizimga kirishi kerak."
      );
    } else {
      console.log("✅ Sessiya bor:", data.session);
    }
  };

  checkSession();

  const signInWithOTP = async (email: string) => {
    const { error } = await supabase.auth.signInWithOtp({ email });

    if (error) {
      console.error("❌ OTP yuborishda xatolik:", error);
      return;
    }

    console.log("✅ Emailga tasdiqlash kodi yuborildi:", email);
  };
  const handleTransportChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setFormData({ ...formData, transport: event.target.value });
  };

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
      const { data, error } = await supabase.auth.verifyOtp({
        email: email,
        token: code,
        type: "email",
      });

      if (error) {
        console.error("Kod noto‘g‘ri:", error);
        toast.error("Tasdiqlash kodi noto‘g‘ri!");
        return;
      }

      console.log("Tasdiqlash muvaffaqiyatli!");

      // Foydalanuvchi tanlagan ma'lumotlar
      const selectedPeople = numberOfPeople; // Tanlangan turistik joy
      const selectedTransport = transport; // Tanlangan sana

      // Telegram botga ma'lumot yuborish
      await sendToTelegramBot(email, selectedPeople, selectedTransport);

      toast.success("Tasdiqlash muvaffaqiyatli va ma’lumot yuborildi!");
    } catch (err) {
      console.error("Xatolik:", err);
      toast.error("Kutilmagan xatolik yuz berdi!");
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
              label="Odamlar soni"
              type="number"
              fullWidth
              margin="normal"
              value={numberOfPeople}
              onChange={(e) => setnumberOfPeople(e.target.value)}
            />

            {/* Transport turi tanlash */}
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
