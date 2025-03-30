import React from "react";
import { TourWrapper } from "./style";
import UltimateTour from "../Home/Components/Ultimate Travel";
import Header from "../../Pages/Home/Components/header";
import { Container } from "@mui/material";
import Footer from "../Home/Components/footer";
type Props = {};

function ToursPage({}: Props) {
  return (
    <>
      <Container maxWidth="xl">
        <Header />
        <TourWrapper>
          <UltimateTour />
        </TourWrapper>
      </Container>
      <Footer />
    </>
  );
}

export default ToursPage;
