import React from "react";

export const NewProductInput = ({ addProduct }) => {
  const [product, setProduct] = React.useState("")

  const updateProduct = (event) => {
    setProduct(event.target.value);
  };

  const onAddProductClick = () => {
    addProduct(product);
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
