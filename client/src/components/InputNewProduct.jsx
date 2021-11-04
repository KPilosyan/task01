import { useState } from 'react';
import '../App'


const InputNewProduct = (props) => {
    const [productValue, setProductValue] = useState('');
    const onSubmit = props.onSubmit;

    const newProduct = (event) => {
        setProductValue(event.target.value);
    }

    return (
        <>
            <input
                type="text"
                value={productValue}
                onChange={newProduct}
                name="product"
                placeholder="Product"
            />
            <input type="submit" value="Submit" onClick={() => onSubmit(productValue)} />
        </>
    )
}

export default InputNewProduct;