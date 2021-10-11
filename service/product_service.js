const productModel = require("../models/product_model")

class ProductService {
    
    async getProducts() {
        try{
            const products = await productModel.findAll()
            return products;
        } catch (err) {
            console.log(err)
        }
    }

    async getSpecificProduct(req) {
        try{
            const product = await productModel.findOne({where: {id: req.params.id}})
            return product;
        } catch (err) {
           console.log(err)
           throw err

        }
    }

    async postProduct(name, color) {
        try{
            let {name, color} = req.body

            const postedProduct = await productModel.create({name, color})
            return postedProduct;

        } catch (err) {
            console.log(err)
        }
    }

    async putProduct(req) {
        try{
            let {name, color} = req.body 
        
            const putProducts = await productModel.update(
            {name, color}, 
            {where: {id: req.params.id}} )

            return putProducts

        } catch (err) {
            console.log(err)
        }
    }

    async deleteProduct(req) {
        try{
            const deletedProducts = await productModel.destroy( {where: {id: req.params.id}})
            return deletedProducts;

        } catch (err) {
            console.log(err)
        }
    }
}

module.exports = new ProductService();