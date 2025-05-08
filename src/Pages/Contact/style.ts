import styled from "styled-components";

export const ContactWrapper = styled.div`
  margin-top: 180px;
  margin-bottom: 50px;
  width: 100%;
  display: flex;
  justify-content: space-around;
  flex-direction: row-reverse;
  flex-wrap: wrap;
  gap: 30px;
  row-gap: 30px;
`;

export const ContactNumber = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 30px;
  padding-right: 30px;
  flex: 1;
  min-width: 280px;
`;

export const NumberBox = styled.div`
  max-width: 500px;
  padding: 20px 15px;
  border: 1px solid #e0e0e0;
  border-radius: 8px;
  display: flex;
  align-items: center;
  gap: 20px;
  p {
    font-size: 17px;
    font-weight: bold;
  }
`;

export const PhoneIcon = styled.div`
  width: 70px;
  height: 70px;
  border-radius: 50%;
  background-color: #de8500;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #fff;
`;

export const ReachUs = styled.div`
  flex: 2;
  min-width: 300px;
  max-width: 700px;
  width: 100%;
  padding: 25px 30px;
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
    padding: 13px 10px;
    font-size: 18px;
    background-color: #4caf50;
  }

  form {
    display: flex;
    gap: 30px;
    flex-direction: column;
    row-gap: 30px;

    textarea {
      padding: 10px;
      font-size: 16px;
      border: 1px solid gray;
      border-radius: 5px;
      resize: vertical;
    }
  }

  @media (max-width: 768px) {
    padding: 20px;
  }
`;

export const InputWrapper = styled.form`
  width: 100%;
`;

export const EmailInput = styled.div`
  width: 100%;
  display: flex;
  gap: 30px;
  flex-wrap: wrap;

  @media (max-width: 768px) {
    gap: 20px;
  }
`;
