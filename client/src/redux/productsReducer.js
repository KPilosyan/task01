import { ADD_PRODUCT, SET_PRODUCTS } from "./actions";

const initialState = {
    products: []
}

export const productsReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_PRODUCT: {

            return { ...state, products: [...state.products, action.payload] }
        }


        case SET_PRODUCTS: {
            return { ...state, products: action.payload }

        }

        default:
            return state
    }
}



