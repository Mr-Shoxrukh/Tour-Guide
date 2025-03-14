import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import { Button, Container, TextField } from "@mui/material";
import { InputBox, SignInWrapper } from "./SignUp";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth, db } from "../../db/firebase";
import { doc, setDoc } from "firebase/firestore";

const SignUp = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

  const handleSignUp = async () => {
    if (
      !name.trim() ||
      !email.trim() ||
      !password.trim() ||
      !phoneNumber.trim()
    ) {
      toast.warning("Iltimos, barcha maydonlarni to'ldiring!");
      return;
    }

    if (password.length < 6) {
      toast.warning("Parol kamida 6 ta belgidan iborat bo‘lishi kerak!");
      return;
    }

    setLoading(true);

    try {
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      const user = userCredential.user;

      await updateProfile(user, { displayName: name });

      await setDoc(doc(db, "userdata", user.uid), {
        id: user.uid,
        email,
        name,
        phoneNumber,
      });

      toast.success(
        "Ro'yxatdan muvaffaqiyatli o'tdingiz! Emailingizni tasdiqlang."
      );
      navigate("/home");
    } catch (error: any) {
      console.error("Auth xatolik:", error.message);
      toast.error("Ro‘yxatdan o‘tishda xatolik: " + error.message);
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
            value={phoneNumber}
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
