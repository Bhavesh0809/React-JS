const initialState = [];

const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_TO_CART': {
      const item = action.payload;
      const exists = state.find((i) => i.id === item.id);
      if (exists) {
        return state.map((i) =>
          i.id === item.id ? { ...i, quantity: (i.quantity || 1) + 1 } : i
        );
      }
      return [...state, { ...item, quantity: 1 }];
    }
    case 'REMOVE_FROM_CART':
      return state.filter((i) => i.id !== action.payload);
    case 'INCREASE_QUANTITY':
      return state.map((i) =>
        i.id === action.payload ? { ...i, quantity: (i.quantity || 1) + 1 } : i
      );
    case 'DECREASE_QUANTITY':
      return state
        .map((i) => {
          if (i.id === action.payload) {
            const qty = (i.quantity || 1) - 1;
            return { ...i, quantity: qty };
          }
          return i;
        })
        .filter((i) => i.quantity > 0);
    default:
      return state;
  }
};

export default cartReducer;