import React from "react";
import { saveNewProduct } from "../redux/axiosProducts";
import { useDispatch } from "react-redux";


export const InputNewProduct = () => {
    const [product, setProduct] = React.useState({ "name": "", "color": "" });
    const dispatch = useDispatch();

    const updateProduct = (event) => {
        const value = event.target.value;
        setProduct({
            ...product,
            [event.target.name]: value,
        });

    };

    const handleSaveNewProduct = () => {
        console.log(product)
        dispatch(saveNewProduct(product))
    }

    return (
        <div>
            <hr />
            <input
                onChange={updateProduct}
                value={product.name}
                type="text"
                name="name"
                placeholder="Product Name"
            />
            <input
                onChange={updateProduct}
                value={product.color}
                type="text"
                name="color"
                placeholder="Product Color"
            />
            <button onClick={handleSaveNewProduct}>Add Product</button>
        </div>
    );
};