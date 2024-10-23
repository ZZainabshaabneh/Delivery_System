import  { useState } from "react";
import {
  Grid,
  Card,
  CardMedia,
  CardContent,
  Typography,
  Button,
} from "@mui/material";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";

const OrderPage = () => {
    
const [items, setItems] = useState([
  {
    id: 1,
    name: "Cheeseburger",
    description: "A delicious cheeseburger with lettuce, tomato, and cheddar.",
    price: 8.99,
    image: "/public/static/images/Chess.jfif",
    quantity: 0,
  },
  {
    id: 2,
    name: "Pizza",
    description: "Pepperoni pizza with mozzarella cheese and tomato sauce.",
    price: 12.99,
    image: "/public/static/images/Pizza.jfif",
    quantity: 0,
  },
  {
    id: 3,
    name: "Sushi",
    description: "Fresh sushi platter with tuna, salmon, and avocado.",
    price: 15.99,
    image: "/public/static/images/sushi.jfif",
    quantity: 0,
  },
  {
    id: 4,
    name: "Noodles",
    description:
      "are a staple food in many cultures and made into a variety of shapes.",
    price: 10,
    image: "/public/static/images/noodles.jpg",
    quantity: 0,
  },
]);

  const [cart, setCart] = useState([]);
  const [total, setTotal] = useState(0);

  const handleAddToCart = (item) => {
      setCart([...cart, item]);
      handleQuantityChange( 1);
      calculateTotal();
      alert(
        `${item.name} added to the cart and Total of The Order: ${total}!`
      );
     
  };
     const handleQuantityChange = (index, change) => {
       const updatedItems = [...items];
       updatedItems[index].quantity += change;
       if (updatedItems[index].quantity < 0) {
         updatedItems[index].quantity = 0;
       }
       setItems(updatedItems);
       calculateTotal(updatedItems);
     };
 const calculateTotal = (items) => {
   const totalPrice = items.reduce(
     (sum, item) => sum + item.price * item.quantity,
     0
   );
   setTotal(totalPrice);
 };

  return (
    <div style={{ padding: "20px" }}>
      <Typography variant="h4" gutterBottom>
        Food Order Page
      </Typography>
      <br />
      <Grid container spacing={4}>
        {items.map((item) => (
          <Grid item xs={12} sm={6} md={4} key={item.id}>
            <Card
              sx={{
                height: "100%",
                display: "flex",
                flexDirection: "column",
              }}
            >
              <CardMedia
                component="img"
                image={item.image}
                alt={item.name}
                sx={{
                  height: "200px",
                  objectFit: "cover",
                }}
              />
              <CardContent sx={{ flexGrow: 1 }}>
                <Typography variant="h6">{item.name}</Typography>
                <Typography variant="body2" color="text.secondary">
                  {item.description}
                </Typography>
                <Typography variant="h6" color="primary">
                  ${item.price}
                </Typography>
                <Button
                  variant="contained"
                  color="primary"
                  startIcon={<AddShoppingCartIcon />}
                  onClick={() => handleAddToCart(item)}
                  sx={{ marginTop: "10px" }}
                >
                  Add to Cart
                </Button>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </div>
  );
};

export default OrderPage;
