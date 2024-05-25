import mysql from 'mysql';

const connection = mysql.createConnection({
    // MySQL Connection
        host: process.env.HOST,
        user: process.env.USER,
        password: process.env.PASSWORD,
        database: process.env.DATEBASE,
    });
    connection.connect(function(err) {
        if (err) throw err;
    });
    export default connection