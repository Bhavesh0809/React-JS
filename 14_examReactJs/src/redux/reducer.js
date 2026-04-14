const initialState = {
  products: [],
  isAuthenticated: false,
};

const productReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'GET_PRODUCTS': return { ...state, products: action.payload };
    case 'ADD_PRODUCT': return { ...state, products: [...state.products, action.payload] };
    case 'UPDATE_PRODUCT': 
      return { ...state, products: state.products.map(p => p.id === action.payload.id ? action.payload : p) };
    case 'DELETE_PRODUCT': 
      return { ...state, products: state.products.filter(p => p.id !== action.payload) };
    case 'LOGIN': return { ...state, isAuthenticated: true };
    case 'LOGOUT': return { ...state, isAuthenticated: false };
    default: return state;
  }
};

export default productReducer;