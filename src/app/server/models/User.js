(function() {
    "use strict";
    var mongoose        = require('mongoose'),
        crypto          = require('crypto'),
        // define collection schema
        UserSchema      = new mongoose.Schema({
            // username unique key index
            username: {
                type: String,
                unique: true
            },
            password: String,
            email: String
        }, {
            collection: 'users'
        });

    UserSchema.statics.findByUsername = function (username, cb) {
        this.findOne({ username: username}, cb);
    }

    UserSchema.statics.generateHash = function(password) {
        return crypto.createHash('md5').update(password).digest('hex');
    }

    module.exports = mongoose.model('User', UserSchema);
})();