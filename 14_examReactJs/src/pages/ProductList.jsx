import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchProducts } from '../redux/actions';
import ProductItem from '../components/ProductItem';

const ProductList = () => {
  const products = useSelector(state => state.products);
  const dispatch = useDispatch();
  const [search, setSearch] = useState('');
  const [sort, setSort] = useState('');

  useEffect(() => { dispatch(fetchProducts()); }, [dispatch]);

  const filteredProducts = products
    .filter(p => p.title.toLowerCase().includes(search.toLowerCase()))
    .sort((a, b) => {
      if (sort === 'low') return a.price - b.price;
      if (sort === 'high') return b.price - a.price;
      return 0;
    });

  return (
    <div className="container">
      <div className="row mb-3">
        <div className="col-md-6">
          <input type="text" className="form-control" placeholder="Search products..." onChange={(e) => setSearch(e.target.value)} />
        </div>
        <div className="col-md-6">
          <select className="form-select" onChange={(e) => setSort(e.target.value)}>
            <option value="">Sort By Price</option>
            <option value="low">Low to High</option>
            <option value="high">High to Low</option>
          </select>
        </div>
      </div>
      <div className="row">
        {filteredProducts.map(p => <ProductItem key={p.id} product={p} />)}
      </div>
    </div>
  );
};
export default ProductList;