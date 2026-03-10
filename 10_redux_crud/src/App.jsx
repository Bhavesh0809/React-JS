import React from 'react'
import { Provider, useSelector } from 'react-redux'
import ProductForm from '../components/productForm'
import ProductList from '../components/productList'
import Cart from '../components/cart'
import store from '../redux/store'

function AppContent() {
  // demonstrate importing data from redux store
  const products = useSelector((state) => state.product || []);

  return (
    <div className='container'>
      <h1>Redux CRUD Example</h1>
      <p>Products in store: {products.length}</p>
      <ProductForm />
      <ProductList />
      <Cart />
    </div>
  );
}

function App() {
  // provider wraps the content component so hooks work
  return (
    <Provider store={store}>
      <AppContent />
    </Provider>
  );
}

export default App