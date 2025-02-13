import { Box, Container, Typography } from "@mui/material";
import React from "react";
import Header from "./Components/header";
import {
  GUides__wrapper,
  Registan__wrapper,
  Tour_Actives,
  TourActTitle,
  TourGallery,
} from "./styled";
import Guides from "./Components/img/guiedes.png";
import olimJon from "./Components/img/olimJOn.png";
import Olim_jurasi from "./Components/img/olimni_jurasi.png";
// import img1 from "../../Pages/Home/Components/img/img1.jpg";
import img2 from "../../Pages/Home/Components/img/img2.jpg";
import img3 from "../../Pages/Home/Components/img/img3.jpg";
import img4 from "../../Pages/Home/Components/img/img4.jpg";
import img5 from "../../Pages/Home/Components/img/img5.jpg";
import img6 from "../../Pages/Home/Components/img/img6.jpg";
import img7 from "../../Pages/Home/Components/img/img7.jpg";
import img8 from "../../Pages/Home/Components/img/img8.jpg";
import img9 from "../../Pages/Home/Components/img/img9.jpg";
type Props = {};

function Home({}: Props) {
  return (
    <Container maxWidth="xl">
      <Header />
      <Registan__wrapper>
        <Box
          sx={{
            width: "500px",
            position: "absolute",
            top: "200px",
            left: "20px",
          }}
        >
          <Typography variant="h1" color="#fff" fontSize={44}>
            Uzbekistan Tours <br /> Explore Every Region with Expert Guides
          </Typography>
        </Box>
        <GUides__wrapper>
          <img
            src={olimJon}
            alt=""
            style={{
              width: "100%",
            }}
          />
          <img
            src={Olim_jurasi}
            alt=""
            style={{
              width: "100%",
            }}
          />
        </GUides__wrapper>
      </Registan__wrapper>
      <Tour_Actives>
        <TourActTitle>
          <Typography variant="h1">Exploring Tour Activities</Typography>
        </TourActTitle>
        <TourGallery>
          {/* <img src={img1} alt="" /> */}
          <img src={img2} alt="" />
          <img src={img3} alt="" />
          <img src={img4} alt="" />
          <img src={img5} alt="" />
          <img src={img6} alt="" />
          <img src={img7} alt="" />
          {/* <img src={img8} alt="" /> */}
          {/* <img src={img9} alt="" /> */}
        </TourGallery>
      </Tour_Actives>
    </Container>
  );
}

export default Home;
