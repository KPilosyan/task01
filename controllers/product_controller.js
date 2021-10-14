const productService = require('../service/product_service')

const InternalError = require('../errors/internal')


class ProductController {
    
    async getProducts(req, res, next) {
        try {
            const products = await productService.getProducts(next)
            return res.json(products)

        } catch (err) {
            const internalErrObj = new InternalError('Internal Error: Unable to retrieve products')
            return next(internalErrObj)
        }
    }

    async getSpecificProduct(req, res, next) {
        try {
            const product = await productService.getSpecificProduct(req.params.id, next)
            return res.json(product)

        } catch (err) {
            const internalErrObj = new InternalError('Internal Error: Unable to retrieve the product')
            return next(internalErrObj)
        }
    }

    async postProduct(req, res, next) {
        try {
            const postedProduct = await productService.postProduct(req.name, req.color, next)
            return res.json(postedProduct)

        } catch (err) {
            const internalErrObj = new InternalError('Internal Error: Unable to create the product')
            return next(internalErrObj)
        }
    }

    async putProduct(req, res, next) {
        try {
            const putProduct = await productService.putProduct(req.params.id, req.name, req.color, next)
            return res.json(putProduct)

        } catch (err) {
            const internalErrObj = new InternalError('Internal Error: Unable to edit the product')
            return next(internalErrObj)
        }
    }

    async deleteProduct(req, res, next) {
        try {
            const deletedProduct = await productService.deleteProduct(req.params.id, next)
            return res.json(deletedProduct)

        } catch (err) {
            const internalErrObj = new InternalError('Internal Error: Unable to delete the product')
            return next(internalErrObj)
        }
    }
}

module.exports = new ProductController();   