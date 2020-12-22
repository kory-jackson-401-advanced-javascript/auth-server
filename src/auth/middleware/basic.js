"use strict";

/*
  Reads the encoded username and password from the Authentication header
Checks the Users model to see if this is a valid user and the right password
If the user is valid, generate a token and append it to the request object
If valid, call next()
Otherwise, call next() with an error as an argument
*/

const base64 = require("base-64");
const users = require("../models/users-model.js");

const basicAuth = async (req, res, next) => {
  try {
    let authorization = req.headers.authorization;
    let encoded = authorization.split(" ")[1];
    let credentials = base64.decode(encoded);
    let [username, password] = credentials.split(":");

    let userRecord = await users.validateBasicAuth(username, password);

    req.token = userRecord.generateToken();

    req.user - userRecord;

    next();
  } catch (e) {
    console.log(e);
    next("Invalid Credentials");
  }
};

module.exports = basicAuth;
