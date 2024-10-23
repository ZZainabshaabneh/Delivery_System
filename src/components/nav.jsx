import HomeIcon from "@mui/icons-material/Home";
import { AppBar, Toolbar, Typography, Button } from "@mui/material";  
import { Navigate } from "react-router-dom";
import { useState } from "react";
import "../App.css";

function Navn() {
  const [loggedIn, setLoggedIn] = useState(false);

  const handleLogin = () => {
    setLoggedIn(true);
  };

  if (loggedIn) {
    return <Navigate to="/signin" />;
  }

  return (
    <>
      <AppBar style={{ backgroundColor: "#046E63" }}>
        <Toolbar>
          <img
            src="/static/images/S2.png"
            alt="logo"
            style={{ height: 45, marginRight: "20px", borderRadius: "50%" }}
          />
          <Typography
            variant="h6"
            component="div"
            flexGrow="1"
            position={"relative"}
          >
            Delivery Service
          </Typography>
          <Button color="inherit" startIcon={<HomeIcon />} href="/">
            Home
          </Button>
          <Button color="inherit" href="/Catalog">
            catalog
          </Button>
          <Button color="inherit" href="/Contact">
            Contact us
          </Button>
          <Button color="inherit" variant="outlined" onClick={handleLogin}>
            Log In
          </Button>
        </Toolbar>
      </AppBar>
    </>
  );
}

export default Navn;

export function Af() {
  const [loggedIn, setLoggedIn] = useState(false);

  const handleLogin = () => {
    setLoggedIn(true);
  };

  if (loggedIn) {
    return <Navigate to="/" />;
  }

  return (
    <>
      <AppBar style={{ backgroundColor: "#046E63" }}>
        <Toolbar>
          <img
            src="/static/images/S2.png"
            alt="logo"
            style={{ height: 45, marginRight: "20px", borderRadius: "50%" }}
          />
          <Typography variant="h6" component="div" flexGrow="1">
            Delivery Service
          </Typography>

          <Button color="inherit" startIcon={<HomeIcon />} href="/Home">
            Home
          </Button>
          <Button color="inherit" href="/OrderPage">
            Order Now
          </Button>
          <Button color="inherit" href="/Contact">
            Contact us
          </Button>
          <Button color="inherit" variant="outlined" onClick={handleLogin}>
            LogOut
          </Button>
        </Toolbar>
      </AppBar>
    </>
  );
}
