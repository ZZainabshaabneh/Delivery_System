import { AppProvider } from "@toolpad/core";
import { useState } from "react";
import Navn from "../components/nav";
import {
  Container,
  TextField,
  Button,
  Grid,
  Typography,
  Box,
  Link,
  Avatar,
} from "@mui/material";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import { createTheme, ThemeProvider } from "@mui/material/styles";
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
const Signup = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmpassword: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  
   if (loggedIn) {
    return <Navigate to="/done" />;
  }
 
   

  return (
    <Container
      maxWidth="sm"
      sx={{
        backgroundColor: "#e0f7f9",
        padding: "30px",
        borderRadius: "10px",
        boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)",
        mt: 5,
      }}
    >
      <Typography variant="h4" align="center" gutterBottom>
        Payment Details
      </Typography>
      <Box component="form" sx={{ mt: 3 }}>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <TextField
              ref={r}
              fullWidth
              label="Card Holder Name"
              variant="outlined"
              placeholder="Enter Card Holder Name"
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              fullWidth
              label="Card Number"
              variant="outlined"
              placeholder="Enter Card Number"
            />
          </Grid>
          <Grid item xs={6}>
            <TextField
              fullWidth
              label="Expiration Date"
              variant="outlined"
              placeholder="MM/YY"
            />
          </Grid>
          <Grid item xs={6}>
            <TextField
              fullWidth
              label="CVC/CVV"
              variant="outlined"
              placeholder="123"
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              fullWidth
              label="Amount"
              variant="outlined"
              placeholder="Enter Amount"
            />
          </Grid>
        </Grid>

        <Box mt={3} textAlign="center">
          <Button
            variant="contained"
            color="primary"
            sx={{
              backgroundColor: "#00695c",  
              padding: "10px 20px",
            }}
            onClick={handlepayment}
          >
            Make Payment
          </Button>
        </Box>
      </Box>
    </Container>
  );
};

export default Signup;
