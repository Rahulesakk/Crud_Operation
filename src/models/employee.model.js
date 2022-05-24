const dbConn = require('../../config/db.config');

var Employee = function (employee) {
    this.name        = employee.name;
    this.lastName    = employee.lastname;
    this.address     = employee.address;
}
Employee.getallEmployee = (result) => {
    dbConn.query('Select * from customer',(err, res)=>{
        if(err) {
            console.log("Error while fetching employess",err);
            result(null,err)
        }else{
            console.log("Employess Fetched successfully");
            result(null,res);
        }
    })
}

//Get employee by ID form database

Employee.getEmployeeById = (id,result) => {
    dbConn.query('select * from customer where id = ?',id, (err, res) => {
        if(err) {
            console.log("Error while fetching employee by id",err);
            result(null,err);
        }else{
            result(null,res);
        }
    })
}
//To insert the csutomer data into the data base
Employee.createEmployee = (employeeReqdata,result) => {
    dbConn.query(`Insert into customer set ?`,employeeReqdata,(err, res) => {
        if(err){
            console.log("Eror while inserting into the database",err);
            result(null,err);
        }else{
            result(null,{status:true,message:"Employee created succesfully", insertedID:res.id});
        }
    })
}

//To delete the csutomer form the data base
Employee.deleteEmployee = (employeeId,result) => {
    dbConn.query(`Delete  from customer where id =  ?`,employeeId, (err, res)=>{
        if(err){
            result(null,err);
        }else{
            result(null,res);
        }
    })
}
module.exports = Employee;