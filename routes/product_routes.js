const express = require('express');
const router = express.Router();

const productController = require('../controllers/product_controller')

router.use(express.json());
router.use(express.urlencoded({ extended: true }));

router.get("/", productController.getProducts)
router.get("/:id", productController.getSpecificProduct)
router.post("/", productController.postProduct)
router.put("/:id", productController.putProduct)
router.delete("/:id", productController.deleteProduct)


// router.get((req, res) => Product.findAll()
//         .then(prods => res.send(prods))
//         .catch(err => console.log(err)));

//   // Post
// router.route("/")
//     .post((req, res) => {
//     let {name, color} = req.body

//     Product.create({
//         name, color})
//         .then(prod => res.json())
//         .catch(err => console.log(err))
// });

//   // Put
// router.route("/:id")
//     .put((req, res) => {
//         let {name, color} = req.body 
        
//     Product.update(
//         {name, color}, 
//         {where: {id: req.params.id}} )
//         .then(prod => res.redirect('/'))
//         .catch(err => console.log(err))
// });

//  // Delete
// router.route("/:id")
//     .delete((req, res) => {
//         Product.destroy(
//             {where: {id: req.params.id}})
//             .then(prod => res.redirect('/'))
//             .catch(err => console.log(err))
// });


module.exports = router;
