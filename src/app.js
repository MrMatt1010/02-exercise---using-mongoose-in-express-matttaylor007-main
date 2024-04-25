const express = require("express");
const cors = require("cors");
const app = express();
const PropertyModel = require("./models/PropertyModel");
const formatProperty = require("./formatProperty");

app.use(cors());
app.use(express.json());

// FIXME write your routes here

app.get("/properties", async (request, response) => {
  const properties = await PropertyModel.find({});
  const formattedProperties = properties.map((property) => {
    return formatProperty(property);
  });
  return response.status(200).send(formattedProperties);
});

app.get("/properties/:id", async (request, response) => {
  const id = request.params.id;
  const property = await PropertyModel.findById(id);
  const formattedProperty = formatProperty(property);
  return response.status(200).send(formattedProperty);
});

module.exports = app;
