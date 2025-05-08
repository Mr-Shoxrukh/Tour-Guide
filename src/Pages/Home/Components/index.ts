import styled from "styled-components";
import { Container } from "@mui/material";

export const FooterWr = styled.footer`
  background-color: #101010;
  color: white;
  padding: 40px 0;
  margin-top: 50px;
`;

export const FooterContainer = styled(Container)`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  align-items: center;
  gap: 32px;
  text-align: center;

  @media (min-width: 768px) {
    flex-direction: row;
    align-items: flex-start;
    justify-content: space-evenly;
    text-align: left;
  }
`;

export const FooterLogo = styled.div`
  max-width: 300px;

  img {
    max-width: 100%;
    height: auto;
  }

  h6 {
    margin-top: 16px;
  }

  button {
    margin-top: 16px;
    background-color: #ff9800;
    /* color: #000; */
    padding: 10px 20px;
  }
`;

export const FooterQuickLinks = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;

  a {
    color: #ccc;
    text-decoration: none;

    &:hover {
      color: #ff9800;
      transition: 0.3s;
    }
  }

  h6 {
    margin-bottom: 8px;
    font-weight: bold;
  }
`;

export const FooterContact = styled.div`
  display: flex;
  flex-direction: column;

  h6 {
    margin-bottom: 8px;
    font-weight: bold;
    display: flex;
    align-items: center;
    gap: 8px;
    display: flex;
    align-items: center;
  }

  a {
    color: white;
    text-decoration: none;
    transition: 0.3s;

    &:hover {
      color: #ff9800;
    }
  }

  .section {
    margin-top: 24px;
  }
`;

export const FooterSocial = styled.div`
  display: flex;
  flex-direction: column;

  h6 {
    margin-bottom: 8px;
    font-weight: bold;
  }

  .social-item {
    display: flex;
    align-items: center;
    gap: 8px;
    cursor: pointer;
    margin-top: 8px;
    transition: 0.3s;
    &:hover {
      opacity: 0.8;
      color: #ff9800;
    }
  }
`;

export const FooterBottom = styled.div`
  margin-top: 32px;
  border-top: 1px solid #555;
  padding-top: 16px;
  text-align: center;
  font-size: 14px;
  color: gray;

  a {
    color: white;
    text-decoration: none;
    cursor: pointer;
    transition: 0.3s;

    &:hover {
      color: #ff9800;
      cursor: pointer;
    }
  }
`;
