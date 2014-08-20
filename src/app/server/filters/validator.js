(function() {
    "use strict";

    var expressValidator = require('express-validator');

    module.exports = {
        signup: function(req, res, next) {
            req.checkBody('username', 'Invalid email address').notEmpty().isEmail();
            req.checkBody('password', 'Password is too short').notEmpty().len(6, 40);

            req.checkBody('repassword', 'Confirm password mismatch').equals(req.body.password);
            var errors = req.validationErrors();

            if(!errors) {
                return next();
            }

            res.json({
                success: false,
                errors: errors
            });
        }
    };
})();