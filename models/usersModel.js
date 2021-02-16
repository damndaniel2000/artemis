const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema({
  fname: {
    type: String,
    required: true,
  },
  mname: {
    type: String,
    required: true,
  },
  lname: {
    type: String,
    required: true,
  },
  DOB: {
    type: String,
    required: true,
  },
  age: {
    type: Number,
    required: true,
  },
  gender: {
    type: String,
    required: true,
  },
  bloodGroup: {
    type: String,
    required: true,
  },
  weight: {
    type: Number,
    required: true,
  },
  height: {
    type: Number,
    required: true,
  },
  emailId: {
    type: String,
    required: true,
  },
  aadharNo: {
    type: String,
    required: true,
  },
  allergies: [
    {
      cause: {
        type: String,
      },
      symptoms: {
        type: String,
      },
      medicine: {
        type: String,
      },
    },
  ],
  conditions: [
    {
      name: {
        type: String,
      },
      since: {
        type: String,
      },
    },
  ],
  medications: [
    {
      name: {
        type: String,
      },
      usage: {
        type: String,
      },
    },
  ],
  origins: [],
  destinations: [],
});

module.exports = Users = mongoose.model("Users", userSchema);
