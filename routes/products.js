const express = require('express');
const router = express.Router();
const pool = require('../server/db_connect');
const bodyParser = require('body-parser');
const Product = require('../models/Product')

router.use(express.json());
router.use(express.urlencoded({ extended: true }));

  // Get
router.route("/")
    .get((req, res) => Product.findAll()
        .then(prods => res.send(prods))
        .catch(err => console.log(err)));

  // Post
router.route("/")
    .post((req, res) => {
    let {name, color} = req.body

    Product.create({
        name, color})
        .then(prod => res.redirect('/'))
        .catch(err => console.log(err))
});

  // Put
router.route("/:id")
    .put((req, res) => {
        let {name, color} = req.body
        
    Product.update(
        {name, color}, 
        {where: {id: req.params.id}} )
        .then(prod => res.redirect('/'))
        .catch(err => console.log(err))
});

 // Delete
router.route("/:id")
    .delete((req, res) => {
        Product.destroy(
            {where: {id: req.params.id}})
            .then(prod => res.redirect('/'))
            .catch(err => console.log(err))
});


module.exports = router;
