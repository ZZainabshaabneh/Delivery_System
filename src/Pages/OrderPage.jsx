import React, { useState } from 'react';
import { Grid, Card, CardMedia, CardContent, Typography, Button, IconButton } from '@mui/material';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';

// Sample food data
const foodItems = [
  {
    id: 1,
    name: 'Cheeseburger',
    description: 'A delicious cheeseburger with lettuce, tomato, and cheddar.',
    price: 8.99,
    image: 'https://via.placeholder.com/150/cheeseburger',
  },
  {
    id: 2,
    name: 'Pizza',
    description: 'Pepperoni pizza with mozzarella cheese and tomato sauce.',
    price: 12.99,
    image: 'https://via.placeholder.com/150/pizza',
  },
  {
    id: 3,
    name: 'Sushi',
    description: 'Fresh sushi platter with tuna, salmon, and avocado.',
    price: 15.99,
    image: 'https://via.placeholder.com/150/sushi',
  },
];

const OrderPage = () => {
  const [cart, setCart] = useState([]);

  const handleAddToCart = (item) => {
    setCart([...cart, item]);
    alert(`${item.name} added to the cart!`);
  };

  return (
    <div style={{ padding: '20px' }}>
      <Typography variant="h4" gutterBottom>
        Food Order Page
      </Typography>
      <Grid container spacing={4}>
        {foodItems.map((item) => (
          <Grid item xs={12} sm={6} md={4} key={item.id}>
            <Card>
              <CardMedia
                component="img"
                height="150"
                image={item.image}
                alt={item.name}
              />
              <CardContent>
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
                  style={{ marginTop: '10px' }}
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
