import { addProductAction, setProductsAction } from "./actions";
import axios from "axios";


export const fetchProducts = () => {
    return function (dispatch) {

        axios.get('http://localhost:5000/products')
            .then(res => {
                dispatch(setProductsAction(res.data))

            })
            .catch(err => console.log(err))
    }
}

export const saveNewProduct = (product) => {
    return function (dispatch) {

        axios.post('http://localhost:5000/products', { product }).then(res => {
            dispatch(addProductAction(res.data))

        }
        );

    }

}



