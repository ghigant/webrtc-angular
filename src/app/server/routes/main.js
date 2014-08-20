(function() {
    "use strict";

    var router = require('express').Router(),
        ValidatorFilter       = require('../filters/validator'),
        SiteController        = require('../controllers/site');

    router.post('/signup', ValidatorFilter.signup, SiteController.signup);

    router.get('/partials/:template.html', SiteController.partials);

    module.exports = router;
})();