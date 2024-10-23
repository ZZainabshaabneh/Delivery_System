import { Button } from "@mui/material";
import { useState } from "react";
import { Navigate } from "react-router-dom";
import { Af } from "../components/nav";
import "./Order.css";
import { Foot } from "../components/footer";
import { UserName } from "./Signin";
//import { createContext } from "react";
//export const usename = createContext();

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
    <>
      <div className="order-container">
        <Af />
        <header className="header">
          <UserName.Consumer>
            {(e) => {
              return <h1>{e}</h1>;
            }}
          </UserName.Consumer>
          <h2>Online Food Orders</h2>
          <p>Select your favorite dishes and place an order!</p>
        </header>
        <div className="menu-section">
          <h3>Menu</h3>
          {items.map((item, index) => (
            <div key={index} className="menu-item">
              <span>
                {item.name} - ${item.price}
              </span>
              <div className="quantity-control">
                <button onClick={() => handleQuantityChange(index, -1)}>
                  -
                </button>
                <input type="text" value={item.quantity} readOnly />
                <button onClick={() => handleQuantityChange(index, 1)}>
                  +
                </button>
              </div>
            </div>
          ))}
        </div>
        <div className="order-form">
          <h3>Total of The Order: ${total}</h3>
          {errorMessage && <p style={{ color: "red" }}>{errorMessage}</p>}{" "}
          <form onSubmit={handleSubmit}>
            <Button
              onClick={handleList}
              variant="contained"
              sx={{ backgroundColor: "#00695c" }}
            >
              CheckOut
            </Button>
          </form>
          <Af />
        </div>
      </div>
      <Foot />
    </>
  );
}

export default Orderlist;
