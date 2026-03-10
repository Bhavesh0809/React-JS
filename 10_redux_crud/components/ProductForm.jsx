import React from 'react'
import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { addProduct } from '../redux/actions/productActions'

export default function ProductForm() {

    const [name, setName] = useState('');
    const [price, setPrice] = useState('');

    const dispatch = useDispatch();

    const handleSubmit = (e) => {
        e.preventDefault();
        const newProduct = {
            id: Date.now(),
            name,
            price: parseFloat(price)    

        }
    

        dispatch(addProduct(newProduct));
        setName('');
        setPrice('');
        
    }

  return (
    <div>
      <h2>Add Product</h2>

      <form onSubmit={handleSubmit}>
        <input type="text" placeholder='Product Name' value={name} onChange={(e) => setName(e.target.value)} />
        <input type="number" placeholder='Price' value={price} onChange={(e) => setPrice(e.target.value)} />
        <button type='submit'>Add Product</button>
      </form>
    </div>
  )
}