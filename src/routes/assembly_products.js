
const express = require('express');

const router = express.Router();

const mysqlConnection = require('../database');
router.get('/assemblyproducts/', (req, res) => {
    mysqlConnection.query('SELECT * FROM assembly_products;', (err, rows, fields) => {
        if(!err){
            res.json(rows);
            res.end();
        } else{
            console.log(err);
        }
    });
});

module.exports = router;
