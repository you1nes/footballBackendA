const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const mysql = require('mysql');
let connection= require('./db.js');
const methodOverride = require('method-override');
const flash = require('express-flash');
const expressValidator = require('express-validator');


const app = express();

const bodyParser = require('body-parser');
var cors = require('cors');
app.use(cors());



app.use(cookieParser());
app.use(expressValidator());
app.use(bodyParser.json());

app.use(bodyParser.urlencoded({ extended: false }));

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

app.use(express.static(path.join(__dirname, 'public')));
let routes = require ('./routes/route');
app.use('/',routes);

app.use(express.json());





app.listen(8080, function () {
    console.log("App started at port 3000!!");
});



module.exports = app;
