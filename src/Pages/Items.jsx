import { Button } from "@mui/material";
import { useState } from "react";
import { Navigate } from "react-router-dom";


  function Items() {
    

  const [loggedIn, setLoggedIn] = useState(false);

  const handleItem = () => {
    setLoggedIn(true);
  };

  if (loggedIn) {
    return <Navigate to="/Payment" />;
  }
const orders = [
    { id: '#001', name: 'Jane Smith', date: '2024-10-01', status: 'Pending', amount: 150 },
    { id: '#002', name: 'Alaa Shaabneh', date: '2024-09-30', status: 'Delivered', amount: 50 },
    { id: '#003', name: 'Amal Ziad', date: '2024-09-28', status: 'In Progress', amount: 320 },
  ];

  const getStatusClass = (status) => {
    switch (status) {
      case 'Pending':
        return 'status-pending';
      case 'Delivered':
        return 'status-delivered';
      case 'In Progress':
        return 'status-in-progress';
      default:
        return '';
    }
  };

  return (
    <div className="order-list-container">
      <h2>Order List</h2>
      <table className="order-list">
        <thead>
          <tr>
            <th>Order ID</th>
            <th>Customer Name</th>
            <th>Order Date</th>
            <th>Delivery Status</th>
            <th>Amount</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {orders.map((order) => (
            <tr key={order.id}>
              <td>{order.id}</td>
              <td>{order.name}</td>
              <td>{order.date}</td>
              <td>
                <span className={`status ${getStatusClass(order.status)}`}>
                  {order.status}
                </span>
              </td>
              <td>{order.amount}$</td>
              <td>
                <button className="view-button">View</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <br/>
      <Button
        variant="contained"
        onClick={handleItem}
        style={{ backgroundColor: "#3d8b8b" }}
      >
        Go to Pay Page
      </Button>
    </div>
  );
};

export default Items;


















 