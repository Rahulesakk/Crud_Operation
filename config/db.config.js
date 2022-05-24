const mysql = require('mysql');

//Create mysql connection

const dbconn = mysql.createConnection({
    host : '127.0.0.1',
    user : 'root',
    password : 'active41',
    database : 'Crud_node',
    port: 3306
})

dbconn.connect(function (err){
    if(err) {
        console.log(err);
        throw err;
    }
    console.log('Data Base connected succesfully')
})
module.exports = dbconn;