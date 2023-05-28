import React from 'react';
import UserCard from './UserCard';

const UserCardGrid = ({ users }) => {
  return (
    <div className="user-card-grid">
      {users.map(user => (
        <UserCard key={user.id} user={user} />
      ))}
    </div>
  );
};

export default UserCardGrid;
