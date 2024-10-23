
import Navn from "../components/nav";
import { Button} from "@mui/material";
import { Foot } from "../components/footer";
import { Navigate } from "react-router-dom";
import { useState } from "react";
 
function DeliverySystem() {
  const [loggedIn, setLoggedIn] = useState(false);

  const handleLogin = () => {
    setLoggedIn(true);
  };

  if (loggedIn) {
    return <Navigate to="/Signin" />;
  }
 
  return (
    <div
      style={{

       maxWidth: "1280px",
        height: "100%",
        position: "relative",
         
      }}
    >
      <Navn/>
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
        SignIn To Order
      </Button>
      
        <Foot />
     
    </div>
  );
}


export default DeliverySystem;
