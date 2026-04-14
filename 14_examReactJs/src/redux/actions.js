import axios from 'axios';

const API_URL = 'http://localhost:5000/products';

export const fetchProducts = () => async (dispatch) => {
  const res = await axios.get(API_URL);
  dispatch({ type: 'GET_PRODUCTS', payload: res.data });
};

export const addProduct = (product) => async (dispatch) => {
  const res = await axios.post(API_URL, product);
  dispatch({ type: 'ADD_PRODUCT', payload: res.data });
};

export const updateProduct = (id, product) => async (dispatch) => {
  const res = await axios.put(`${API_URL}/${id}`, product);
  dispatch({ type: 'UPDATE_PRODUCT', payload: res.data });
};

export const deleteProduct = (id) => async (dispatch) => {
  await axios.delete(`${API_URL}/${id}`);
  dispatch({ type: 'DELETE_PRODUCT', payload: id });
};

export const login = () => ({ type: 'LOGIN' });
export const logout = () => ({ type: 'LOGOUT' });