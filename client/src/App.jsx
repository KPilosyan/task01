// import './App.css';
import React from 'react';
// import { postProduct } from '../../server/service/ProductService';
// import { useEffect, useState } from "react";
// import axios from 'axios';
// import ProductList from "./components/ProductList.jsx";
import BasicTable from "./components/BasicTable";
import { NewProductInput } from "./NewProductInput";
import { useSelector, useDispatch } from "react-redux";
import { addProduct } from "./actions";
import { saveProducts } from "./productsReducer";

function App() {
  // const [products, setProducts] = useState([])
  // useEffect(() => {

  //   axios.get(`http://localhost:5000/products`).then(res => {
  //       setProducts(res.data)
  // })

  // }, [])
  const products = useSelector((state) => state.products);
  const dispatch = useDispatch();

  const onAddProduct = (product) => {
    dispatch(addProduct(product));
  };

  const onSave = () => {
    dispatch(saveProducts());
  };

  return (
    <div className="products">
      {/* <ProductList products={products} /> */}
      <BasicTable />
      <hr />
      <NewProductInput addProduct={onAddProduct} />
      <hr />
      <ul>
        {products.map((product) => {
          return <li key={product}>{product}</li>;
        })}
      </ul>
      <hr />

      <button onClick={onSave}>Save</button>
      <hr />
    </div>
  );
}

export default App;
