const mysql = require('mysql2');

// Create a MySQL connection pool
const localDb = mysql.createPool({
    host: 'localhost',
    port:3306,
    user: 'root',
    password: '',
    database: 'database_api'
});

localDb.getConnection((err)=>{
    (err)?console.log("Database connection failed:"):console.log("Database connection Success");
})
module.exports ={localDb}