import { createStore } from 'redux';
import { productsReducer } from './productsReducer';
import { applyMiddleware } from 'redux';
import ThunkMiddleware from 'redux-thunk'
import { fetchProducts } from './axiosProducts';

export const store = createStore(productsReducer, applyMiddleware(ThunkMiddleware));

store.dispatch(fetchProducts())
