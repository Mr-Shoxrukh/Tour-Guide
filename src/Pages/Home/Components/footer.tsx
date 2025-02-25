import { Button, Container, Divider, Typography } from "@mui/material";
import React, { useEffect } from "react";
import Logo from "../../Home/Components/img/Logo.jpg";
import {
  Footer__wr,
  FooterContact,
  FooterLogo,
  FooterQuiclLinks,
  FooterSocial,
} from ".";
import { Link, useLocation } from "react-router-dom";

type Props = {};

function Footer({}: Props) {
  const ScrollToTop = () => {
    const { pathname } = useLocation();

    useEffect(() => {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }, [pathname]);

    return null;
  };

  return (
    <Footer__wr>
      <Container>
        <ScrollToTop />
        <FooterLogo>
          <img src={Logo} alt="" />
          <Typography variant="h1">Want to Take Tour Packages?</Typography>
          <Button variant="contained">Book a Tour</Button>
        </FooterLogo>
        <FooterQuiclLinks>
          <Typography variant="h2">Quick Links</Typography>
          <Link
            to="/home"
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          >
            Home
          </Link>
          <Link
            to="/about"
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          >
            About
          </Link>
          <Link
            to="/tours"
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          >
            Tours
          </Link>
          <Link
            to="/gallery"
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          >
            Gallery
          </Link>
          <Link
            to="/contact"
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          >
            Contact
          </Link>
          <Link
            to="/happy-clients"
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          >
            Happy Clients
          </Link>
        </FooterQuiclLinks>
        <FooterContact></FooterContact>
        <FooterSocial></FooterSocial>
        <Divider />
      </Container>
    </Footer__wr>
  );
}

export default Footer;
