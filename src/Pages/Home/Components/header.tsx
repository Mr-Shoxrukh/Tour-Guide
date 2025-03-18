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
import Logo from "./img/Logo.jpg";
import { Logo__wr } from ".";
import { useNavigate } from "react-router-dom";
import { Avatar } from "@mui/material";
import { getAuth, onAuthStateChanged, signOut, User } from "firebase/auth";
import { app } from "../../../db/firebase";

const auth = getAuth(app);

const pages = [
  "Home",
  "About",
  "Tours",
  "GAllery",
  "Contact",
  "Happy Clients :)",
];
function ResponsiveAppBar() {
  const [anchorElNav, setAnchorElNav] = React.useState<null>(null);
  const [user, setUser] = React.useState<User | null>(null);
  const [anchorElUser, setAnchorElUser] = React.useState<null | HTMLElement>(
    null
  );
  const [showHeader, setShowHeader] = React.useState(true);
  const [lastScrollY, setLastScrollY] = React.useState(0);
  const navigate = useNavigate();

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

  const handleSignUp = () => navigate("/signup");
  const handleLogin = () => navigate("/log-in");

  const handleLogout = async () => {
    await signOut(auth);
    setUser(null);
    navigate("/home");
  };
  return (
    <AppBar
      sx={{
        backgroundColor: "#F2F2F2",
        width: "100%",
        position: "fixed",
        top: showHeader ? 0 : "-80px",
        transition: "top 0.3s ease-in-out",
        color: "#2c2b39",
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
            <Logo__wr>
              <img src={Logo} alt="Logo" />
            </Logo__wr>
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
                  <Typography color="#f4efca">{page}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>

          <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
            {pages.map((page) => (
              <Button
                key={page}
                onClick={() => handleCloseNavMenu(page)}
                sx={{
                  my: 2,

                  display: "block",
                  fontFamily: "Rubik",
                  background: "transparent",
                  transition: "0.3s",
                  color: "#2c2b39",
                  "&:hover": {
                    color: "#d63f1f",
                  },
                }}
              >
                {page}
              </Button>
            ))}
          </Box>

          <Box sx={{ padding: "10px", display: "flex", alignItems: "center" }}>
            <Tooltip title="Tolipov Olimjon">
              <Typography variant="body1"> +998 99 927 22 11</Typography>
            </Tooltip>
          </Box>
          {user ? (
            <Box sx={{ display: "flex", alignItems: "center" }}>
              <IconButton
                onClick={(event) => setAnchorElUser(event.currentTarget)}
              >
                <Avatar
                  src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png"
                  alt="User Avatar"
                />
              </IconButton>
              <Menu
                anchorEl={anchorElUser}
                open={Boolean(anchorElUser)}
                onClose={() => setAnchorElUser(null)}
              >
                <MenuItem onClick={handleLogout}>Log out</MenuItem>
              </Menu>
            </Box>
          ) : (
            <Box
              sx={{
                display: "flex",
                gap: 2,
              }}
            >
              <Button variant="contained" color="inherit" onClick={handleLogin}>
                Login
              </Button>
              <Button
                variant="contained"
                color="inherit"
                onClick={handleSignUp}
              >
                Sign up
              </Button>
            </Box>
          )}
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default ResponsiveAppBar;
