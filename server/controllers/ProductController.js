/* eslint-disable */

const ProductService = require('../service/ProductService');
const InternalError = require('../errors/Internal');

class ProductController {
  async getProducts(_req, res, next) {
    try {
      const products = await ProductService.getProducts();
      return res.json(products);
    } catch (err) {
      return next(err);
    }
  }

  async getSpecificProduct(req, res, next) {
    try {
      const product = await ProductService.getSpecificProduct(req.params.id);
      return res.json(product);
    } catch (err) {
      console.log(err)
      return next(err);
    }
  }

  async postProduct(req, res, next) {
    try {
      const postedProduct = await ProductService.postProduct(req.body.name, req.body.color);
      return res.json(postedProduct);
    } catch (err) {
      const internalErrObj = new InternalError('Internal Error: Unable to create the product');
      return next(internalErrObj);
    }
  }

  async putProduct(req, res, next) {
    try {
      const putProduct = await ProductService.putProduct(req.params.id, req.body.name, req.body.color);
      return res.json(putProduct);
    } catch (err) {
      const internalErrObj = new InternalError('Internal Error: Unable to edit the product');
      return next(internalErrObj);
    }
  }

  async deleteProduct(req, res, next) {
    try {
      const deletedProduct = await ProductService.deleteProduct(req.params.id);
      return res.json(deletedProduct);
    } catch (err) {
      const internalErrObj = new InternalError('Internal Error: Unable to delete the product');
      return next(internalErrObj);
    }
  }
}

module.exports = new ProductController();
