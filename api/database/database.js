require('dotenv').config()
const mysql = require('mysql')

const pool = mysql.createPool({
    connectionLimit: process.env.DB_CONNECTION_LIMIT,
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME
})

const createTable = `create table if not exists users(
    id int primary key auto_increment,
    first_name varchar(255),
    last_name varchar(255),
    email varchar(255),
    phone varchar(255),
    password varchar(255),
    second_password varchar(255),
    createdAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updatedAt DATETIME DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
)`

pool.query(createTable, (error, elements) => {
    if (error) {
        console.log(error.message)
    }
})

module.exports = pool