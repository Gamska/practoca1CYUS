const express = require('express');
const router = express.Router();

const mysqlConnection  = require('../database');

// GET all Employees
router.get('/', (req, res) => {
  mysqlConnection.query('SELECT * FROM empleados', (err, rows, fields) => {
    if(!err) {
      res.json(rows);
    } else {
      console.log(err);
    }
  });  
});

// GET An Employee
router.get('/:id', (req, res) => {
  const { id } = req.params; 
  mysqlConnection.query('SELECT * FROM empleados WHERE id_empleado= ?', [id], (err, rows, fields) => {
    if (!err) {
      res.json(rows[0]);
    } else {
      console.log(err);
    }
  });
});

// DELETE An Employee
router.delete('/:id', (req, res) => {
  const { id } = req.params;
  mysqlConnection.query('DELETE FROM empleados WHERE id_empleado= ?', [id], (err, rows, fields) => {
    if(!err) {
      res.json({status: 'Employee Deleted'});
    } else {
      console.log(err);
    }
  });
});

// INSERT An Employee
router.post('/', (req, res) => {
  const { nombre,email,into_fecha } = req.body;
  mysqlConnection.query('INSERT INTO empleados Set?', [{nombre,email,into_fecha}], (err, rows, fields) => {
    if(!err) {
      res.json({status: 'Employee Update'});
    } else {
      console.log(err);
    }
  });
});

//update

router.put('/:id', (req, res) => {
  const { nombre,email,into_fecha } = req.body;
  const { id } = req.params;
  const query = `UPDATE empleados SET? WHERE id_empleado = ?`;
  mysqlConnection.query(query, [{nombre,email,into_fecha},id],(err, rows, fields) => {
    if(!err) {
      res.json({status: 'Employee Updated'});
    } else {
      console.log(err);
    }
  });
});

module.exports = router;
