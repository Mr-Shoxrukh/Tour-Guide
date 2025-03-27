import styled from "styled-components";

export const Contact__wrapper = styled.div`
  width: 100%;
  margin-top: 120px;
  height: 50vh;
  display: flex;
  gap: 30px;
`;
export const ContactNumber = styled.div`
  width: 50%;
  display: flex;
  flex-direction: column;
  gap: 20px;
`;
export const NumberBox = styled.div`
  width: 100%;
  max-width: 460px;
  padding: 10px 15px;
  border: 1px solid #e0e0e0;
  border-radius: 8px;
  display: flex;
  align-items: center;
  gap: 10px;
  p {
    font-size: 17px;
    font-weight: bold;
  }
`;
export const PhoneIcon = styled.div`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background-color: #de8500;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #fff;
`;
export const ReachUs = styled.div`
  width: 100%;
  padding: 35px 50px;
  background-color: rgb(255, 251, 235);
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  gap: 20px;
  input {
    background-color: #fff;
  }
  button {
    width: 200px;
    padding: 15px;
    font-size: 18px;
    background-color: #4caf50;
  }
  .form {
    display: flex;
    gap: 30px;
    flex-direction: column;
    row-gap: 30px;
  }
`;
export const InputWrapper = styled.form`
  width: 100%;
`;
export const EmailInput = styled.div`
  width: 100%;
  display: flex;
  gap: 30px;
`;
