import React from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { login } from '../redux/actions';

const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogin = () => {
    // 1. Set the fake token in localStorage for persistence
    localStorage.setItem('token', 'logged-in');
    
    // 2. Update the Redux state so the App knows we are logged in
    dispatch(login());
    
    // 3. Redirect to the home page (Product List)
    navigate('/');
  };

  return (
    <div className="container w-50 mt-5">
      <div className="card p-4 shadow">
        <h3>Login</h3>
        <p className="text-muted">Please click the button below to log in and manage products.</p>
        <button className="btn btn-primary" onClick={handleLogin}>
          Login
        </button>
      </div>
    </div>
  );
};

export default Login;