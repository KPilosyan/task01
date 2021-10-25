// import './App.css';
import React from 'react';
// import { useEffect, useState } from "react";
// import axios from 'axios';
// import ProductList from "./components/ProductList.jsx";
import BasicTable from "./components/BasicTable";

function App() {
  // const [products, setProducts] = useState([])
  // useEffect(() => {

  //   axios.get(`http://localhost:5000/products`).then(res => {
  //       setProducts(res.data)
  // })

  // }, [])

  return (
    <div className="products">
      {/* <ProductList products={products} /> */}
      <BasicTable />
    </div>
  );
}

export default App;
