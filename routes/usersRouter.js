const express = require("express");
const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const auth = require("../middleware/auth");

const Users = require("../models/usersModel");

const userRouter = express.Router();

userRouter.route("/signup").post(async (req, res, next) => {
  const data = req.body;
  const hashedPassword = await bcrypt.hash(req.body.password, 10);
  data.password = hashedPassword;

  Users.create(req.body)
    .then((response) => {
      res.json(response);
    })
    .catch((err) => next(err));
});

userRouter.route("/login").post(async (req, res, next) => {
  try {
    const { emailId, password } = req.body;

    const user = await Ambulance.findOne({ emailId: emailId });
    if (!user)
      return res.status(400).json({
        msg: "No account with this emailId has been registered.",
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

userRouter.route("/getUserInfo").post((req, res, next) => {
  Users.findOne({ emailId: req.body.emailId })
    .then((data) => {
      res.json(data);
    })
    .catch((err) => next(err));
});

module.exports = userRouter;
