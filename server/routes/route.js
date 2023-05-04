// this var lets create different routes inside this file
const routes = require("express").Router();

// endpoint categories with get request
routes
  .route("/api/categories")
  // inside get there is a handler fn
  .get((req, res) => res.json("Get request from categories"));

module.exports = routes;
