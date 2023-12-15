import React, { useEffect, useState } from 'react';

function App() {
  const [message, setMessage] = useState('');

  useEffect(() => {
    fetch('/api/test')
      .then(response => response.json())
      .then(data => setMessage(data.message))
      .catch(err => console.error("Error fetching data: ", err));
  }, []);

  return (
    <div>
      <p>Server says: {message}</p>
    </div>
  );
}

export default App;
