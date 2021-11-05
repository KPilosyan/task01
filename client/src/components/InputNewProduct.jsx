import React from "react";

export const InputNewProduct = ({ addProduct, postProduct }) => {
    const [product, setProduct] = React.useState("");

    const updateProduct = (event) => {
        setProduct(event.target.value);
    };

    const onAddProductClick = () => {
        addProduct(product);
        postProduct(product);
        setProduct("");
    };

    return (
        <div>
            <input
                onChange={updateProduct}
                value={product}
                type="text"
                name="product"
                placeholder="Product"
            />
            <button onClick={onAddProductClick}>Add Product</button>
        </div>
    );
};