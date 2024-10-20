
import {
  TextField,
  Button,
  Typography,
  Grid,
  Box,
  Container,
} from "@mui/material";
import { Navigate } from "react-router-dom";
import { useEffect,useRef, useState} from "react";
function PaymentForm() {
     const r = useRef(null);

     useEffect(() => {
       r.current.focus();
     }, []);  
     const [loggedIn, setLoggedIn] = useState(false);
   

   const handlepayment = () => {
    setLoggedIn(true);
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
}

export default PaymentForm;
