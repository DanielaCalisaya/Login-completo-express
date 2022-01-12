const express = require('express');
const app = express();
const path = require('path');

const session = require('express-session');
const bycript = require('bcryptjs');

app.use(session({
    secret: 'login',
    resave: false,
    saveUninitialized: true,
}));

app.use(cookieParser())