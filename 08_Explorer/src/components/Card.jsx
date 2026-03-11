import React from 'react';

function Card({ name, location, description, rating }) {
  return (
    <div style={cardStyle}>
      <h3>{name} 📍</h3>
      <p><strong>Location:</strong> {location}</p>
      <p>{description}</p>
      <div style={tagStyle}>Rating: {rating} / 5</div>
    </div>
  );
}

const cardStyle = {
  border: '1px solid #ddd',
  borderRadius: '10px',
  padding: '15px',
  margin: '10px',
  backgroundColor: '#fff',
  boxShadow: '0 2px 5px rgba(0,0,0,0.1)',
  textAlign: 'left'
};

const tagStyle = {
  display: 'inline-block',
  backgroundColor: '#e0f7fa',
  padding: '5px 10px',
  borderRadius: '15px',
  fontSize: '0.8rem',
  fontWeight: 'bold'
};

export default Card;