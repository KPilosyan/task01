const productService = require('../service/product_service')

class ProductController {
    
    async getProducts(req, res, next) {
        try {
            const products = await productService.getProducts()
            return res.json(products)

        } catch (err) {
            console.log(err)
        }
        next()
    }

    async getSpecificProduct(req, res, next) {
        try {
            const product = await productService.getSpecificProduct(req)
            return res.json(product)

        } catch (err) {
            console.log(err)
        }
        next()
    }

    async postProduct(req, res, next) {
        try {
            const postedProduct = await productService.postProduct(req)
            return res.json(postedProduct)

        } catch (err) {
            console.log(err)
        }
        next()
    }

    async putProduct(req, res, next) {
        try {
            const putProduct = await productService.putProduct(req)
            return res.json(putProduct)

        } catch (err) {
            console.log(err)
        }
        next()
    }

    async deleteProduct(req, res, next) {
        try {
            const deletedProduct = await productService.deleteProduct(req)
            return res.json(deletedProduct)

        } catch (err) {
            console.log(err)
        }
    }
}

module.exports = new ProductController();   