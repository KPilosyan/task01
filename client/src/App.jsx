import React from 'react';
import axios from 'axios';
import { useEffect, useState } from 'react';
import InputNewProduct from './components/InputNewProduct';
import BasicTable from "./components/BasicTable";


function App() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:5000/products').then((res) => {
      setProducts(res.data);
    });
  }, []);

  const onSubmit = (productValue) => {
    axios.post("http://localhost:5000/products", { productValue }).then((res) => {
      axios.get('http://localhost:5000/products').then((res) => {
        setProducts(res.data);
      });
    })
  }

  return (
    <div className="products">

      <BasicTable products={products} />
      <InputNewProduct onSubmit={onSubmit} />

    </div>
  );
}

export default App;
