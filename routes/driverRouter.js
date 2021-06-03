const express = require("express");
const mongoose = require("mongoose");

const Ambulance = require("../models/ambulanceModel");

const driverRouter = express.Router();

driverRouter.route("/login").post((req, res, next) => {
  Ambulance.findOne({ plateNumber: req.body.plateNumber })
    .then((data) => {
      if (data === null) {
        res.sendStatus(404);
        return;
      }
      if (data.password === req.body.password) {
        res.send(data);
      } else res.sendStatus(403);
    })
    .catch((err) => next(err));
});

driverRouter.route("/feedback").post((req, res, next) => {
  Ambulance.findOne({ plateNumber: req.body.plateNumber })
    .then(
      (data) => {
        if (data != null) {
          res.statusCode = 200;
          res.setHeader("Content-Type", "application/json");
          data.feedback.push(req.body.feedback);
          data
            .save()
            .then(
              (feedback) => {
                res.json(feedback);
              },
              (err) => next(err)
            )
            .catch((err) => next(err));
        } else {
          err = new Error(`Job ${req.params.id} not found`);
          err.status = 404;
          return next(err);
        }
      },
      (err) => next(err)
    )
    .catch((err) => next(err));
});

module.exports = driverRouter;
