const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const sportSchema = new Schema({
  public_id: {
    type: String,
    default:' '
  },
  url: {
    type: String,
    default:' '
  },
  title: {
    type: String,
    required: true
  },
  website: {
    type: String
  },
  date: {
    type: Date,
    default: Date.now
  }
});

const Sport = mongoose.model("Sport", sportSchema);

module.exports = Sport;
