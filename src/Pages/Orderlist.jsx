import { Button, Box, Typography, Input, IconButton } from "@mui/material";
import { useState } from "react";
import { Navigate } from "react-router-dom";
import { Af } from "../components/nav";
import { Foot } from "../components/footer";
import { UserName } from "./Signin";

function Orderlist() {
  const [items, setItems] = useState([
    { name: "Pizza", price: 12, quantity: 0 },
    { name: "Burger", price: 8, quantity: 0 },
    { name: "Noodles", price: 10, quantity: 0 },
    { name: "Sushi", price: 15, quantity: 0 },
  ]);

  const [name, setName] = useState("");
  const [total, setTotal] = useState(0);
  const [loggedIn, setLoggedIn] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const handleQuantityChange = (index, change) => {
    const updatedItems = [...items];
    updatedItems[index].quantity += change;
    if (updatedItems[index].quantity < 0) {
      updatedItems[index].quantity = 0;
    }
    setItems(updatedItems);
    calculateTotal(updatedItems);
  };

  const handleList = () => {
    if (total > 0) {
      setLoggedIn(true);
    } else {
      setErrorMessage("Choose your items first!");
    }
  };

  if (loggedIn) {
    return <Navigate to="/Payment" />;
  }

  const calculateTotal = (items) => {
    const totalPrice = items.reduce(
      (sum, item) => sum + item.price * item.quantity,
      0
    );
    setTotal(totalPrice);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    alert(`Order placed by ${name} with a total of $${total}`);
    setName("");
    setItems(items.map((item) => ({ ...item, quantity: 0 })));
    setTotal(0);
  };

  return (
    <Box sx={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
      <Af />
      <Box sx={{ textAlign: "center", my: 4 }}>
        <UserName.Consumer>
          {(e) => <Typography variant="h4">{e}</Typography>}
        </UserName.Consumer>
        <Typography variant="h5">Online Food Orders</Typography>
        <Typography>Select your favorite dishes and place an order!</Typography>
      </Box>

      <Box sx={{ width: "80%", maxWidth: "500px", mb: 4 }}>
        <Typography variant="h6">Menu</Typography>
        {items.map((item, index) => (
          <Box
            key={index}
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              mb: 2,
              p: 2,
              border: "1px solid #ddd",
              borderRadius: "8px",
            }}
          >
            <Typography>
              {item.name} - ${item.price}
            </Typography>
            <Box sx={{ display: "flex", alignItems: "center" }}>
              <IconButton
                onClick={() => handleQuantityChange(index, -1)}
                sx={{ color: "primary.main" }}
              >
                -
              </IconButton>
              <Input
                value={item.quantity}
                readOnly
                sx={{
                  mx: 1,
                  width: "40px",
                  textAlign: "center",
                }}
              />
              <IconButton
                onClick={() => handleQuantityChange(index, 1)}
                sx={{ color: "primary.main" }}
              >
                +
              </IconButton>
            </Box>
          </Box>
        ))}
      </Box>

      <Box sx={{ width: "80%", maxWidth: "500px", textAlign: "center", mb: 4 }}>
        <Typography variant="h6">Total of The Order: ${total}</Typography>
        {errorMessage && (
          <Typography color="error" sx={{ mb: 2 }}>
            {errorMessage}
          </Typography>
        )}
        <form onSubmit={handleSubmit}>
          <Button
            onClick={handleList}
            variant="contained"
            sx={{ backgroundColor: "#00695c", mt: 2 }}
          >
            CheckOut
          </Button>
        </form>
      </Box>

      <Foot />
    </Box>
  );
}

export default Orderlist;
