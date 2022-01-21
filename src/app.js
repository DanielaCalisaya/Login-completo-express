const express = require('express');
const path = require('path');
const app = express();
/* app.use(express.static('public')); */

/* routes */
let usersRouter = require('./routers/usersRouter');

/* const bycript = require('bcryptjs'); */

/* ejs */
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views")); 

//Middleware integrada en Express
app.use(express.static(path.join(__dirname, "../../public"))); /* esta en carpeta src... cm va? */
app.use(express.urlencoded({extended: false}));
app.use(express.json());

/* session */
/* const session = require('express-session');
app.use(session({
    secret: 'login',
    resave: false,
    saveUninitialized: true,
})); */

/* app.use(cookieParser())  */




app.use('/', usersRouter);


/* puerto */
const PORT = 3000
app.listen(PORT, () => console.log(
    `
        Puerto levantado
        http://localhost:${PORT}
    `
))