// connection between mongoDB_Atlas and httpServer(express)
const mongoose = require("mongoose");

// add connection string ATLAS_URI to app
const connection = mongoose
  .connect(process.env.ATLAS_URI)
  .then((db) => {
    console.log("DB connected");
    return db;
  })
  .catch((err) => {
    console.log("Connection error");
  });

module.exports = connection;
