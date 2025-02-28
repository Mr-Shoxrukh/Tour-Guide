import styled from "@emotion/styled";
import { Box } from "@mui/system";

export const SignInWrapper = styled.form`
  width: 400px;
  border-radius: 40px;
  padding: 20px 30px;
  display: flex;
  border: 3px solid #2196f3;
  justify-content: center;
  flex-direction: column;
  align-items: center;
`;
export const InputBox = styled(Box)({
  width: "100%",
  marginTop: "40px",
  display: "flex",
  flexDirection: "column",
  gap: "4px",
});

export const CreateAcc = styled.div`
  padding: 30px 20px;
  display: flex;
  flex-direction: column;
  button {
    padding: 20px 25px;
    margin-bottom: 20px;
    border-radius: 23px;
  }
`;
