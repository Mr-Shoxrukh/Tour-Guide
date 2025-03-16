import { useState, useEffect } from "react";
import { toast, ToastContainer } from "react-toastify";
import { Box, Button, Container, TextField } from "@mui/material";
import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { auth } from "../../db/firebase";
import { Navigate } from "react-router-dom";
import Home from "../Home";

const Login = () => {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [user, setUser] = useState<any>(null);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      if (currentUser) {
        console.log("Foydalanuvchi ma’lumotlari:", currentUser);
        setUser(currentUser);
        console.log(auth);
      } else {
        console.log("Foydalanuvchi tizimga kirmagan.");
        setUser(null);
      }
    });

    return () => unsubscribe();
  }, []);

  // 🔥 Ro‘yxatdan o‘tish funksiyasi
  const handleSignUp = async () => {
    if (password.length < 6) {
      toast.error("Parol kamida 6 ta belgidan iborat bo‘lishi kerak!");
      return;
    }

    setLoading(true);
    try {
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      toast.success("Emailingizga tasdiqlash kodi yuborildi!");
      console.log("Ro‘yxatdan o‘tgan foydalanuvchi:", userCredential.user);
    } catch (error: any) {
      toast.error("Ro‘yxatdan o‘tishda xatolik: " + error.message);
    }
    setLoading(false);
  };

  // 🔥 Login funksiyasi
  const handleLogin = async () => {
    console.log("login urunish", email, password);
    setLoading(true);

    try {
      const userCredential = await signInWithEmailAndPassword(
        auth,
        email,
        password
      );
      toast.success("Muvaffaqiyatli tizimga kirdingiz!");
      navigate(`/home`);
      setUser(userCredential.user);
    } catch (error: any) {
      toast.error("Login xatosi: " + error.message);
    }

    setLoading(false);
  };

  // 🔥 Logout funksiyasi
  const handleLogout = async () => {
    try {
      await signOut(auth);
      toast.success("Tizimdan chiqildi!");
      setUser(null);
    } catch (error: any) {
      toast.error("Tizimdan chiqishda xatolik: " + error.message);
    }
  };

  return (
    <Container maxWidth="xl">
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
        <Home />
      )}
      <ToastContainer />
    </Container>
  );
};

export default Login;
