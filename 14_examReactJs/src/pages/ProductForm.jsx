import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addProduct } from '../redux/actions';
import { useNavigate } from 'react-router-dom';

const ProductForm = () => {
  const [form, setForm] = useState({ title: '', price: '', category: '', image: '' });
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!form.title || !form.price) return alert("Please fill all fields");
    dispatch(addProduct(form));
    navigate('/');
  };

  return (
    <div className="container w-50">
      <h3>Add New Product</h3>
      <form onSubmit={handleSubmit}>
        <input className="form-control mb-2" placeholder="Title" onChange={e => setForm({...form, title: e.target.value})} />
        <input className="form-control mb-2" type="number" placeholder="Price" onChange={e => setForm({...form, price: e.target.value})} />
        <input className="form-control mb-2" placeholder="Category" onChange={e => setForm({...form, category: e.target.value})} />
        <button className="btn btn-success">Save Product</button>
      </form>
    </div>
  );
};
export default ProductForm;