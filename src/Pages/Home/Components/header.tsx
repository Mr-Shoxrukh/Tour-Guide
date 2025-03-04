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
import { useNavigate, useParams } from "react-router-dom";
import { createClient } from "@supabase/supabase-js";
import { ROUTES_PATH } from "../../../routes/path";
import { User } from "@supabase/supabase-js";
const pages = [
  "Home",
  "About",
  "Tours",
  "GAllery",
  "Contact",
  "Happy Clients :)",
];
function ResponsiveAppBar() {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [user, setUser] = React.useState<User | null>(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);
  const navigate = useNavigate();

  const supabaseUrl = "https://mjcedactmdisysxnyusx.supabase.co";
  const supabaseKey =
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im1qY2VkYWN0bWRpc3lzeG55dXN4Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3Mzk4NzE0MjksImV4cCI6MjA1NTQ0NzQyOX0.9slbpltg1VrHV4ZxI6gcXvP9zus0kXpQH6oqFmy_RO0";
  const supabase = createClient(supabaseUrl, supabaseKey);

  React.useEffect(() => {
    const fetchUser = async () => {
      const { data, error } = await supabase.auth.getUser();
      if (data?.user) {
        setUser(data.user);
      } else {
        setUser(null);
      }
    };

    fetchUser();

    const { data: authListener } = supabase.auth.onAuthStateChange(
      (event, session) => {
        if (session?.user) {
          setUser(session.user);
        } else {
          setUser(null);
        }
      }
    );

    return () => {
      authListener.subscription.unsubscribe();
    };
  }, []);

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
    await supabase.auth.signOut();
    setUser(null);
    navigate("/");
  };
  return (
    <AppBar sx={{ background: "#dd2c00" }} position="static">
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

          {/* Desktop menyu */}
          <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
            {pages.map((page) => (
              <Button
                key={page}
                onClick={() => handleCloseNavMenu(page)}
                sx={{ my: 2, color: "white", display: "block" }}
              >
                {page}
              </Button>
            ))}
          </Box>

          <Box sx={{ padding: "10px", display: "flex", alignItems: "center" }}>
            <Tooltip title="Tolipov Olimjon">
              <Typography variant="body1">📞 +998 99 927 22 11</Typography>
            </Tooltip>
          </Box>
          <Box
            sx={{
              display: "flex",
              gap: 1,
            }}
          >
            <Button variant="contained" onClick={handleSignUp}>
              Sign in
            </Button>
            <Button variant="contained" onClick={handleLogin}>
              Login
            </Button>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default ResponsiveAppBar;
