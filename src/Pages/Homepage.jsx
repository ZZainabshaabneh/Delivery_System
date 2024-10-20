import {Af} from "../components/nav";
 import { Foot } from "../components/footer";
 import { useState } from "react";
import { Navigate } from "react-router-dom";
import { Button } from "@mui/material";
function DeliverySystem() {
  const [loggedIn, setLoggedIn] = useState(false);

  const handleLogin = () => {
    setLoggedIn(true);
  };

  if (loggedIn) {
    return <Navigate to="/Services" />;
  }
 

  return (
    <div
      style={{
        maxWidth: "1280px",
        height: "100%",
        position: "relative",
      }}
    >
      <Af />
      <img
        src="/static/images/89.png"
        alt="delivery service"
        style={{
          position: "relative",
          backgroundSize: "cover",
          margin: 0,
        }}
      />
      <Button
        type="submit"
        variant="contained"
        onClick={handleLogin}
        style={{
          width: "250px",
          height: "40px",
          borderRadius: "20px",
          position: "absolute",
          top: "450px",
          left: "50px",
          backgroundColor: "#046e63",
        }}
      >
       Go to Service Page
      </Button>

      <Foot />
    </div>
  );
}

export default DeliverySystem;
