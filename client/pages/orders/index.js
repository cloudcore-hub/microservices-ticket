import React from 'react';

const OrderIndex = ({ orders }) => {
  if (!orders) {
    return <div>Loading...</div>; 
  }
  if (!Array.isArray(orders)) {
    console.error('Orders is not an array:', orders);
    return <div>Error loading orders. Please try again later.</div>;
  }

  return (
    // Wrapper div with gradient background
    <div style={{
      background: 'linear-gradient(120deg, #f6d365 0%, #fda085 100%)', // Gradient background
      minHeight: '100vh', // Full viewport height
      padding: '20px' // Padding around the content
    }}>
      <div style={{
        background: 'rgba(255, 255, 255, 0.8)', // Semi-transparent white background
        borderRadius: '8px', // Rounded corners
        padding: '20px' // Padding inside the content container
      }}>
        <h1 style={{ textAlign: 'center', color: '#333' }}>My Orders</h1> {/* Centered title */}
        <ul style={{ listStyleType: 'none', padding: 0 }}> {/* Custom list styling */}
          {orders.map((order) => (
            <li key={order.id} style={{
              background: '#fff', // White background for each item
              margin: '10px 0', // Vertical spacing between items
              padding: '15px', // Padding inside each item
              borderRadius: '4px', // Rounded corners for each item
              boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)' // Subtle shadow
            }}>
              <strong>{order.ticket.title}</strong> - {order.status}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

OrderIndex.getInitialProps = async (context, client) => {
  try {
    const { data } = await client.get('/api/orders');
    // Ensure data is an array
    if (!Array.isArray(data)) {
      console.error('API response is not an array:', data);
      return { orders: [] };
    }
    return { orders: data };
  } catch (err) {
    console.error('Error fetching orders:', err);
    return { orders: [] }; 
  }
};

export default OrderIndex;
