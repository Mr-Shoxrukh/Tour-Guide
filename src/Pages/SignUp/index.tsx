import { Box, Container } from "@mui/system";
import { createClient } from "@supabase/supabase-js";
import { useEffect, useState } from "react";
import { InputBox, SignInWrapper } from "./SignUp";
import { Button, TextField, Typography } from "@mui/material";
import { CreateAcc } from "../LogIn/LogIn";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import { ROUTES_PATH } from "../../routes/path";

function SignUp() {
  const [password, setPassword] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [name, setName] = useState<string>("");
  const [phoneNumber, setNumber] = useState<string>("");
  const [loading, setLoading] = useState(true);

  const supabaseUrl = "https://mjcedactmdisysxnyusx.supabase.co";
  const supabaseKey =
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im1qY2VkYWN0bWRpc3lzeG55dXN4Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3Mzk4NzE0MjksImV4cCI6MjA1NTQ0NzQyOX0.9slbpltg1VrHV4ZxI6gcXvP9zus0kXpQH6oqFmy_RO0";
  const supabase = createClient(supabaseUrl, supabaseKey);

  const navigate = useNavigate();

  const FetchData = async () => {
    setLoading(true);
    try {
      const { data, error } = await supabase.from("userData").select("*");
      if (error) {
        console.error("Error fetching data:", error);
      } else {
        localStorage.setItem("guides", JSON.stringify(data));
      }
    } catch (err) {
      console.error("Unexpected error:", err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    FetchData();
  }, []);

  const handleSubmit = async () => {
    const notifyError = (msg: string) => toast.error(msg);
    const notifySuccess = (msg: string) => toast.success(msg);

    if (
      !name.trim() ||
      !email.trim() ||
      !password.trim() ||
      !phoneNumber.trim()
    ) {
      notifyError("Iltimos, barcha maydonlarni to'ldiring!");
      return;
    }

    try {
      const { data: existingUsers, error: fetchError } = await supabase
        .from("userData")
        .select("email")
        .eq("email", email);

      if (fetchError) {
        console.error("Error checking existing email:", fetchError);
        notifyError("Ma'lumotlarni tekshirishda xatolik yuz berdi!");
        return;
      }

      if (existingUsers && existingUsers.length > 0) {
        notifyError("Bu email allaqachon ro'yxatdan o'tgan!");
        return;
      }

      const { error: insertError } = await supabase
        .from("userData")
        .insert([{ email, name, password, phoneNumber }]);

      if (insertError) {
        console.error("Error inserting data:", insertError);
        notifyError("Foydalanuvchini qo'shishda xatolik yuz berdi!");
        return;
      }

      notifySuccess("Ro'yxatdan muvaffaqiyatli o'tdingiz!");
      FetchData();
      navigate("/home");

      setEmail("");
      setName("");
      setPassword("");
      setNumber("");
    } catch (err) {
      console.error("Unexpected error:", err);
      notifyError("Kutilmagan xatolik yuz berdi!");
    }
  };
  return (
    <Container
      maxWidth="xs"
      sx={{
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <SignInWrapper>
        <Typography variant="h1" fontSize={"29px"} marginBottom={"8px"}>
          Create an account
        </Typography>
        <Typography variant="subtitle1" textAlign={"center"}>
          Create an account to enjoy all the services without any ads for free!
        </Typography>
        <InputBox>
          <TextField
            id="outlined-basic"
            label="Name"
            variant="outlined"
            value={name}
            onChange={(e) => setName(e.target.value)}
            sx={{
              width: "100%",
              background: "#FFFFFF",
            }}
          />
          <br />
          <TextField
            id="outlined-basic"
            label="Number"
            variant="outlined"
            value={phoneNumber}
            onChange={(e) => setNumber(e.target.value)}
            sx={{
              width: "100%",
              background: "#FFFFFF",
            }}
          />
          <br />
          <TextField
            id="outlined-basic"
            label="Email Address"
            variant="outlined"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            sx={{
              width: "100%",
              background: "#FFFFFF",
            }}
          />
          <br />
          <TextField
            id="outlined-basic"
            label="Password"
            variant="outlined"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            sx={{
              width: "100%",
              background: "#FFFFFF",
            }}
          />
          <Button
            variant="contained"
            sx={{
              marginTop: "20px",
              padding: "15px 25px",
              borderRadius: "23px",
              marginBottom: "20px",
            }}
            onClick={handleSubmit}
          >
            Sign Up
          </Button>
          <Typography
            variant="subtitle1"
            textAlign={"center"}
            margin={"20px 0 0 0"}
          >
            Already Have An Account?
            <a href={ROUTES_PATH.LOG_IN}>Log in</a>
          </Typography>
        </InputBox>
        <CreateAcc></CreateAcc>
        <ToastContainer />
      </SignInWrapper>
    </Container>
  );
}

export default SignUp;
