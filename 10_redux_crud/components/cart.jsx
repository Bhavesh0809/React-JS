import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  removeFromCart,
  increaseQuantity,
  decreaseQuantity,
} from '../redux/actions/cartActions';

function Cart() {
  const cart = useSelector((state) => state.cart || []);
  const dispatch = useDispatch();

  if (cart.length === 0) {
    return <p>Cart is empty.</p>;
  }

  return (
    <div>
      <h2>Shopping Cart</h2>
      <ul>
        {cart.map((item) => (
          <li key={item.id}>
            {item.name} x {item.quantity} = ${(
              item.price * item.quantity
            ).toFixed(2)}{' '}
            
            <button onClick={() => dispatch(increaseQuantity(item.id))}>+</button>
            <button onClick={() => dispatch(decreaseQuantity(item.id))}>-</button>
            <button onClick={() => dispatch(removeFromCart(item.id))}>
              Remove
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Cart;