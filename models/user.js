var db = require('../dbconnection'); //reference of dbconnection.js

var User = {

    getAllUsers: function(callback) {
        return db.query("Select * from user_tbl", callback);
    },
    getUserById: function(user_email, callback) {
        return db.query("select * from user_tbl where user_email=?", [user_email], callback);
    },
    addUser: function(User, callback) {
        return db.query("Insert into user_tbl values(?,?,?,?)", [User.user_name, User.user_email, User.contact, User.address], callback);
    },
    deleteUser: function(user_email, callback) {
        return db.query("delete from user_tbl where user_email=?", [user_email], callback);
    },
    updateUser: function(user_email, User, callback) {
        return db.query("update user_tbl set user_name=?,contact=?,address=? where user_email=?", [User.user_name, User.contact, User.address,user_email], callback);
    }

};
module.exports = User;