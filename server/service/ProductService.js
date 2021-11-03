/* eslint-disable */

const productModel = require('../models/productModel');
const BadRequest = require('../errors/BadRequest');
const Internal = require('../errors/Internal');

class ProductService {
  async getProducts() {
    try {
      const products = await productModel.findAll();
      return products;
    } catch (err) {
      throw new Internal('Internal Sever Error Occured');
    }
  }

  async getSpecificProduct(id) {
    // try {
      const product = await productModel.findOne({ where: { id } });
      if (product === null) {
        throw new BadRequest('Bad Request: Maybe there is no such product');
      }
      return product;
    // }
    // } catch (err) {
    //   if (err instanceof BadRequest) {
    //     return err; // Throw error above (product === null)
    //   }
    //   throw new Internal('Internal Sever Error Occured');
    // }
  }

  async postProduct(name, color) {
    try {
      const postedProduct = await productModel.create({ name, color });
      // console.log(postedProduct)
      return postedProduct;
    } catch (err) {
      throw new Internal('Internal Sever Error: Unable to create product');
    }
  }

  async putProduct(id, name, color) {
    try {
      const putProducts = await productModel.update(
        { name, color },
        { where: { id } },
      );

      return putProducts;
    } catch (err) {
      throw new Internal('Internal Sever Error: Unable to update product');
    }
  }

  async deleteProduct(id) {
    try {
      const productToBeDeleted = await productModel.findOne({ where: { id } })
      if (!productToBeDeleted) {
        throw new BadRequest('Product with this ID does not exist')
      }

      productModel.destroy({ where: { id } })

      
      return productToBeDeleted;
    } catch (err) {
      throw new Internal('Internal Sever Error: Unable to delete product');
    }
  }
}

module.exports = new ProductService();
