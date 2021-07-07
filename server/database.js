const mysql = require('mysql');

const db = mysql.createPool({
    host: 'localhost',
    user: 'root',
    password: 'Mysql@123',
    database: 'student'
});


module.exports = db;