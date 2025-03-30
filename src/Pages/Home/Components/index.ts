import styled from "styled-components";

export const Logo__wr = styled.div`
  width: 80px;
  height: 80px;
  display: flex;
  align-items: center;
  img {
    width: 100%;
  }
`;
export const Footer__wr = styled.footer`
  width: 100%;
  padding: 40px 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 30px;
  background-color: #000;
`;
export const FooterLogo = styled.div`
  width: 200px;
  display: flex;
  flex-direction: column;
  align-items: center;
  row-gap: 20px;
  img {
    width: 100%;
    height: 100px;
  }
  h1 {
    font-size: 25px;
    color: white;
  }
  button {
    width: 100%;
    background-color: #dd2c00;
  }
`;

export const FooterQuiclLinks = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  h2 {
    color: white;
    font-size: 24px;
  }
`;
export const FooterContact = styled.div``;
export const FooterSocial = styled.div``;
