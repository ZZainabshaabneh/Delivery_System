import { TextField, Typography, Grid, Box, Container } from "@mui/material";
import { Navigate } from "react-router-dom";
import { useEffect, useRef, useState } from "react";
//import { UserName } from "./Signin";
//const Pname=useContext(UserName)
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

  const [formValues, setFormValues] = useState({
    field1: "zainab",
    field2: "",
    field3: "",
    field4: "",
    field5: "",
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues({
      ...formValues,
      [name]: value,
    });
  };

  const validate = () => {
    const newErrors = {};

    if (!formValues.field1) {
      newErrors.field1 = "Field 1 is required";
    }
    if (!formValues.field2) {
      newErrors.field2 = "Field 2 is required";
    }
    if (!formValues.field3) {
      newErrors.field3 = "Field 3 is required";
    }
    if (!formValues.field4) {
      newErrors.field4 = "Field 4 is required";
    }
    if (!formValues.field5) {
      newErrors.field5 = "Field 5 is required";
    }
    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const formErrors = validate();
    setErrors(formErrors);

    if (Object.keys(formErrors).length === 0) {
      PaymentForm();
      console.log("Form submitted successfully:", formValues);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
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
                  name="field1"
                  value={formValues.field1}
                  onChange={handleChange}
                />
                {errors.field1 && (
                  <span style={{ color: "red" }}>{errors.field1}</span>
                )}
              </Grid>

              <Grid item xs={12}>
                <TextField
                  fullWidth
                  label="Card Number"
                  variant="outlined"
                  placeholder="Enter Card Number"
                  type="text"
                  name="field2"
                  value={formValues.field2}
                  onChange={handleChange}
                />
                {errors.field2 && (
                  <span style={{ color: "red" }}>{errors.field2}</span>
                )}
              </Grid>

              <Grid item xs={6}>
                <TextField
                  fullWidth
                  label="Expiration Date"
                  variant="outlined"
                  placeholder="MM/YY"
                  type="text"
                  name="field3"
                  value={formValues.field3}
                  onChange={handleChange}
                />
                {errors.field3 && (
                  <span style={{ color: "red" }}>{errors.field3}</span>
                )}
              </Grid>

              <Grid item xs={6}>
                <TextField
                  fullWidth
                  label="CVC/CVV"
                  variant="outlined"
                  placeholder="123"
                  type="text"
                  name="field4"
                  value={formValues.field4}
                  onChange={handleChange}
                />
                {errors.field4 && (
                  <span style={{ color: "red" }}>{errors.field4}</span>
                )}
              </Grid>

              <Grid item xs={12}>
                <TextField
                  fullWidth
                  label="Amount"
                  variant="outlined"
                  placeholder="Enter Amount"
                  name="field5"
                  value={formValues.field5}
                  onChange={handleChange}
                />
                {errors.field5 && (
                  <span style={{ color: "red" }}>{errors.field5}</span>
                )}
              </Grid>
            </Grid>

            <Box mt={3} textAlign="center">
              {/* <Button
            variant="contained"
            color="primary"
            sx={{
              backgroundColor: "#00695c",  
              padding: "10px 20px",
            }}
            onClick={handlepayment}
          >
            
          </Button> */}
            </Box>
          </Box>
          <button type="submit" onClick={handlepayment}>
            Make Payment
          </button>
        </Container>
      </div>
    </form>
  );
}

export default PaymentForm;
