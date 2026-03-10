import React, { useState } from 'react';

// --- CHILD COMPONENT ---
// Receives 'user' (object) and 'onDelete' (function) as props
function UserCard({ user, onDelete }) {
  return (
    <div style={cardStyle}>
      <h3>{user.name}</h3>
      <p>Role: {user.role}</p>
      {/* Calling a function passed down from the parent */}
      <button onClick={() => onDelete(user.id)}>Remove User</button>
    </div>
  );
}

// --- WRAPPER COMPONENT ---
// Uses the special 'children' prop to wrap content
function Container({ title, children }) {
  return (
    <div style={containerStyle}>
      <h1 style={{ borderBottom: '2px solid #333' }}>{title}</h1>
      {children} 
    </div>
  );
}

// --- PARENT COMPONENT ---
export default function App() {
  const [users, setUsers] = useState([
    { id: 1, name: 'Alice', role: 'Developer' },
    { id: 2, name: 'Bob', role: 'Designer' },
    { id: 3, name: 'Charlie', role: 'Manager' }
  ]);

  const deleteUser = (id) => {
    setUsers(users.filter(user => user.id !== id));
  };

  return (
    <Container title="Team Directory">
      <p>Total members: {users.length}</p>
      
      <div style={{ display: 'flex', gap: '10px' }}>
        {users.map((u) => (
          /* Passing data and functions as props */
          <UserCard 
            key={u.id} 
            user={u} 
            onDelete={deleteUser} 
          />
        ))}
      </div>

      {users.length === 0 && <p>No team members left.</p>}
    </Container>
  );
}

// --- BASIC STYLES ---
const cardStyle = {
  border: '1px solid #ccc',
  padding: '15px',
  borderRadius: '8px',
  backgroundColor: '#f9f9f9',
  minWidth: '150px'
};

const containerStyle = {
  fontFamily: 'sans-serif',
  padding: '20px'
};