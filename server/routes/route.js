// this var lets create different routes inside this file
const routes = require("express").Router();
const controller = require("../controller/controller");
const { User, validate } = require("../models/model");
const Joi = require("joi");
const bcrypt = require("bcrypt");

// endpoint categories with get request
routes
  .route("/api/categories")
  // inside post there is a handler fn
  .post(controller.createCategories)
  // inside get there is a handler fn
  .get(controller.getCategories);

routes
  .route("/api/transaction")
  .post(controller.createTransaction)
  .get(controller.getTransaction)
  .delete(controller.deleteTransaction);

routes.route("/api/Stats").get(controller.getStats);

module.exports = routes;
