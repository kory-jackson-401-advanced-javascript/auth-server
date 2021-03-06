"use strict";

/*
username: Type: String, Required
password: Type: String, Required
email: Type: String
fullname: Type: String
role: Type: String, must be one of: admin, editor, writer, user
*/
require("dotenv").config();

const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const secret = process.env.SECRET;

const users = mongoose.Schema({
  username: { type: String, required: true },
  password: { type: String, required: true },
  role: {
    type: String,
    require: true,
    default: "guest",
    enum: ["guest", "author", "editor", "admin"],
  },
});

const roleSelect = {
  guest: ["read"],
  author: ["read", "create"],
  editor: ["read", "create", "delete"],
  admin: ["read", "create", "delete", "update"],
};

users.pre("save", async function () {
  this.password = await bcrypt.hash(this.password, 7);
  console.log("The password is", this.password);
});

users.methods.permissions = function (capable) {
  return roleSelect[this.role].includes(capable);
}

users.methods.generateToken = function () {
  let token = jwt.sign({ username: this.username }, secret);
  return token;
};

users.statics.validateBasicAuth = async function (username, password) {
  let user = await this.findOne({ username: username });

  let isValid = await bcrypt.compare(password, user.password);

  if (isValid) {
    return user;
  } else {
    return undefined;
  }
};

users.statics.authenticateWithToken = async function (token) {
  try {
    const specialToken = jwt.verify(token, process.env.SECRET);
    const user = this.findOne({ username: specialToken.username });
    return user;
  } catch (e) {
    throw new Error(e.message);
  }
};

module.exports = mongoose.model("users", users);
