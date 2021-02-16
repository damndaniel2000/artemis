const express = require("express");
const mongoose = require("mongoose");

const Ambulance = require("../models/ambulanceModel");

const userRouter = express.Router();

userRouter
  .route("/login")
  .post((req, res, next) => {
    Ambulance.findOne({ plateNumber: req.body.plateNumber })
      .then((response) => {
        res.json(response);
      })
      .catch((err) => next(err));
  })
  .get((req, res, next) => {
    next("This route works");
  });

module.exports = userRouter;
