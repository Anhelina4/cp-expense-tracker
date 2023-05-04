// http server file
// initialize web-framework for nodejs apps
const express = require("express");

// initialize app as express app(instance of express app)
const app = express();

const cors = require("cors");

const port = 3000;

// use middleware(cors in this case)
app.use(cors());
app.use(express.json());

// using routes
app.use(require("./routes/route"));

// listen changes on port
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
