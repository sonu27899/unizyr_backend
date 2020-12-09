var express = require('express');
var router = express.Router();
var User = require('../models/user');

router.get('/:user_email?', function(req, res, next) {

    if (req.params.user_email) {

        User.getUserById(req.params.user_email, function(err, rows) {

            if (err) {
                res.json(err);
            } else {
                res.json(rows);
            }
        });
    } else {

        User.getAllUsers(function(err, rows) {

            if (err) {
                res.json(err);
            } else {
                res.json(rows);
            }

        });
    }
});
router.post('/', function(req, res, next) {

    User.addUser(req.body, function(err, count) {
        if (err) {
            res.json(err);
        } else {
            res.json(req.body); //or return count for 1 &amp;amp;amp; 0
        }
    });
});
router.delete('/:user_email', function(req, res, next) {

    User.deleteUser(req.params.user_email, function(err, count) {

        if (err) {
            res.json(err);
        } else {
            res.json(count);
        }

    });
});
router.put('/:user_email', function(req, res, next) {

    User.updateUser(req.params.user_email, req.body, function(err, rows) {

        if (err) {
            res.json(err);
        } else {
            res.json(rows);
        }
    });
});
module.exports = router;