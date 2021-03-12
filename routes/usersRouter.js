const express = require("express");
const mongoose = require("mongoose");

const Users = require("../models/usersModel");

const userRouter = express.Router();

userRouter.route("/signup").post((req, res, next) => {
  Users.create(req.body)
    .then((response) => {
      res.json(response);
    })
    .catch((err) => next(err));
});

userRouter.route("/login").post((req, res, next) => {
  Users.findOne({ emailId: req.body.emailId })
    .then((data) => {
      if (data.password === req.body.password) res.sendStatus(200);
      else res.sendStatus(403);
    })
    .catch((err) => next(err));
});

userRouter.route("/getUserInfo").post((req, res, next) => {
  Users.findOne({ emailId: req.body.emailId })
    .then((data) => {
      res.json(data);
    })
    .catch((err) => next(err));
});

module.exports = userRouter;
