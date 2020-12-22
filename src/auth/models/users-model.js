'use strict';

/*
username: Type: String, Required
password: Type: String, Required
email: Type: String
fullname: Type: String
role: Type: String, must be one of: admin, editor, writer, user
*/
require('dotenv').config();

const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const secret = process.env.SECRET;

const users = mongoose.Schema({
  username: { type: String, required: true },
  password: { type: String, required: true },
});

users.pre('save', async function () {
  this.password = await bcrypt.hash(this.password, 7);
  console.log('The password is', this.password);
});

users.methods.generateToken = function () {
  let token = jwt.sign({ username: this.username }, secret)
  return token;
};

users.statics.validateBasicAuth = async function (username, password) {
  let user = await this.findOne({ username: username });

  let isValid = await bcrypt.compare(password, user.password);

  if (isValid) { return user; }
  else { return undefined; }
}

module.exports = mongoose.model('users', users);