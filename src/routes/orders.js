
const express = require('express');

const router = express.Router();

const mysqlConnection = require('../database');

router.get('/orders/', (req, res) => {
    mysqlConnection.query('SELECT * FROM orders;', (err, rows, fields) => {
        if(!err){
            res.json(rows);
            res.end();
        } else{
            console.log(err);
        }
    });
});

router.post('/orders/add', (req, res) => {
    var id = req.body.id,
        status_id = req.body.status_id,
        customer_id = req.body.customer_id,
        date = req.body.date,
        change_log = req.body.change_log;
    mysqlConnection.query('INSERT INTO orders values (?,?,?,?,?);',[id,status_id, customer_id, date, change_log], (err, rows, fields) => {
        if(!err){
            res.send();
            res.end();
        } else{
            console.log(err);
        }
    });
});

router.delete('/orders/delete:id', (req, res) => {
    mysqlConnection.query('DELETE FROM orders o WHERE id = ? AND status_id < 2;',[req.params.id], (err, rows, fields) => {
        if(!err){
            res.send("Borrado exitoso");
            res.end();
        } else{
            console.log(err);
        }
    });
});

module.exports = router;
