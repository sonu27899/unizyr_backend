var mysql = require('mysql');
var connection = mysql.createPool({

    host: 'sql12.freemysqlhosting.net',
    user: 'sql12381011',
    password: 'A7GqPQ547g',
    database: 'sql12381011'

});
module.exports = connection;