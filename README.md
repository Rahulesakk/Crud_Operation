# Crud_Operation
1) The main intentaion to create the crud operation is how we can create the api in the node js project.
2) To create this project i have used the following technologies like Node js, Express, and Mysql database.

---
## Running the project ##
1) First we need to clone ths project in your localhost using ssh or https which is given by the github.
2) After cloning the project in the project directory er need to run the command ** npm install **.
3) And in your localhost we need to create the data base with the name "Crud_node" and after creating the data base then we need to import the table which is is attached in the with the code.
4) After completeing the above 3 steps run the command npm start then project will start running and in the console it will show that the data base connected successfully.
5) If the above message is displaying in the console then your database is connected.
6) after this in the postman we need to run the api wether the crud operation is working or not for that we have ** 5 api **.
       1) http://localhost:5002/api/v1/employee --> this api is for the listing the users in the database.
       2) http://localhost:5002/api/v1/employee/id --> This api is for  getting the specfic user detail.
           * for the above 2 api we need to use GET Http method.
       3) http://localhost:5002/api/v1/employee --> for inserting the user into the data base we need to use this api.
           * for the above one we need to use POST Http method.
       4) http://localhost:5002/api/v1/employee/id --> To update the user details in we need to use this api.
           * for the above one we need to use PATCH Http method.
       5) http://localhost:5002/api/v1/employee/id  --> To delete the user form the data base we need to use this api.
           * for the above one we need to use DELETE Http method.
