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
import PhoneInput, { CountryData } from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
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
      !phoneNumber.trim() ||
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

    const message = `📩 Yangi xabar:\n👤 Ism: ${form.name}\n📧 Email: ${form.email}\n📞 Telefon: +${phoneNumber}\n💬 Xabar: ${form.message}`;

    await sendToTelegramBot(message);

    setForm({ name: "", phone: "", email: "", message: "" });
  };
  const handleValidChange = (
    value: string,
    data: {} | CountryData,
    event: React.ChangeEvent<HTMLInputElement>,
    formattedValue: string
  ) => {
    const input = event.target.value;
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
                <PhoneInput
                  country={"us"}
                  onChange={handleValidChange}
                  value={phoneNumber}
                  inputProps={{
                    required: true,
                  }}
                  inputStyle={{
                    padding: "27px 15px",
                    width: "90%",
                    border: "1px solid #e0e0e0",
                    borderRadius: "5px",
                    fontSize: "16px",
                    marginLeft: "50px",
                  }}
                  buttonStyle={{
                    borderRadius: "8px",

                    padding: "10px",
                  }}
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
