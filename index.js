const express   = require('express');
const bodyParser = require('body-parser');

//Create Express app
const app = express();
// console.log(app,"$$$$$$$$$$$$$$4")

//setup the server port 

const port =  process.env.port || 5002; 
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

//define root route 
app.get('/',(req, res) => {
    res.send("Hello world");
})

//import employee routes
const employeeRoutes = require('./src/routes/employee.route');
 app.use('/api/v1/employee',employeeRoutes)

//listen to the port 
app.listen(port,()=>{
    console.log(`Express server is running on ${port}`);
})