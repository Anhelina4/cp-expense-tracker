const model = require("../models/model");

// controller to post request: http://localhost:8080/api/categories
function createCategories(req, res) {
  console.log("model.Categories()", new model.Categories());
  const CreateInstance = new model.Categories({
    type: "Savings",
    color: "red",
  });

  // console.log("data", CreateInstance);
  // console.log("req", req);
  // console.log("res", res);

  CreateInstance.save()
    .then(function (doc) {
      if (doc) return res.json(CreateInstance);
      return res
        .status(400)
        .json({ message: `Error while creating categories ${err}` });
    })
    .catch((err) => console.log("Error while saving data to DB", err));
}

module.exports = { createCategories };
