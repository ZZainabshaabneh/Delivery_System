import { AppProvider, SignInPage } from "@toolpad/core";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { Box, Link,Grid } from "@mui/material";
import "../App.css";
import { Navigate } from "react-router-dom";
import { useState } from "react";

const theme = createTheme({
  palette: {
    primary: {
      main: "#00695c",
    },
    background: {
      default: "#ffffff",
    },
    text: {
      secondary: "#fffff",
    },
  },
  components: {
    MuiTextField: {
      styleOverrides: {
        root: {
          backgroundColor: "#cccccc",
          borderRadius: "10px",
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: "10px",
        },
      },
    },
  },
});

const providers = [{ id: "credentials", name: "Email and password" }];

const signIn = async (provider, formData, handleLogin) => {
  const promise = new Promise((resolve) => {
    setTimeout(() => {
      const email = formData?.get("email");
      const password = formData?.get("password");

      if (email === "zainab@gmail.com" && password === "123") {
        handleLogin();
        resolve({
          type: "CredentialsSignin",
        });
      } else {
        alert("Invalid credentials.");
        resolve({
          type: "CredentialsSignin",
          error: "Invalid credentials.",
        });
      }
    }, 300);
  });
  return promise;
};

function Signin() {
  const [loggedIn, setLoggedIn] = useState(false);
   

   const handleLogin = () => {
    setLoggedIn(true);
  };

  
   if (loggedIn) {
    return <Navigate to="/Services" />;
  }
 

    return (
      <ThemeProvider theme={theme}>
        <AppProvider theme={theme}>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              backgroundColor: "#e0f2f1",
              padding: "20px",
              borderRadius: "8px",
              maxWidth: "400px",
              margin: "auto",
              marginTop: "100px",
            }}
          >
            <SignInPage
              signIn={(provider, formData) =>
                signIn(provider, formData, handleLogin)
              }
              providers={providers}
            />

            <Grid container justifyContent="center">
              <Link
                href="/signup"
                variant="body2"
                style={{ alignItems: "center" }}
              >
                Sign Up an account? <br />
              </Link>
            </Grid>
          </Box>
        </AppProvider>
      </ThemeProvider>
    );
  }
 
export default Signin;
