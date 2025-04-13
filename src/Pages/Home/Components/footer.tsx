import { Box, Button, Container, Divider, Typography } from "@mui/material";
import React, { useEffect } from "react";
import Logo from "../../Home/Components/img/logo.jpg";
import CallIcon from "@mui/icons-material/Call";
import {
  Footer__wr,
  FooterContact,
  FooterLogo,
  FooterQuiclLinks,
  FooterSocial,
} from ".";
import TelegramIcon from "@mui/icons-material/Telegram";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import InstagramIcon from "@mui/icons-material/Instagram";
import YouTubeIcon from "@mui/icons-material/YouTube";
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
  const openLink = (url: string) => {
    window.open(url, "_blank");
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

          <FooterQuiclLinks>
            <Typography
              variant="h1"
              fontSize={25}
              fontWeight={"bold"}
              color="#fff"
            >
              Quick Links
            </Typography>
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
            <Typography
              sx={{
                fontSize: "25px",
                fontWeight: "bold",
                color: "#fff",
                display: "flex",
                gap: "13px",
                alignItems: "center",
              }}
            >
              <CallIcon
                sx={{
                  color: "#FF9800",
                  fontSize: "30px",
                }}
              />{" "}
              To More Inquiry
            </Typography>

            <Typography variant="body1">
              <a
                href="https://api.whatsapp.com/send/?phone=998999272211&text&type=phone_number&app_absent=0"
                style={{
                  textDecoration: "none",
                  color: "#fff",
                  fontSize: "24px",
                  fontWeight: "bold",
                }}
              >
                +998(99)927-22-11
              </a>
            </Typography>

            <Typography
              sx={{
                fontSize: "25px",
                fontWeight: "bold",
                color: "#fff",
                display: "flex",
                gap: "13px",
                alignItems: "center",
              }}
            >
              <TelegramIcon
                sx={{
                  color: "#FF9800",
                  fontSize: "30px",
                }}
              />{" "}
              Send Mail
            </Typography>

            <Typography variant="body1">
              <a
                href="https://api.whatsapp.com/send/?phone=998999272211&text&type=phone_number&app_absent=0"
                style={{
                  textDecoration: "none",
                  color: "#fff",
                  fontSize: "24px",
                  fontWeight: "bold",
                }}
              >
                olimjontolipov8@gmail.com
              </a>
            </Typography>
          </FooterContact>
          <FooterSocial>
            <Typography
              variant="h1"
              fontSize={25}
              fontWeight={"bold"}
              color="#fff"
            >
              We Are Here
            </Typography>
            <Box
              onClick={() =>
                openLink(
                  "https://api.whatsapp.com/send/?phone=998999272211&text&type=phone_number&app_absent=0"
                )
              }
            >
              <WhatsAppIcon className="icons" />{" "}
              <Typography variant="body1">WhatsApp</Typography>
            </Box>
            <Box
              onClick={() =>
                openLink("https://www.instagram.com/olimjon_guide/")
              }
            >
              <InstagramIcon className="icons" />
              <Typography variant="body1">Instagram</Typography>
            </Box>
            <Box
              onClick={() =>
                openLink("https://www.youtube.com/@Uzbekistan.tourism")
              }
            >
              <YouTubeIcon className="icons" />
              <Typography variant="body1">Youtobe</Typography>
            </Box>
            <Box onClick={() => openLink("https://t.me/tolipov_olimjon")}>
              <TelegramIcon className="icons" />
              <Typography variant="body1">Telegram</Typography>
            </Box>
          </FooterSocial>
        </Box>
        <Divider />
      </Container>
    </Footer__wr>
  );
}

export default Footer;
