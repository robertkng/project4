// required middleware for to run our web application; node dependencies,
// routes, and interaction between files

'use strict'
require('dotenv').config({ silent: true });
const express = require('express');
const logger  = require('morgan');
const path    = require('path');
const cookieParser  = require('cookie-parser');
const bodyParser = require('body-parser');
const app     = express();
const PORT    = process.argv[2] || process.env.port || 3000;
// const usersRouter   = require('./routes/api/users');
// const authRouter    = require('./routes/api/auth');



// To log issues to the terminal
app.use(logger('dev'));

app.use(express.static(path.join(__dirname, 'dist')));

// Parse cookie value
app.use(cookieParser());

// Parse data from fetch, to send as a JSON object
app.use(bodyParser.json());

// Routes used in our web application
// app.use('/api/users', usersRouter);
// app.use('/api/auth', authRouter);

// To log whether a server is running
app.listen(PORT, () => console.log('server here! listening on', PORT));
