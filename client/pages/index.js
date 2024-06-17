import Link from 'next/link';

const LandingPage = ({ currentUser, tickets = [] }) => {
  console.log('Tickets:', tickets); // Log the tickets prop

  // Ensure tickets is always an array
  if (!Array.isArray(tickets)) {
    tickets = [];
  }

  const ticketList = tickets.map((ticket) => {
    return (
      <tr key={ticket.id}>
        <td>{ticket.title}</td>
        <td>{ticket.price}</td>
        <td>
          <Link href="/tickets/[ticketId]" as={`/tickets/${ticket.id}`}>
            View
          </Link>
        </td>
      </tr>
    );
  });

  return (
    <div style={{
      background: 'linear-gradient(to right, #556270, #ff6b6b)', // Gradient background
      minHeight: '100vh', // Full viewport height
      padding: '20px' // Padding around the content
    }}>
      <div style={{
        background: 'rgba(255, 255, 255, 0.8)', // Semi-transparent white background
        borderRadius: '8px', // Rounded corners
        padding: '20px' // Padding inside the content container
      }}>
        <h1 style={{ textAlign: 'center', color: '#333' }}>Projects</h1> {/* Centered title */}
        <table className="table">
          <thead>
            <tr>
              <th>Title</th>
              <th>Price</th>
              <th>Link</th>
            </tr>
          </thead>
          <tbody>{ticketList}</tbody>
        </table>
      </div>
    </div>
  );
};

LandingPage.getInitialProps = async (context, client, currentUser) => {
  try {
    const { data } = await client.get('/api/tickets');
    console.log('API response:', data); // Log the API response

    // Ensure the API response is an array
    if (!Array.isArray(data)) {
      throw new Error('API response is not an array');
    }

    return { tickets: data };
  } catch (error) {
    console.error('Error fetching tickets:', error);
    return { tickets: [] };
  }
};

export default LandingPage;
