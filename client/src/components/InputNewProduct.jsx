import { useState } from 'react';
import '../App'


const InputNewProduct = (props) => {

    const [productValue, setProductValue] = useState('');

    const newProduct = (event) => {
        setProductValue(event.target.value);
    }

    const handleSubmit = () => {
        fetch("http://localhost:5000/products", {
            method: "POST",
            headers: {
                'Accept': 'application/json',
                'Content-type': 'application/json'
            },
            body: productValue
        })
    }

    return (
        <form onSubmit={handleSubmit}>
            <label>
                <input
                    type="text"
                    value={productValue}
                    onChange={newProduct}
                    name="product"
                    placeholder="Product" />
            </label>
            <input type="submit" value="Submit" />
        </form>
    )
}

export default InputNewProduct;