const express = require('express');
const router = express.Router();
const pool = require('../server/db_connect');
const bodyParser = require('body-parser');

router.use(express.json());
router.use(express.urlencoded({ extended: true }));

router.route("/")
    .get( async (req, res) => {
        const q_res = await pool.query('Select * from products');
        res.json(q_res.rows) })

    .post( async (req, res) => {
        const q_res = await pool.query(`insert into products (name, color) values ('${req.body.name}', '${req.body.color}')`);
        res.json(q_res.rows) });

router.route("/:id")
    .put( async (req, res) => {
        const q_res = await pool.query(`update products set name='${req.body.name}', color='${req.body.color}' where id=${req.params.id}`);
        res.json(q_res.rows) })

    .delete( async (req, res) => {
        const q_res = await pool.query(`delete from products where id=${req.params.id}`);
        res.json(q_res.rows) });


module.exports = router;
