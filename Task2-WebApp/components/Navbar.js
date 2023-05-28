import React from 'react';

const Navbar = ({ getUsers }) => {
  return (
    <nav>
      <h1>Kabein - Z</h1>
      <button onClick={getUsers}>Get Users</button>
    </nav>
  );
};

export default Navbar;
