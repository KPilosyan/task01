
export const postProduct = async (product) => {
    await fetch("http://localhost:5000/products", {
        method: "POST",
        headers: {
            'Accept': 'application/json',
            'Content-type': 'application/json'
        },
        body: JSON.stringify(product)
    }
    )
}