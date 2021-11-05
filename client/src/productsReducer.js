import { ADD_PRODUCT, GET_PRODUCTS } from "./actions"
import axios from 'axios';


const initialState = {
    products: []
}

export const productsReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_PRODUCT: {

            return { ...state, products: [...state.products, action.payload] }
        }

        case GET_PRODUCTS: {
            const products = axios.get('http://localhost:5000/products'); // to be taken to middleware  (issue: returns promise)
            return { ...state, products: [...state.products, products] }
        }

        default:
            return state
    }
}
