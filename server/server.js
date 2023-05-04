// http server file
// initialize web-framework for nodejs apps
const express = require("express");
// initialize app as express app(instance of express app)
const app = express();
const cors = require("cors");

// dotenv and config.env - for secret app info configuration data
require("dotenv").config({ path: "./config.env" });
const port = process.env.PORT || 3000;

// use middleware(cors in this case)
app.use(cors());
app.use(express.json());

// using routes
app.use(require("./routes/route"));

// listen changes on port
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
