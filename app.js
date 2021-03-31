const createError = require('http-errors');
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const mysql = require('mysql');
let connection= require('./db.js');

const app = express();

const bodyParser = require('body-parser');
const jsonParser = bodyParser.json();
const urlencodedParser = bodyParser.urlencoded({extended: false});

app.use(cookieParser());

app.set('view engine', 'ejs');
app.set('view engine', 'pug');

app.set('views', path.join(__dirname, 'views'));

app.use(express.static(path.join(__dirname, 'public')));
let routes = require ('./routes/route');
app.use('/',routes);

app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.use((req, res, next) => next(createError(404)));


// error handler
app.use(function (err, req, res, next) {
    // set locals, only providing error in development
    res.locals.message = err.message;
    res.locals.error = req.app.get('env') === 'development' ? err : {};

    // render the error page
    res.status(err.status || 500);
    res.render('error');
});

//app.use(flash());
app.use(bodyParser.json());
app.listen(8080, function () {
    console.log("App started at port 8080!!");
});



module.exports = app;
