// http server file
// initialize web-framework for nodejs apps
const express = require("express");
// initialize app as express app(instance of express app)
const app = express();
const cors = require("cors");

// dotenv and config.env - for secret app info configuration data
require("dotenv").config({ path: "./config.env" });
const port = process.env.PORT || 3000;

// use middleware(cors to control access depending on its origin in this case)
app.use(cors());
app.use(express.json());

// mongoDB connection
const connection = require("./db/connection");

// using routes
app.use(require("./routes/route"));

connection
  .then((db) => {
    if (!db) return process.exit(1);

    // listen to http server on port only when we have valid connection to DB
    app.listen(port, () => {
      console.log(`Example app listening on port ${port}`);
    });

    app.on("error", (err) =>
      console.log("Failed to Connect with HTTP server", err)
    );
  })
  //   error in mongodb connection
  .catch((err) => console.log("Failed to Connect with MongoDB", err));
