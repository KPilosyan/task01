const productModel = require("../models/product_model")
const BadRequestError = require('../errors/bad_request')
const InternalError = require('../errors/internal')

class ProductService {
    
    async getProducts() {
        try{
            const products = await productModel.findAll()
            return products;
        } catch (err) {
            const internalErrObj = new InternalError('Internal Sever Error Occured')
            return next(internalErrObj)
        }
    }

    async getSpecificProduct(id, next) {
        try{
            const product = await productModel.findOne({where: {id: id}})
            if (product === null) {
                const badReqErrObj = new BadRequestError('Bad Request: Maybe there is no such product')
                return next(badReqErrObj) 
            }
            return product;
        } catch (err) {
            const internalErrObj = new InternalError('Internal Sever Error Occured')
            return next(internalErrObj) 
        }
    }

    async postProduct(name, color) {
        try{
            const postedProduct = await productModel.create({name, color})
            return postedProduct;

        } catch (err) {
            const internalErrObj = new InternalError("Internal Sever Error: Unable to create product")
            return next(internalErrObj)
        }
    }

    async putProduct(id, name, color) {
        try{
        
            const putProducts = await productModel.update(
            {name, color}, 
            {where: {id: id}} )

            return putProducts

        } catch (err) {
            const internalErrObj = new InternalError("Internal Sever Error: Unable to update product")
            return next(internalErrObj)
        }
    }

    async deleteProduct(id) {
        try{
            const deletedProducts = await productModel.destroy( {where: {id: id}})
            return deletedProducts;

        } catch (err) {
            const internalErrObj = new InternalError("Internal Sever Error: Unable to delete product")
            return next(internalErrObj)
        }
    }
}

module.exports = new ProductService();