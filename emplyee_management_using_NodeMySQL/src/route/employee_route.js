const express = require('express');
const router = express.Router();
const employee_controller = require('../controller/employee_controller');

// GET all Employees
router.get('/employee', employee_controller.getAllEmployee);

// GET one Employee
router.get('/employee/:id', employee_controller.getOneEmployee);

// INSERT an Employee
router.post('/employee', employee_controller.addOneEmployee);

// UPDATE an Employee
router.patch('/employee/:id', employee_controller.updateOneEmployee);

// DELETE an Employee
router.delete('/employee/:id', employee_controller.deleteOneEmployee);

module.exports = router;