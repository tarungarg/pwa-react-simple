import React, { useEffect, useState } from 'react';

import './App.css';

const App = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/users`)
      .then((response) => response.json())
      .then((data) => setUsers(data));
  }, []);

  return (
    <section className="section">
      <div className="container">
        {users.map((user) => {
          return (
            <div key={user.id} className="box">
              <p className="subtitle">{user.name}</p>
              <p>{user.email}</p>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default App;
