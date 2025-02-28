import styled from "@emotion/styled";
import { Box } from "@mui/system";

export const LogInWrapper = styled.form`
  max-width: 500px;
  width: 100%;
  height: 100vh;
  border-radius: 40px;
  padding: 0 30px;
  display: flex;
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
  width: 100%;
  padding: 30px 20px;
  display: flex;
  flex-direction: column;
  button {
    width: 100%;
    padding: 15px 0;
    margin-bottom: 20px;
    border-radius: 23px;
  }
`;
