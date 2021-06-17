const express = require("express");
const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const Ambulance = require("../models/ambulanceModel");

const driverRouter = express.Router();

driverRouter.route("/login").post(async (req, res, next) => {
  try {
    const { plateNumber, password } = req.body;

    const user = await Ambulance.findOne({ plateNumber: plateNumber });
    if (!user)
      return res
        .status(400)
        .json({
          msg: "No account with this plate number has been registered.",
        });

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) return res.status(400).json({ msg: "Invalid credentials." });

    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET);
    res.json({
      token,
    });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

driverRouter.route("/signup").post(async (req, res, next) => {
  const data = req.body;
  const hashedPassword = await bcrypt.hash(req.body.password, 10);
  data.password = hashedPassword;

  Ambulance.create(data)
    .then(() => {
      res.setHeader("Content-Type", "application/json");
      res.json({ message: "Ambulance Registered Successfully" });
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
