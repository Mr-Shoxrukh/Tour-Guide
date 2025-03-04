import { useState, useEffect } from "react";
import { createClient } from "@supabase/supabase-js";
import { toast, ToastContainer } from "react-toastify";
import { Box, Button, Container, TextField } from "@mui/material";

const supabaseUrl = "https://mjcedactmdisysxnyusx.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im1qY2VkYWN0bWRpc3lzeG55dXN4Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3Mzk4NzE0MjksImV4cCI6MjA1NTQ0NzQyOX0.9slbpltg1VrHV4ZxI6gcXvP9zus0kXpQH6oqFmy_RO0";
const supabase = createClient(supabaseUrl, supabaseKey);
const Auth = () => {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [user, setUser] = useState<any>(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const checkUser = async () => {
      const { data, error } = await supabase.auth.getUser();
      if (data?.user) {
        console.log("Foydalanuvchi ma’lumotlari:", data.user);
      } else {
        console.error("Foydalanuvchi topilmadi:", error);
      }
    };
    checkUser();
  }, []);

  const handleSignUp = async () => {
    if (password.length < 6) {
      toast.error("Parol kamida 6 ta belgidan iborat bo‘lishi kerak!");
      return;
    }

    setLoading(true);
    const { data, error } = await supabase.auth.signUp({
      email,
      password,
    });

    if (error) {
      toast.error("Ro‘yxatdan o‘tishda xatolik: " + error.message);
    } else {
      toast.success("Emailingizga tasdiqlash kodi yuborildi!");
    }
    setLoading(false);
  };

  const handleLogin = async () => {
    setLoading(true);
    const { data, error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });

    if (error) {
      toast.error("Login xatosi: " + error.message);
    } else {
      toast.success("Muvaffaqiyatli tizimga kirdingiz!");
      setUser(data.user);
    }
    setLoading(false);
  };

  // ✅ 4. Tizimdan chiqish
  const handleLogout = async () => {
    await supabase.auth.signOut();
    toast.success("Tizimdan chiqildi!");
    setUser(null);
  };

  return (
    <Container maxWidth="xl">
      <h2>Supabase Auth</h2>

      {!user ? (
        <Box>
          <TextField
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            style={{ margin: "10px", padding: "10px", width: "250px" }}
          />
          <br />
          <TextField
            type="password"
            placeholder="Parol"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            style={{ margin: "10px", padding: "10px", width: "250px" }}
          />
          <br />
          <Button onClick={handleSignUp} disabled={loading}>
            Ro‘yxatdan o‘tish
          </Button>
          <Button onClick={handleLogin} disabled={loading}>
            Kirish
          </Button>
        </Box>
      ) : (
        <Box>
          <h3>Xush kelibsiz, {user.email}!</h3>
          <Button onClick={handleLogout}>Chiqish</Button>
        </Box>
      )}
      <ToastContainer />
    </Container>
  );
};

export default Auth;
