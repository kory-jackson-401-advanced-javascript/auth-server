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
TODO: As a user, I want to create a new account so that I may later login
TODO: As a user, I want to login to my account so that I may access protected information
TODO: As a developer, I want to create an authentication server so that our application can restrict access to certain routes
TODO: As a developer, I want to create a authentication as a reusable module, so that I can use it in other projects
TODO: As a developer, I want to use industry standards for http based basic authentication
TODO: As a developer, I want to provide applications and users a token following authentication to facilitate re-authentication on subsequent requests
*/

app.use('*', notFoundHandler);

app.use(errorHandler);


module.exports = {
  app,
  start: (port) => app.listen(port, console.log('listening on', port))
}