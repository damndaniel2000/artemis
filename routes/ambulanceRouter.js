const express = require("express");
const mongoose = require("mongoose");

const Ambulance = require("../models/ambulanceModel.js");

const ambulanceRouter = express.Router();

ambulanceRouter
  .route("/")
  .get((req, res, next) => {
    Ambulance.find(req.query)
      .then((details) => {
        res.setHeader("Content-Type", "application/json");
        res.json(details);
      })
      .catch((err) => next(err));
  })
  .post((req, res, next) => {
    Ambulance.create(req.body)
      .then(() => {
        res.setHeader("Content-Type", "application/json");
        res.json({ message: "Ambulance Registered Successfully" });
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
