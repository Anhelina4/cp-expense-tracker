// this var lets create different routes inside this file
const routes = require("express").Router();
const controller = require("../controller/controller");

// endpoint categories with get request
routes
  .route("/api/categories")
  // inside post there is a handler fn
  .post(controller.createCategories);

module.exports = routes;
