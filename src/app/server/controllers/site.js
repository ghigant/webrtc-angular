/**
 * Main Site Controller
 */
(function () {
    "use strict";
    var User        = require('../models/User');
    module.exports = {
        signup: function(req, res) {
            var username = req.body.username,
                password = req.body.password;

            User.create({
                username: username,
                password: User.generateHash(password),
                email: username
            }, function(err, user) {
                res.json({success: !err});
            });
        },
        partials: function(req, res) {
            var template = req.params.template;
            if(template) {
                res.render('partials/' + template);
            } else {
                res.status(404).end();
            }
        }
    }
})();