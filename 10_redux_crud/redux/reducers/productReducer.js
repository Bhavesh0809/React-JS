const initialState = [];

const productReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_PRODUCT':
      return [...state, action.payload];
    case 'REMOVE_PRODUCT':
      return state.filter((p) => p.id !== action.payload);
    case 'UPDATE_PRODUCT':
      return state.map((p) => (p.id === action.payload.id ? action.payload : p));
    default:
      return state;
  }
};

export default productReducer;