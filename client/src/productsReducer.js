import { ADD_PRODUCT } from "./actions"

const initialState = {
  products: []
}

export const productsReducer = (state = initialState, action) => {
  switch(action.type){
    case ADD_PRODUCT: {
      return {...state, products: [...state.products, action.payload]}

    }
    default:
      return state
  }
}

export const saveProducts = () => async (dispatch, getState) => {
  const products = getState().products;
  await fetch("http://localhost:5000/products", {
    method: "POST",
    headers: {
      'Accept': 'application/json',
      'Content-type': 'application/json'
    },
    body: products
  })
  alert('success')
} 