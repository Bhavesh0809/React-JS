import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

// Components
import Navbar from './components/Navbar';
import PrivateRoute from './components/PrivateRoute';

// Pages
import ProductList from './pages/ProductList';
import ProductForm from './pages/ProductForm';
import Login from './pages/Login';

// Bootstrap CSS
import 'bootstrap/dist/css/bootstrap.min.css';

/**
 * App Component
 * Handles the high-level routing and layout of the application.
 */
function App() {
  const { isAuthenticated } = useSelector((state) => state);

  return (
    <Router>
      {/* Navbar stays visible across all pages */}
      <Navbar />

      <div className="container mt-4">
        <Routes>
          {/* Public Routes */}
          <Route path="/login" element={
            !isAuthenticated ? <Login /> : <Navigate to="/" />
          } />

          {/* Protected Product List - Accessible to all, but actions handled inside */}
          <Route path="/" element={<ProductList />} />

          {/* Strictly Private Routes */}
          <Route 
            path="/add" 
            element={
              <PrivateRoute>
                <ProductForm />
              </PrivateRoute>
            } 
          />

          <Route 
            path="/edit-product/:id" 
            element={
              <PrivateRoute>
                <ProductForm />
              </PrivateRoute>
            } 
          />

          {/* Fallback for undefined routes */}
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;