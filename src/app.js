const express = require('express');
const app = express();
const path = require('path');

const bycript = require('bcryptjs');

/* ejs */
app.set("view engine", "ejs");
app.set('views', path.join(__dirname, 'views')); 

/* session */
const session = require('express-session');
app.use(session({
    secret: 'login',
    resave: false,
    saveUninitialized: true,
}));

/* app.use(cookieParser()) */

//Middleware integrada en Express
app.use(express.urlencoded({extended: false}));
app.use(express.json());


/* puerto */
app.listen(3001, () => 
console.log('Servidor levantado'));