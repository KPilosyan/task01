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

    async getSpecificProduct(id) {
        try{
            const product = await productModel.findOne({where: {id: id}})
            return product;
        } catch (err) {
           console.log(err)
           throw err

        }
    }

    async postProduct(name, color) {
        try{
            const postedProduct = await productModel.create({name, color})
            return postedProduct;

        } catch (err) {
            console.log(err)
        }
    }

    async putProduct(id, name, color) {
        try{
        
            const putProducts = await productModel.update(
            {name, color}, 
            {where: {id: id}} )

            return putProducts

        } catch (err) {
            console.log(err)
        }
    }

    async deleteProduct(id) {
        try{
            const deletedProducts = await productModel.destroy( {where: {id: id}})
            return deletedProducts;

        } catch (err) {
            console.log(err)
        }
    }
}

module.exports = new ProductService();