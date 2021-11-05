

export const ADD_PRODUCT = "ADD_PRODUCT";
export const GET_PRODUCTS = "GET_PRODUCTS";


export const addProductAction = (product) => ({
    type: ADD_PRODUCT,
    payload: product,
});

export const getProductsAction = () => ({
    type: GET_PRODUCTS,
})
