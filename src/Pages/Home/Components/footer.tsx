import { Box, Button, Container, Divider, Typography } from "@mui/material";
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
      <Container maxWidth="xl">
        <Box
          sx={{
            width: "100%",
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          <ScrollToTop />
          <FooterLogo>
            <img src={Logo} alt="" />
            <Typography variant="h1">Want to Take Tour Packages?</Typography>
            <Button variant="contained">Book a Tour</Button>
          </FooterLogo>

          <Box>
            <FooterQuiclLinks>
              <Typography variant="h2">Quick Links</Typography>
              <Link
                to="/home"
                className="link"
                onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
              >
                Home
              </Link>
              <Link
                to="/about"
                className="link"
                onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
              >
                About
              </Link>
              <Link
                to="/tours"
                className="link"
                onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
              >
                Tours
              </Link>
              <Link
                to="/gallery"
                className="link"
                onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
              >
                Gallery
              </Link>
              <Link
                to="/contact"
                className="link"
                style={{ textDecoration: "none" }}
                onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
              >
                Contact
              </Link>
              <Link
                to="/happy-clients"
                className="link"
                onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
              >
                Happy Clients
              </Link>
            </FooterQuiclLinks>
            <FooterContact>
              <Box>
                <Typography
                  sx={{
                    fontSize: "16px",
                    fontWeight: "bold",
                  }}
                >
                  To More Inquiry
                </Typography>

                <Typography variant="body1" sx={{}}>
                  <a
                    href="https://api.whatsapp.com/send/?phone=998999272211&text&type=phone_number&app_absent=0"
                    style={{
                      textDecoration: "none",
                      color: "#55bd00",
                      fontSize: "24px",
                      fontWeight: "bold",
                    }}
                  >
                    +998999272211
                  </a>
                </Typography>
              </Box>
            </FooterContact>
            <FooterSocial></FooterSocial>
          </Box>
          <Divider />
        </Box>
      </Container>
    </Footer__wr>
  );
}

export default Footer;
