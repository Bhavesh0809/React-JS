import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addToCart } from '../redux/actions/cartActions';
import { removeProduct } from '../redux/actions/productActions';

function ProductList() {
  const products = useSelector((state) => state.product || []);
  const dispatch = useDispatch();

  if (products.length === 0) {
    return <p>No products added yet.</p>;
  }

  return (
    <div>
      <h2>Products</h2>
      <ul>
        {products.map((p) => (
          <li key={p.id}>
            {p.name} - ${p.price.toFixed(2)}
            <button onClick={() => dispatch(addToCart(p))}>Add to cart</button>
            <button onClick={() => dispatch(removeProduct(p.id))}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ProductList;