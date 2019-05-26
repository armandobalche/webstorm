
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

// router.get('/orders/add?id:id&status_id:status_id&customer_id:customer_id&date:date&change_log:change_log', (req, res) => {
//     var id = req.params.id,
//         status_id = req.params.status_id,
//         customer_id = req.params.customer_id,
//         date = req.params.date,
//         change_log = req.params.change_log;
//     mysqlConnection.query('INSERT INTO orders VALUES (?,?,?,?,?);',[id,status_id, customer_id, date, change_log], (err, rows, fields) => {
//         if(!err){
//             res.send();
//         } else{
//             console.log(err);
//         }
//     });
// });

router.get('/orders/add/id=:id&status_id=:status_id&customer_id=:customer_id&date=:date&change_log=:change_log', (req, res) => {
    var id = req.params.id,
        status_id = req.params.status_id,
        customer_id = req.params.customer_id,
        date = req.params.date,
        change_log = req.params.change_log;

    mysqlConnection.query('INSERT INTO orders values (?,?,?,?,?);',[id,status_id, customer_id, date, change_log], (err, rows, fields) => {
        if(!err){
            res.send('agregado exitosamente');
            res.end();

        } else{
            console.log(err);
            console.log('no se pudo agregar');
        }
    });
});


router.delete('/orders/delete:id', (req, res) => {
    mysqlConnection.query('DELETE FROM orders WHERE id =? AND status_id >2',[req.params.id], (err, rows, fields) => {
        if(!err){
            res.send("Borrado exitoso");
            res.end();
        } else{
            console.log(err);
        }
    });
});

module.exports = router;
