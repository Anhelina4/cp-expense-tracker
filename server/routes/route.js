// this var lets create different routes inside this file
const routes = require("express").Router();
const controller = require("../controller/controller");

// endpoint categories with get request
routes
  .route("/api/categories")
  // inside get there is a handler fn
  .get(controller.createCategories);

module.exports = routes;
