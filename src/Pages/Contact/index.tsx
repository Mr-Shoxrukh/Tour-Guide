import React, { useState } from "react";

import axios from "axios";
import { toast, ToastContainer } from "react-toastify";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";

import {
  Box,
  Button,
  Container,
  TextareaAutosize,
  TextField,
  Typography,
} from "@mui/material";
import AlternateEmailIcon from "@mui/icons-material/AlternateEmail";
import DateRangeIcon from "@mui/icons-material/DateRange";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";

import Headers from "../../Pages/Home/Components/header";
import Footer from "../Home/Components/footer";

import {
  ContactWrapper,
  ContactNumber,
  NumberBox,
  PhoneIcon,
  ReachUs,
} from "./style";

type Props = {};

function ContactPage({}: Props) {
  const [form, setForm] = useState({
    name: "",
    phone: "",
    email: "",
    message: "",
  });
  const [validate, setValidate] = useState<boolean>(false);
  const [phoneNumber, setPhoneNumber] = useState("");
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
      toast.success("Your message has been sent successfully!");
      toast.info("A guide will contact you shortly.");
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
    e.preventDefault();
    if (!form.name.trim() || !form.email.trim() || !phoneNumber.trim()) {
      toast.error("❌ Please fill out all the fields!");
      return;
    }
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(form.email)) {
      toast.error(
        "❌ The email format seems incorrect. Please check and try again."
      );
      return;
    }

    const message = `📩 Yangi xabar:\n👤 Ism: ${form.name}\n📧 Email: ${form.email}\n📞 Telefon: +${phoneNumber}\n💬 Xabar: ${form.message}`;

    await sendToTelegramBot(message);

    setForm({ name: "", phone: "", email: "", message: "" });
  };
  const handleValidChange = (
    value: string,
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setPhoneNumber(value);
    setValidate(validatePhoneNumber(value));
  };

  const validatePhoneNumber = (phoneNumber: string): boolean => {
    const phoneNumberPattern = /^\d{10}$/;
    return phoneNumberPattern.test(phoneNumber);
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
              <Typography variant="body1">+998(99)927 22 11</Typography>
            </NumberBox>
            <NumberBox onClick={handelEmailLink} style={{ cursor: "pointer" }}>
              <PhoneIcon>
                <AlternateEmailIcon />
              </PhoneIcon>
              <Typography variant="body1" sx={{ cursor: "pointer" }}>
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

              <PhoneInput
                country={"us"}
                onChange={handleValidChange}
                value={phoneNumber}
                inputProps={{ required: true }}
                placeholder="Phone number"
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
        <ToastContainer />
      </Container>
      <Footer />
    </>
  );
}

export default ContactPage;
