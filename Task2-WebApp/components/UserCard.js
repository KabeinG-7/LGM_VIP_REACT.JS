import React from 'react';

const UserCard = ({ user }) => {
  return (
    <div className="user-card">
      <h3>{user.first_name} {user.last_name}</h3>
      <p>{user.email}</p>
      <img src={user.avatar} alt={user.first_name} />
    </div>
  );
};

export default UserCard;