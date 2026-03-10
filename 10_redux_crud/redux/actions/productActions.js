export const addProduct = (product) => ({
    type: 'ADD_PRODUCT',
    payload: product
});

export const removeProduct = (productId) => ({
    type: 'REMOVE_PRODUCT',
    payload: productId
});

export const updateProduct = (product) => ({
    type: 'UPDATE_PRODUCT',
    payload: product
});