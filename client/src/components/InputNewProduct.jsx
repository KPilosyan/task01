import React from "react";
import { saveNewProduct } from "../redux/axiosProducts";
import { useDispatch } from "react-redux";


export const InputNewProduct = () => {
    const [product, setProduct] = React.useState("");
    const dispatch = useDispatch();

    const updateProduct = (event) => {
        setProduct(event.target.value);
    };

    const handleSaveNewProduct = () => {
        dispatch(saveNewProduct(product))
    }

    return (
        <div>
            <input
                onChange={updateProduct}
                value={product}
                type="text"
                name="product"
                placeholder="Product"
            />
            <button onClick={handleSaveNewProduct}>Add Product</button>
        </div>
    );
};