const express = require('express');
const router = express.Router();

const auth = require('../middlewares/auth_middle')

const productController = require('../controllers/product_controller')

router.use(express.json());
router.use(express.urlencoded({ extended: true }));

router.get("/", auth(), productController.getProducts)
router.get("/:id", auth(), productController.getSpecificProduct)
router.post("/", auth(), productController.postProduct)
router.put("/:id", auth(), productController.putProduct)
router.delete("/:id", auth(), productController.deleteProduct)




module.exports = router;
