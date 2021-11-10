
export const ADD_PRODUCT = "ADD_PRODUCT";
export const SET_PRODUCTS = "SET_PRODUCTS";


export const addProductAction = (product) => ({
    type: ADD_PRODUCT,
    payload: product,
});
export const setProductsAction = (products) => ({
    type: SET_PRODUCTS,
    payload: products,
})
