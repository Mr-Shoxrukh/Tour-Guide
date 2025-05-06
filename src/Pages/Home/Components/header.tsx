import * as React from "react";

import { getAuth, onAuthStateChanged, User } from "firebase/auth";
import { useLocation, useNavigate } from "react-router-dom";

import {
  AppBar,
  Box,
  Toolbar,
  IconButton,
  Typography,
  Menu,
  Container,
  Button,
  Tooltip,
  MenuItem,
  Divider,
} from "@mui/material";

import CallIcon from "@mui/icons-material/Call";

import { app } from "../../../db/firebase";
import Logo from "./img/Logo.png";
import { FooterLogo } from ".";

const auth = getAuth(app);

const pages = ["Home", "About", "Tours", "Gallery", "Contact", "happy-clients"];
function ResponsiveAppBar() {
  const [anchorElNav, setAnchorElNav] = React.useState<null>(null);
  const [user, setUser] = React.useState<User | null>(null);
  const [showHeader, setShowHeader] = React.useState(true);
  const [lastScrollY, setLastScrollY] = React.useState(0);
  const navigate = useNavigate();
  const location = useLocation();
  React.useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });

    return () => {
      unsubscribe();
    };
  }, []);
  React.useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > lastScrollY) {
        setShowHeader(false);
      } else {
        setShowHeader(true);
      }
      setLastScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [lastScrollY]);
  const handleOpenNavMenu = (event: any) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = (page?: string) => {
    setAnchorElNav(null);
    if (page) navigate(`/${page.toLowerCase().replace(/\s+/g, "-")}`);
  };
  const openLink = (url: string) => {
    window.open(url, "_blank");
  };
  return (
    <AppBar
      sx={{
        backgroundColor: "#F2F2F2",
        width: "100%",
        position: "fixed",
        top: showHeader ? 0 : "-120px",
        transition: "top 0.3s ease-in-out",
        color: "#2c2b39",
      }}
    >
      <Container maxWidth="xl">
        <Toolbar disableGutters sx={{ justifyContent: "space-between" }}>
          {/* Logo */}
          <Typography
            variant="h6"
            component="a"
            href="/"
            sx={{
              fontFamily: "monospace",
              fontWeight: 700,
              letterSpacing: ".3rem",
              color: "inherit",
              textDecoration: "none",
              display: "flex",
              alignItems: "center",
            }}
          >
            <FooterLogo>
              <img width={"80px"} src={Logo} alt="Logo" />
            </FooterLogo>
          </Typography>

          {/* Mobile menu (xs to md) */}
          <Box sx={{ display: { xs: "flex", md: "none" } }}>
            <IconButton
              size="large"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              ☰
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              open={Boolean(anchorElNav)}
              onClose={() => handleCloseNavMenu()}
            >
              {pages.map((page) => (
                <MenuItem key={page} onClick={() => handleCloseNavMenu(page)}>
                  <Typography>{page}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>

          {/* Desktop menu (md and up) */}
          <Box sx={{ display: { xs: "none", md: "flex" }, gap: 2 }}>
            {pages.map((page) => {
              const pagePath = `/${page.toLowerCase().replace(/\s+/g, "-")}`;
              const isActive = location.pathname === pagePath;

              return (
                <Button
                  key={page}
                  onClick={() => handleCloseNavMenu(page)}
                  sx={{
                    fontFamily: "Rubik",
                    background: "transparent",
                    transition: "0.3s",
                    color: isActive ? "#FF9800" : "#2c2b39",
                    borderRadius: 0,
                    borderBottom: isActive ? "2px solid #FF9800" : "none",
                    "&:hover": {
                      color: "#FF9800",
                    },
                  }}
                >
                  {page}
                </Button>
              );
            })}
          </Box>

          {/* Contact info */}
          <Box
            sx={{
              padding: { xs: "5px", md: "10px" },
              display: "flex",
              alignItems: "center",
              gap: { xs: 1, sm: 2 },
            }}
          >
            <CallIcon
              sx={{
                fontSize: { xs: "24px", sm: "28px", md: "30px" },
                color: "#55bd00",
                cursor: "pointer",
              }}
              onClick={() =>
                openLink("https://api.whatsapp.com/send/?phone=998999272211")
              }
            />
            <Divider orientation="vertical" flexItem />
            <Box sx={{ display: "flex", flexDirection: "column" }}>
              <Typography
                sx={{
                  fontSize: { xs: "12px", sm: "14px", md: "16px" },
                  fontWeight: "bold",
                  cursor: "pointer",
                }}
                onClick={() =>
                  openLink("https://api.whatsapp.com/send/?phone=998999272211")
                }
              >
                To More Inquiry
              </Typography>
              <Tooltip title="Tolipov Olimjon">
                <Typography
                  variant="body1"
                  sx={{
                    fontSize: { xs: "13px", sm: "14px", md: "16px" },
                    display: {
                      xs: "none",
                      sm: "inline",
                    },
                  }}
                >
                  <a
                    href="https://api.whatsapp.com/send/?phone=998331420077"
                    style={{
                      textDecoration: "none",
                      color: "#55bd00",
                      fontWeight: "bold",
                    }}
                  >
                    +998(33)142-00-77
                  </a>
                </Typography>
              </Tooltip>
            </Box>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default ResponsiveAppBar;
