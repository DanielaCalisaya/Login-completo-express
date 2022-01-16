const express = require('express');
const app = express();
const path = require('path');
app.use(express.static('public'));

const bycript = require('bcryptjs');

/* ejs */
app.set("view engine", "ejs");
app.set('views', path.join(__dirname, 'views')); 

//Middleware integrada en Express
app.use(express.urlencoded({extended: false}));
app.use(express.json());

/* session */
const session = require('express-session');
app.use(session({
    secret: 'login',
    resave: false,
    saveUninitialized: true,
}));

/* app.use(cookieParser()) */

/* route */
let login = require('./routers/loginRouter');

app.use('/users', login);


/* puerto */
app.listen(3001, () => 
console.log('Servidor levantado'));