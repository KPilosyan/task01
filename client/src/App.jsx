import React from 'react';
import axios from 'axios';
import { useEffect, useState } from 'react';
import InputNewProduct from './components/InputNewProduct'


import BasicTable from "./components/BasicTable";
// import { NewProductInput } from "./NewProductInput";
// import { useSelector, useDispatch } from "react-redux";
// import { addProduct } from "./actions";
// import { saveProducts } from "./productsReducer";

function App() {

  // const products = useSelector((state) => state.products);
  // const dispatch = useDispatch();

  // state = {}

  // const onAddProduct = (product) => {
  //   dispatch(addProduct(product));
  // };

  // const onSave = () => {
  //   dispatch(saveProducts());
  // };

  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:5000/products').then((res) => {
      setProducts(res.data);
    });
  }, []);


  return (
    <div className="products">

      <BasicTable products={products} />
      <InputNewProduct products={products} />
      {/* <hr />
      <NewProductInput addProduct={onAddProduct} />
      <hr />
      <ul>
        {products.map((product) => {
          return <li key={product}>{product}</li>;
        })}
      </ul>
      <hr />

      <button onClick={onSave}>Save</button>
      <hr /> */}
    </div>
  );
}

export default App;
