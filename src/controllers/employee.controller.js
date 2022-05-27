const employeeModel = require('../models/employee.model');


//get all the employee details
exports.getAllEmployees = (req, res) => {
    employeeModel.getallEmployee((err, employee) => {
        if(err)
        res.send(err);
        console.log("Employee " + employee);
        res.send(employee);

    })
}

//get employee by id and name
exports.getEmployeeByID = (req, res) => {
    id=""
    employeeModel.getEmployeeById(req.params.id,(err, employee) => {
        if(err)
        res.send(err);
        console.log("Employee " + employee);
        res.send(employee);

    })
    // getEmployeeById
    console.log("get Emp by id");
}

//To Create a new customer
exports.createCustomer = (req,res) => {
    console.log("req data",req.body);
    const reqcustomerdata= new employeeModel(req.body);
    //check null value
    if(req.body.constructor === Object && Object(req.body).length == 0 ){
        res.send(400).send({success:false,message:"Please fill all fields"});

    }else{
        console.log("valid data");
        employeeModel.createEmployee(reqcustomerdata, (err,employee) => {
            if(err)
            res.send(err)
            res.json({status:true,message:'Employee Created successfully',data:employee.insertId})

        })
    }
}
// to delete the specfic customer by id 
exports.deleteCustomer = (req,res)=>{
    console.log("deleteCustomer");
    employeeModel.deleteEmployee(req.params.id,(err, employee) => {
        if(err)
        res.send(err);
        res.send(employee)
    })
}

//to Update the customer by customer id 
exports.updateCustomer = (req,res)=>{
    console.log(req.params.id);
    console.log(req.body,"body");
    employeeModel.updateEmployee(req.params.id,req.body,(err, employee) => {
        if(err)
        res.send(err)
        res.send(employee)
    })
}