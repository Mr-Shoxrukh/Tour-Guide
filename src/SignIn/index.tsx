import { Box, Button, Typography } from "@mui/material";
import { GoogleLogin, GoogleLogout } from "react-google-login";
import { useState } from "react";

const CLIENT_ID =
  "487496622984-udocmv12el43mqq6lbcjdv3poprrd63v.apps.googleusercontent.com";

export function SignIn() {
  const [userEmail, setUserEmail] = useState<string | null>(null);

  const onSuccess = (res: any) => {
    console.log("Login muvaffaqiyatli:", res.profileObj);
    setUserEmail(res.profileObj.email); // 📌 Emailni saqlaymiz
  };

  const onFailure = (res: any) => {
    console.log("Login xatosi:", res);
  };

  const handleLogout = () => {
    setUserEmail(null);
    console.log("Foydalanuvchi tizimdan chiqdi.");
  };

  return (
    <Box>
      {!userEmail ? (
        <GoogleLogin
          clientId={CLIENT_ID}
          buttonText="Sign in"
          onSuccess={onSuccess}
          onFailure={onFailure}
          cookiePolicy={"single_host_origin"}
          isSignedIn={true}
          uxMode="redirect" // 📌 Sahifani qayta yuklaydigan usul
        />
      ) : (
        <Box>
          <Typography variant="h6" sx={{ mt: 2 }}>
            Tizimga kirgan email: {userEmail}
          </Typography>

          <GoogleLogout
            clientId={CLIENT_ID}
            buttonText="Log out"
            onLogoutSuccess={handleLogout}
          />
        </Box>
      )}
    </Box>
  );
}

export default SignIn;
