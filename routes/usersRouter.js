const express = require("express");
const mongoose = require("mongoose");

const Users = require("../models/usersModel");

const userRouter = express.Router();

userRouter
  .route("/signup")
  .post((req, res, next) => {
    Users.create(req.body)
      .then((response) => {
        res.json(response);
      })
      .catch((err) => next(err));
  })
  .get((req, res, next) => {
    Users.find()
      .then((data) => res.json(data))
      .catch((err) => next(err));
  });

module.exports = userRouter;
