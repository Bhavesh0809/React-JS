import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { logout } from '../redux/actions';

const Navbar = () => {
  const auth = useSelector(state => state.isAuthenticated);
  const dispatch = useDispatch();

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark mb-4">
      <div className="container">
        <Link className="navbar-brand" to="/">StoreAdmin</Link>
        <div className="navbar-nav">
          <Link className="nav-link" to="/">Products</Link>
          <Link className="nav-link" to="/add">Add Product</Link>
          {auth ? (
            <button className="btn btn-outline-danger ms-2" onClick={() => dispatch(logout())}>Logout</button>
          ) : (
            <Link className="nav-link" to="/login">Login</Link>
          )}
        </div>
      </div>
    </nav>
  );
};
export default Navbar;