const express = require("express");
const mongoose = require("mongoose");
const auth = require("../middleware/auth");

const Ambulance = require("../models/ambulanceModel.js");

const ambulanceRouter = express.Router();

const returnObjectId = (auth) => {
  return jwt.verify(auth, process.env.JWT_SECRET).id;
};

ambulanceRouter.route("/").get((req, res, next) => {
  Ambulance.find(req.query)
    .then((details) => {
      res.setHeader("Content-Type", "application/json");
      res.json(details);
    })
    .catch((err) => next(err));
});

ambulanceRouter.route("/:ambulanceID").get((req, res, next) => {
  Ambulance.findById(req.params.ambulanceID)
    .then((details) => {
      res.setHeader("Content-Type", "application/json");
      res.json(details);
    })
    .catch((err) => next(err));
});

module.exports = ambulanceRouter;
