const mysql = require('mysql2');

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'root',
    database: 'base_dados'
});

connection.connect((error)=>{
    if(error)
        console.log(error);
    else
        console.log('Conectado!sdfsdfsdfs');
});

module.exports = connection;
