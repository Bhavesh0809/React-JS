import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchProducts } from '../redux/actions';
import ProductItem from '../components/ProductItem';

const ProductList = () => {
  const products = useSelector(state => state.products);
  const dispatch = useDispatch();

  useEffect(() => { dispatch(fetchProducts()); }, [dispatch]);

  return (
    <div className="container">
      <h2>Product List</h2>
      <div className="row">
        {products.map(p => <ProductItem key={p.id} product={p} />)}
      </div>
    </div>
  );
};
export default ProductList;