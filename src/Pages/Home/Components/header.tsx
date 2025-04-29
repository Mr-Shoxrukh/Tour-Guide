import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
import CallIcon from "@mui/icons-material/Call";
import Logo from "./img/Logo.png";
import { useLocation, useNavigate } from "react-router-dom";
import { Avatar, Divider } from "@mui/material";
import { getAuth, onAuthStateChanged, signOut, User } from "firebase/auth";
import { app } from "../../../db/firebase";
import { FooterLogo } from ".";

const auth = getAuth(app);

const pages = ["Home", "About", "Tours", "Gallery", "Contact", "happy-clients"];
function ResponsiveAppBar() {
  const [anchorElNav, setAnchorElNav] = React.useState<null>(null);
  const [user, setUser] = React.useState<User | null>(null);
  const [anchorElUser, setAnchorElUser] = React.useState<null | HTMLElement>(
    null
  );
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
        padding: "20px 0",
      }}
    >
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Typography
            variant="h6"
            component="a"
            href="/"
            sx={{
              mr: 2,
              fontFamily: "monospace",
              fontWeight: 700,
              letterSpacing: ".3rem",
              color: "inherit",
              textDecoration: "none",
            }}
          >
            <FooterLogo>
              <img width={"80px"} src={Logo} alt="Logo" />
            </FooterLogo>
          </Typography>

          <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
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

          <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
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
                    borderBottom: isActive ? "2px solid #FF9800" : "none", // 🟠 faqat aktiv sahifa uchun chiziq
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

          <Box
            sx={{
              padding: "10px",
              display: "flex",
              gap: "10px",
              alignItems: "center",
            }}
          >
            <CallIcon
              sx={{
                fontSize: "30px",
                color: "#55bd00",
                cursor: "pointer",
              }}
              onClick={() =>
                openLink("https://api.whatsapp.com/send/?phone=998999272211")
              }
            />{" "}
            <Divider orientation="vertical" flexItem />
            <Box>
              <Typography
                sx={{
                  fontSize: "16px",
                  fontWeight: "bold",
                  cursor: "pointer",
                }}
                onClick={() =>
                  openLink("https://api.whatsapp.com/send/?phone=998999272211")
                }
              >
                To More Inquiry
              </Typography>
              <Tooltip
                title="Tolipov Olimjon"
                sx={{
                  fontSize: "24px",
                }}
              >
                <Typography
                  variant="body1"
                  sx={{
                    "@media (max-width: 450px)": {
                      display: "none",
                    },
                  }}
                >
                  <a
                    href="https://api.whatsapp.com/send/?phone=998999272211&text&type=phone_number&app_absent=0"
                    style={{
                      textDecoration: "none",
                      color: "#55bd00",
                      fontSize: "18px",
                      fontWeight: "bold",
                    }}
                  >
                    +998(99)927-22-11
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
