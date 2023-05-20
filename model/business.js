const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const businessSchema = new Schema({
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

const Business = mongoose.model("Business", businessSchema);

module.exports = Business;
