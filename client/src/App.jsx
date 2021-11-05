import React from 'react';
import { InputNewProduct } from './components/InputNewProduct';
import BasicTable from "./components/BasicTable";
import { useSelector, useDispatch } from "react-redux";
import { addProductAction, getProductsAction } from "./actions";
import { postProduct } from './components/postProduct'


function App() {

  const products = useSelector((state) => state.products);
  const dispatch = useDispatch();
  console.log(products)

  dispatch(getProductsAction())

  const onAddProduct = (product) => {
    dispatch(addProductAction(product));
  };


  return (
    <>

      <BasicTable products={products} />
      <InputNewProduct addProduct={onAddProduct} />

      <hr />
      <ul>
        {
          products.map((product) => {
            return <li key={product}>{product}</li>;
          })
        }
      </ul>
      <hr />
      <button onClick={postProduct}>Post</button>

    </>
  );
}

export default App;
