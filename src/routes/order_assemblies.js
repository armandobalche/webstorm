const express = require('express');

const router = express.Router();

const mysqlConnection = require('../database');
router.get('/orderassemblies/', (req, res) => {
    mysqlConnection.query('SELECT * FROM order_assemblies', (err, rows, fields) => {
        if (!err) {
            res.json(rows);
            res.end();
        } else {
            console.log(err);
        }
    });
});

router.post('/orderassemblies/add/', (req, res) => {
    var id = req.body.id,
        assembly_id = req.body.assembly_id,
        qty = req.body.qty;
    mysqlConnection.query('INSERT INTO order_assemblies values (?,?,?);',[id,assembly_id,qty] ,(err, rows, fields) => {
        if (!err) {
            res.send();
            res.end();
        } else {
            console.log(err);
        }
    });
});

module.exports = router;
