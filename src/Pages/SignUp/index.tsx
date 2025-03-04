import { useState } from "react";
import { createClient } from "@supabase/supabase-js";
import { useNavigate } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import { Button, Container, TextField } from "@mui/material";
import { InputBox, SignInWrapper } from "./SignUp";

const supabaseUrl = "https://mjcedactmdisysxnyusx.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im1qY2VkYWN0bWRpc3lzeG55dXN4Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3Mzk4NzE0MjksImV4cCI6MjA1NTQ0NzQyOX0.9slbpltg1VrHV4ZxI6gcXvP9zus0kXpQH6oqFmy_RO0"; // 🔒 API kalitingizni oshkor qilmang!
const supabase = createClient(supabaseUrl, supabaseKey);

const SignUp = () => {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [name, setName] = useState<string>("");
  const [phonenumber, setPhoneNumber] = useState<string>("");
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

  const handleSignUp = async () => {
    if (
      !name.trim() ||
      !email.trim() ||
      !password.trim() ||
      !phonenumber.trim()
    ) {
      toast.warning("Iltimos, barcha maydonlarni to'ldiring!");
      return;
    }

    setLoading(true);

    try {
      const { data: authData, error: authError } = await supabase.auth.signUp({
        email,
        password,
      });

      if (authError) {
        console.error("Auth xatolik:", authError);
        toast.error(authError.message);
        return;
      }

      // 🔹 2. Foydalanuvchi yaratildi, endi qo‘shimcha ma'lumotlarni saqlaymiz
      const { error: dbError } = await supabase.from("userdata").insert([
        {
          id: authData.user?.id, // Foydalanuvchi ID
          email,
          name,
          phonenumber,
        },
      ]);

      if (dbError) {
        console.error("Ma'lumotlar bazasiga yozishda xatolik:", dbError);
        toast.error(
          "Foydalanuvchi ma'lumotlarini saqlashda xatolik yuz berdi."
        );
        return;
      }

      toast.success(
        "Ro'yxatdan muvaffaqiyatli o'tdingiz! Emailingizni tasdiqlang."
      );
      navigate("/home"); // 🔹 Email tasdiqlash sahifasiga o'tkazish
    } catch (err) {
      console.error("Kutilmagan xatolik:", err);
      toast.error("Kutilmagan xatolik yuz berdi!");
    } finally {
      setLoading(false);
    }
  };

  return (
    <Container>
      <SignInWrapper>
        <h2>Ro'yxatdan o'tish</h2>
        <InputBox>
          <TextField
            type="text"
            placeholder="Ismingiz"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <TextField
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <TextField
            type="password"
            placeholder="Parol"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <TextField
            type="text"
            placeholder="Telefon raqam"
            value={phonenumber}
            onChange={(e) => setPhoneNumber(e.target.value)}
          />
        </InputBox>
        <Button onClick={handleSignUp} disabled={loading}>
          {loading ? "Yuklanmoqda..." : "Ro'yxatdan o'tish"}
        </Button>
      </SignInWrapper>
      <ToastContainer />
    </Container>
  );
};

export default SignUp;
