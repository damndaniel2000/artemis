const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ambulanceSchema = new Schema({
  plateNumber: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  feedback: [
    {
      rating: {
        type: String,
      },
      comments: {
        type: String,
      },
      destination: {
        type: String,
      },
      date: {
        type: String,
      },
    },
  ],
  type: {
    type: String,
    require: true,
  },
  position: {
    lat: {
      type: Number,
    },
    lng: {
      type: Number,
    },
  },
});

module.exports = Ambulances = mongoose.model("Ambulances", ambulanceSchema);
