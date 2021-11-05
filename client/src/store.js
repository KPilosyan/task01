import { createStore } from 'redux'
import { productsReducer } from './productsReducer'

export const store = createStore(productsReducer)