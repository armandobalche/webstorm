
const express = require('express');

const router = express.Router();

const mysqlConnection = require('../database');
router.get('/customers/', (req, res) => {
    mysqlConnection.query('SELECT * FROM customers;', (err, rows, fields) => {
        if(!err){
            res.json(rows);
            res.end();
        } else{
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

router.get('/customers/add:id-:fname-:lname-:adress-:phone1-:phone2-:phone3-:email/', (req, res) => {
    let id = req.params.id;
    let fname = req.params.id;
    let lname = req.params.id;
    let phone1 = req.params.id;
    let phone2 = req.params.id;
    let phone3 = req.params.id;
    let email = req.params.id;
    mysqlConnection.query('INSERT INTO customers values ('+id+',"'+fname+'","'+lname+'","'+phone1+'","'+phone2+'","'+phone3+'","'+email+'");', (err, rows, fields) => {
        if(!err){
            res.send();
            res.end();
        } else{
            console.log(err);
        }

    });

});

module.exports = router;
