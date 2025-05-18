import { Box, Button, Container, Divider, Typography } from "@mui/material";
import React, { useEffect } from "react";
import Logo from "../../Home/Components/img/FooterBlackLogo.png";
import CallIcon from "@mui/icons-material/Call";
import {
  FooterWr,
  FooterBottom,
  FooterContact,
  FooterLogo,
  FooterQuickLinks,
  FooterSocial,
  FooterContainer,
} from ".";

import TelegramIcon from "@mui/icons-material/Telegram";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import InstagramIcon from "@mui/icons-material/Instagram";
import YouTubeIcon from "@mui/icons-material/YouTube";
import { Link, useLocation, useNavigate } from "react-router-dom";

type Props = {};

function Footer({}: Props) {
  const navagate = useNavigate();

  const handelEmailLink = () => {
    window.location.href = "mailto:toshxujayivshuhrat7@gmail.com";
  };
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
  const handleBookTour = () => {
    navagate("/contact");
  };
  return (
    <FooterWr>
      <FooterContainer maxWidth="xl">
        <FooterLogo>
          <img width={200} src={Logo} alt="logo" />
        </FooterLogo>

        <FooterQuickLinks>
          <Typography variant="h6">Quick Links</Typography>
          {[
            "Home",
            "About",
            "Tours",
            "Gallery",
            "Contact",
            "Happy Clients",
          ].map((item, i) => (
            <Link key={i} to={`/${item.toLowerCase().replace(" ", "-")}`}>
              {item}
            </Link>
          ))}
        </FooterQuickLinks>

        <FooterContact>
          <Typography variant="h6">
            <CallIcon /> To More Inquiry
          </Typography>
          <Box
            marginBottom={3}
            display={"flex"}
            flexDirection={"column"}
            gap={2}
          >
            <a href="tel:+998999272211">+998(99)927-22-11</a>
            <a href="tel:+998331420077">+998(33) 142 00 77</a>
          </Box>

          <Typography variant="h6">
            <TelegramIcon /> Send Mail
          </Typography>
          <Box flexDirection={"column"} display="flex" gap={1}>
            <a href="mailto:olimjontolipov8@gmail.com">
              olimjontolipov8@gmail.com
            </a>
            <a href="mailto:berdiyevsanat5@gmail.com">
              berdiyevsanat5@gmail.com
            </a>
          </Box>
        </FooterContact>

        <FooterSocial>
          <Typography variant="h6">We Are Here</Typography>
          <div
            className="social-item"
            onClick={() =>
              openLink("https://api.whatsapp.com/send/?phone=998999272211")
            }
          >
            <WhatsAppIcon />
            <Typography>WhatsApp</Typography>
          </div>
          <div
            className="social-item"
            onClick={() => openLink("https://www.instagram.com/olimjon_guide/")}
          >
            <InstagramIcon />
            <Typography>Instagram</Typography>
          </div>
          <div
            className="social-item"
            onClick={() =>
              openLink("https://www.youtube.com/@Uzbekistan.tourism")
            }
          >
            <YouTubeIcon />
            <Typography>YouTube</Typography>
          </div>
          <div
            className="social-item"
            onClick={() => openLink("https://t.me/tolipov_olimjon")}
          >
            <TelegramIcon />
            <Typography>Telegram</Typography>
          </div>
        </FooterSocial>
      </FooterContainer>

      <FooterBottom>
        © Copyright 2024 | Developed by{" "}
        <a onClick={handelEmailLink}>Shuxrat Toshxujayev</a>
      </FooterBottom>
    </FooterWr>
  );
}

export default Footer;
