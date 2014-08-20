(function() {
    "use strict";

    var express         = require('express'),
        path            = require('path'),
        app             = express(),
        logger          = require('morgan'),
        bodyParser      = require('body-parser'),
        methodOverride  = require('method-override'),
        cookieParser    = require('cookie-parser'),
        session         = require('express-session'),
        passport        = require('passport'),
        LocalStrategy   = require('passport-local'),
        mongoose        = require('mongoose'),

        validator       = require('express-validator'),
        mainRouter      = require('./routes/main'),

        database = null;

    mongoose.connect('mongodb://localhost:27017/anbu_angular');

    app.set('views', path.resolve(__dirname + '/views'));
    app.set('view engine', 'ejs');
    app.use(express.static(path.join(__dirname, '../client')));

    app.use(logger('dev'));
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({
        extended: true
    }));
    // this line must be immediately after express.bodyParser()!
    app.use(validator());

    app.use(methodOverride());

    app.use(cookieParser('strong password'));
    app.use(session({
        name: 'anbu.sid',
        secret: 'strong password',
        resave: true,
        saveUninitialized: true
    }));

    app.use(passport.initialize());
    app.use(passport.session());

    app.use('/', mainRouter);

    app.get('/*', function(req, res) {
        res.render('index', {
            title: 'webRTC Project'
        });
    });

    app.listen(3000, function() {
        console.log('Server Running at port 3000');
    });
})();
