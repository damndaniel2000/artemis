const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ambulanceSchema = new Schema({
  plateNumber: {
    type: String,
    required: true,
    unique: true,
  },
  type: {
    type: String,
    require: true,
  },
  position: {
    lat: {
      type: Number,
      required: true,
    },
    lng: {
      type: Number,
      required: true,
    },
  },
});

module.exports = Ambulances = mongoose.model("Ambulances", ambulanceSchema);
