import React from 'react';
import { InputNewProduct } from './components/InputNewProduct';
import BasicTable from "./components/BasicTable";
import { useSelector } from "react-redux";
// import { addProductAction } from "./actions";


function App() {

  const products = useSelector((state) => state.products);

  return (
    <>

      <BasicTable products={products} />
      <InputNewProduct />
    </>
  );
}

export default App;
