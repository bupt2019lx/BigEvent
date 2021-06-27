function db(sql, fun) {
    const mysql = require('mysql');
    const connection = mysql.createConnection({
        host: 'localhost',
        user: 'root',
        password: '',
        database: 'bigevent'
    });
    connection.connect();
    connection.query(sql, fun);
    connection.end()
}
module.exports = db