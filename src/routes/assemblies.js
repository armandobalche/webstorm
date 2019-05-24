const express = require('express');

const router = express.Router();

const mysqlConnection = require('../database');

router.get('/assemblies/', (req, res) => {
    mysqlConnection.query('SELECT * FROM assemblies;', (err, rows, fields) => {
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

module.exports = router;
