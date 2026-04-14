import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import ProductList from './pages/ProductList';
import ProductForm from './pages/ProductForm';
import PrivateRoute from './components/PrivateRoute';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<ProductList />} />
        <Route path="/add" element={
          <PrivateRoute> <ProductForm /> </PrivateRoute>
        } />
      </Routes>
    </Router>
  );
}
export default App;