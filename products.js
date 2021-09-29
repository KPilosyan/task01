const express = require('express');
const app = express();
const db = require('./db_connect');
const bodyParser = require('body-parser');



module.exports = function(app) {

    // Get All Products
    app.get('/products', (req, res) => {
        db.client.query('select * from products', (err, result) => {
        
            if(!err) {
                res.send(result.rows);
            }
            else{
                console.log(err.message);
            }
        }) 
    })

    // Get Specific product (with id)
    app.get('/products/:id', (req, res) => {
        
        const result = db.client.query(`select * from products where id=${req.params.id}`, (err, result) => {
            if(!err) {
                res.send(result.rows);
            }
            else{
                console.log(err.message);
            }
        }) 
    })
    
        // middleware
    app.use(express.json());
    app.use(express.urlencoded({ extended: true }))
    
    // Post New Product
    app.post('/products', (req, res) => {
        console.log(req.body.name)
        const result = db.client.query(`insert into products (name, color) values ('${req.body.name}', '${req.body.color}')`, (err, result) => {
            
            if(!err) {
                res.send(result.rows);
            }
            else{
                console.log(err.message);
            }
        }) 
    })

    // Put (update) Specific Product
    app.put('/products/:id', (req, res) => {
        const result = db.client.query(`update products set name='${req.body.name}', color='${req.body.color}' where id=${req.params.id}`, (err, result) => {
            if(!err) {
                res.send(result.rows);
            }
            else{
                console.log(err.message);
            }
        }) 
    })

    // Delete Specific Product
    app.delete('/products/:id', (req, res) => {
        const result = db.client.query(`delete from products where id=${req.params.id}`, (err, result) => {
        
            if(!err) {
                res.send(result.rows);
            }
            else{
                console.log(err.message);
            }
        }) 
    })

}