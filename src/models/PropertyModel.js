const mongoose = require("mongoose");
const { Schema } = mongoose;

const propertySchema = new Schema({
  askingPrice: { type: String, required: true },
  description: { type: String, required: true },
  address: { type: String, required: true },
  title: { type: String, required: true },
  img: { type: String, required: true },
});

const property = mongoose.model("property", propertySchema);

module.exports = property;
