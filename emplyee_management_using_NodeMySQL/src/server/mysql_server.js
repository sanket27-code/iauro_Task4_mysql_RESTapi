const mysql = require('mysql');

const dbConnection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'Ainch',
    database: 'iauro',
    multipleStatements: true
});

dbConnection.connect((err)=>{
    if(err){
        console.warn('error occured while connecting to db!', err);
        return;
    }
    console.log('connected to MySQL db!');
});

module.exports = dbConnection;