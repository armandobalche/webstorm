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

router.get('/customers/add/id=:id&f_name=:fname&l_name=:lname&address=:address&tel1=:tel1&tel2=:tel2&tel3=:tel3&email=:email', (req, res) => {
    var id = req.params.id,
        fname = req.params.fname,
        lname = req.params.lname,
        address = req.params.address,
        phone1 = req.params.tel1,
        phone2 = req.params.tel2,
        phone3 = req.params.tel3,
        email = req.params.email;
    mysqlConnection.query('INSERT INTO customers values (?,?,?,?,?,?,?,?,1);',[id,fname,lname,address,phone1,phone2,phone3,email] ,(err, rows, fields) => {
        if (!err) {
            res.send('agregado exitoso');
            res.end();

        } else {
            console.log(err);
            console.log('No se pudo agregar');
        }
    });
});

router.delete('/customers/delete:id', (req, res) => {
    mysqlConnection.query('DELETE FROM customers WHERE id = ?;',[req.params.id], (err, rows, fields) => {
        if(!err){
            res.send("Borrado exitoso");
            res.end();
        } else{
            console.log(err);
        }
    });
});


router.get('/customers/update/id', (req, res) => {
    mysqlConnection.query('UPDATE customer SET ? WHERE id = ?;',[req.params.id], (err, rows, fields) => {
        if(!err){
            res.send("Borrado exitoso");
            res.end();
        } else{
            console.log(err);
        }
    });
});
module.exports = router;
