import { useParams } from "react-router-dom";
import React, { useEffect, useState } from "react";
import { createClient } from "@supabase/supabase-js";
import Header from "../../Pages/Home/Components/header";
import {
  Box,
  Button,
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
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import emailjs from "emailjs-com";
import { BookingCard, BookingFrom, BookingWrapper } from "./style";
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
const supabase = createClient(supabaseUrl, supabaseKey);

function Booking() {
  const [contact, setContact] = useState("");
  const [days, setDays] = useState("");
  const { guideId } = useParams();
  const [guide, setGuide] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [email, setEmail] = useState("");
  const [code, setCode] = useState("");
  const [generatedCode, setGeneratedCode] = useState<string | null>(null);
  const [isCodeSent, setIsCodeSent] = useState(false);
  const [activeStep, setActiveStep] = useState(0);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });
  const [age, setAge] = React.useState("");
  const [transport, setTransport] = React.useState("female");
  useEffect(() => {
    const fetchGuide = async () => {
      if (!guideId) return;

      const { data, error } = await supabase
        .from("guides")
        .select("*")
        .eq("id", guideId)
        .single();
      if (error) {
        console.error("Supabase Error:", error);
      } else {
        setGuide(data as Guide);
      }
      setLoading(false);
    };

    fetchGuide();
  }, [guideId]);

  if (loading) {
    return <p>Loading...</p>;
  }

  if (!guide) {
    return <p>No data found!</p>;
  }

  const handleBooking = () => {
    if (!contact || !days) {
      alert("Barcha maydonlarni to'ldiring!");
      return;
    }

    // Guide'ga WhatsApp orqali xabar yuborish
  };
  const sendVerificationCode = async () => {
    if (!email.trim()) {
      alert("Iltimos, email kiriting!");
      return;
    }

    // ✅ Email formati to‘g‘ri ekanligini tekshiramiz
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email.trim())) {
      alert("Noto‘g‘ri email formati! To‘g‘ri email kiriting.");
      return;
    }
    // 6 xonali tasdiqlash kodini yaratish
    const verificationCode = Math.floor(
      100000 + Math.random() * 900000
    ).toString();
    setGeneratedCode(verificationCode);

    // EmailJS orqali xabar jo‘natish
    const templateParams = {
      to_email: email.trim(),
      verification_code: verificationCode,
    };
    console.log(verificationCode);

    try {
      const response = await emailjs.send(
        "service_nm2wz8o", // EmailJS Service ID
        "template_5f9q8rz", // EmailJS Template ID
        templateParams, // 🔹 To‘g‘ri formatlangan emailni ishlatamiz
        "Rl8mSc2VDDwj4Unh0" // EmailJS Public Key
      );

      console.log("✅ Email yuborildi:", response);
      alert("Tasdiqlash kodi emailga yuborildi!");
    } catch (error: any) {
      console.error("❌ Xatolik:", error);
      alert(`Kod yuborishda xatolik yuz berdi: ${error.text}`);
    }
  };
  // 📌 2. Kiritilgan kodni tekshirish
  const verifyCode = () => {
    if (code === generatedCode) {
      alert("✅ Email tasdiqlandi! Jarayon muvaffaqiyatli tugadi.");
    } else {
      alert("❌ Noto‘g‘ri kod. Qayta urinib ko‘ring.");
    }
  };
  const steps = ["Foydalanuvchi Ma'lumotlari", "Qo'shimcha Ma'lumotlar"];

  const handleChange = (e: any) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleNext = () => {
    if (activeStep === 0 && (!formData.name || !formData.email)) {
      alert("Iltimos, barcha maydonlarni to'ldiring!");
      return;
    }

    setActiveStep((prevStep) => prevStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevStep) => prevStep - 1);
  };
  const handleCountOfPeople = (event: any) => {
    setAge(event.target.value as string);
  };
  const handleTransport = (event: React.ChangeEvent<HTMLInputElement>) => {
    setTransport((event.target as HTMLInputElement).value);
  };
  return (
    <Container maxWidth="xl">
      <Header />
      <BookingWrapper>
        <BookingCard>
          <img src={guide.guideImg} alt={guide.title} width="300" />
          <Typography variant="body1">{guide.guideExperience}</Typography>
        </BookingCard>
        <BookingFrom>
          <Box
            sx={{
              width: "100%",
              margin: "auto",
              padding: 4,
              textAlign: "center",
            }}
          >
            <Stepper activeStep={activeStep} alternativeLabel>
              {steps.map((label, index) => (
                <Step key={index}>
                  <StepLabel>{label}</StepLabel>
                </Step>
              ))}
            </Stepper>

            {activeStep === 0 && (
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                }}
              >
                <TextField
                  name="name"
                  label="Ism"
                  fullWidth
                  margin="normal"
                  value={formData.name}
                  onChange={handleChange}
                />
                <FormControl sx={{ minWidth: 80, maxWidth: 150 }}>
                  <InputLabel id="demo-simple-select-autowidth-label">
                    Number of People
                  </InputLabel>
                  <Select
                    labelId="demo-simple-select-autowidth-label"
                    id="demo-simple-select-autowidth"
                    value={age}
                    onChange={handleCountOfPeople}
                    autoWidth
                    label="Number of People"
                  >
                    <MenuItem value="">
                      <em>None</em>
                    </MenuItem>
                    <MenuItem value={20}>1</MenuItem>
                    <MenuItem value={21}>2</MenuItem>
                    <MenuItem value={22}>3</MenuItem>
                    <MenuItem value={32}>4</MenuItem>
                    <MenuItem value={42}>5</MenuItem>
                    <MenuItem value={52}>6</MenuItem>
                  </Select>
                </FormControl>
                <FormControl>
                  <FormLabel id="demo-controlled-radio-buttons-group">
                    Transport
                  </FormLabel>
                  <RadioGroup
                    aria-labelledby="demo-controlled-radio-buttons-group"
                    name="controlled-radio-buttons-group"
                    value={transport}
                    onChange={handleTransport}
                  >
                    <FormControlLabel
                      value="Need"
                      control={<Radio />}
                      label="Need"
                    />
                    <FormControlLabel
                      value="Needn't"
                      control={<Radio />}
                      label="Needn't"
                    />
                  </RadioGroup>
                </FormControl>
              </Box>
            )}

            {activeStep === 1 && (
              <Box
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "1rem",
                  width: "300px",
                  margin: "auto",
                }}
              >
                {!isCodeSent ? (
                  // 📌 1-qadam: Emailni kiritish va kod yuborish
                  <div>
                    <h2>Email tasdiqlash</h2>
                    <input
                      type="email"
                      placeholder="Emailingizni kiriting"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                    />
                    <button onClick={sendVerificationCode}>Kod yuborish</button>
                  </div>
                ) : (
                  // 📌 2-qadam: Tasdiqlash kodini kiritish
                  <div>
                    <h2>Tasdiqlash kodi</h2>
                    <input
                      type="text"
                      placeholder="Kod kiriting"
                      value={code}
                      onChange={(e) => setCode(e.target.value)}
                    />
                    <button onClick={verifyCode}>Tasdiqlash</button>
                  </div>
                )}
              </Box>
            )}

            <Box sx={{ marginTop: 2 }}>
              {activeStep > 0 && (
                <Button onClick={handleBack} sx={{ marginRight: 2 }}>
                  Orqaga
                </Button>
              )}
              {activeStep < steps.length - 1 ? (
                <Button variant="contained" onClick={handleNext}>
                  Keyingisi
                </Button>
              ) : (
                <Button variant="contained" color="success">
                  Tugatish
                </Button>
              )}
            </Box>
          </Box>
        </BookingFrom>
      </BookingWrapper>
    </Container>
  );
}

export default Booking;
