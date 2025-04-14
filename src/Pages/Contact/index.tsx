import {
  Box,
  Button,
  Container,
  TextareaAutosize,
  TextField,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import Headers from "../../Pages/Home/Components/header";
import Footer from "../Home/Components/footer";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import AlternateEmailIcon from "@mui/icons-material/AlternateEmail";
import DateRangeIcon from "@mui/icons-material/DateRange";
import {
  ContactWrapper,
  ContactNumber,
  EmailInput,
  InputWrapper,
  NumberBox,
  PhoneIcon,
  ReachUs,
} from "./style";
import axios from "axios";
import { toast, ToastContainer } from "react-toastify";

type Props = {};

function ContactPage({}: Props) {
  const [form, setForm] = useState({
    name: "",
    phone: "",
    email: "",
    message: "",
  });
  const [errors, setErrors] = useState({
    name: false,
    phone: false,
    email: false,
    message: false,
  });
  const sendToTelegramBot = async (message: string) => {
    const botToken = "7997508632:AAFKuyfBTItJ_csI2kVFdtH8PIQILX3VACs";
    const chatId = "880681928";

    const url = `https://api.telegram.org/bot${botToken}/sendMessage`;

    try {
      await axios.post(url, {
        chat_id: chatId,
        text: message,
      });
      toast.success("Xabar yuborildi!");
    } catch (error) {
      console.error("Xatolik yuz berdi:", error);
    }
  };
  const handelEmailLink = () => {
    window.location.href = "mailto:olimjontolipov8@gmail.com";
  };
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm((prevForm) => ({
      ...prevForm,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault(); // Formni default yuborilishini oldini olish

    // Barcha maydonlarning to‘ldirilganligini tekshirish
    if (
      !form.name.trim() ||
      !form.email.trim() ||
      !form.phone.trim() ||
      !form.message.trim()
    ) {
      toast.error("❌ Iltimos, barcha maydonlarni to‘ldiring!");
      return;
    }
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(form.email)) {
      toast.error("❌ Email manzilingiz noto‘g‘ri formatda!");
      return;
    }
    if (!form.phone.startsWith("+")) {
      toast.error("❌ Telefon raqamining boshida '+' belgisi bo‘lishi shart!");
      return;
    }

    const message = `📩 Yangi xabar:\n👤 Ism: ${form.name}\n📧 Email: ${form.email}\n📞 Telefon: ${form.phone}\n💬 Xabar: ${form.message}`;

    await sendToTelegramBot(message);

    setForm({ name: "", phone: "", email: "", message: "" });
  };

  return (
    <>
      <Headers />
      <Container maxWidth="xl">
        <ContactWrapper>
          <ContactNumber>
            <NumberBox>
              <PhoneIcon>
                <LocalPhoneIcon />
              </PhoneIcon>
              <Typography variant="body1">+998 99 927 22 11</Typography>
            </NumberBox>
            <NumberBox
              onClick={handelEmailLink}
              style={{
                cursor: "pointer",
              }}
            >
              <PhoneIcon>
                <AlternateEmailIcon />
              </PhoneIcon>
              <Typography
                variant="body1"
                sx={{
                  cursor: "pointer",
                }}
                onClick={handelEmailLink}
              >
                olimjontolipov8@gmail.com
              </Typography>
            </NumberBox>
            <NumberBox>
              <PhoneIcon>
                <DateRangeIcon />
              </PhoneIcon>
              <Typography variant="body1">24/7</Typography>
            </NumberBox>
          </ContactNumber>
          <ReachUs>
            <Box>
              <Typography variant="h1" fontSize={30} fontWeight={700}>
                Reach Us Anytime
              </Typography>
            </Box>

            {/* ✅ Formni o'rab oldik */}
            <form onSubmit={handleSubmit}>
              <TextField
                fullWidth
                label="Name"
                name="name"
                value={form.name}
                onChange={handleChange}
                error={errors.name}
                helperText={errors.name ? "Ismni kiriting!" : ""}
              />

              <EmailInput>
                <TextField
                  label="Phone Number"
                  fullWidth
                  name="phone"
                  onChange={handleChange}
                  value={form.phone}
                  error={errors.phone}
                  helperText={
                    errors.phone ? "Telefon raqamini '+' bilan kiriting!" : ""
                  }
                />
                <TextField
                  label="Email"
                  fullWidth
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                  error={errors.email}
                  helperText={errors.email ? "Emailni kiriting!" : ""}
                />
              </EmailInput>

              <TextareaAutosize
                minRows={10}
                maxRows={10}
                placeholder="Message..."
                name="message"
                onChange={handleChange}
                value={form.message}
              />

              <Button type="submit" variant="contained">
                Send
              </Button>
            </form>
          </ReachUs>
        </ContactWrapper>
      </Container>
      <ToastContainer />
      <Footer />
    </>
  );
}

export default ContactPage;
