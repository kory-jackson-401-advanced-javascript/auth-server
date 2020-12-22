'use strict';

const express = require('express');
const cors = require('cors');


const authRoutes = require('./auth/router.js');
const notFoundHandler = require('./middleware/404.js');
const errorHandler = require('./middleware/500.js');



const app = express();

app.use(cors())
app.use(express.json());
app.use(express.urlencoded({ extended: true }))

app.use(authRoutes);

/*
As a user, I want to present my token instead of my username and password so that I can access protected routes more securely
As a developer, I want to protect any route on my server by requiring a valid token to access it
As a developer, I want to create and manage secure tokens so that my users information will be secure
*/

app.use('*', notFoundHandler);

app.use(errorHandler);


module.exports = {
  app,
  start: (port) => app.listen(port, console.log('listening on', port))
}