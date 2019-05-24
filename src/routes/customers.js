const express = require('express');

const router = express.Router();

const mysqlConnection = require('../database');
router.get('/customers/', (req, res) => {
    mysqlConnection.query('SELECT * FROM customers;', (err, rows, fields) => {
        if (!err) {
            res.json(rows);
            res.end();
        } else {
            console.log(err);
        }
    });

});

// router.get('/:id', (req, res) => {
//     id =req.id;
//     mysqlConnection.query('SELECT name FROM employees where' + id ;', (err, rows, fields) => {
//         if(!err){
//             res.json(rows);
//             res.end();
//
//         } else{
//             console.log(err);
//         }
//
//     });
// });

router.post('/customers/add/', (req, res) => {
    var id = req.body.id,
        fname = req.body.fname,
        lname = req.body.lname,
        address = req.body.address,
        phone1 = req.body.phone1,
        phone2 = req.body.phone2,
        phone3 = req.body.phone3,
        email = req.body.email;
    mysqlConnection.query('INSERT INTO customers values (?,?,?,?,?,?,?,?);',[id,fname,lname,address,phone1,phone2,phone3,email] ,(err, rows, fields) => {
        if (!err) {
            res.send();
            res.end();
        } else {
            console.log(err);
        }
    });
});

module.exports = router;
