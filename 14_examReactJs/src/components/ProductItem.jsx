import React from 'react';

const ProductItem = ({ product, onDelete }) => {
  return (
    <div style={{ border: '1px solid #ccc', margin: '10px', padding: '10px', borderRadius: '8px' }}>
      <h3>{product.title || product.name}</h3>
      <p>Price: ${product.price}</p>
      <p>Category: {product.category}</p>
      {onDelete && (
        <button onClick={() => onDelete(product.id)} style={{ color: 'red' }}>
          Delete
        </button>
      )}
    </div>
  );
};

export default ProductItem;