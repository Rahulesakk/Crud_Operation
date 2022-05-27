const express = require('express');
const router = express.Router();

const employeeController = require('../controllers/employee.controller');

router.get('/',employeeController.getAllEmployees);

router.get('/:id',employeeController.getEmployeeByID);

router.post('/',employeeController.createCustomer);

router.delete('/:id',employeeController.deleteCustomer);

router.patch('/:id',employeeController.updateCustomer);

module.exports = router;