const model = require("../models/model");

// controller to post request: http://localhost:8080/api/categories
async function createCategories(req, res) {
  const CreateInstance = new model.Categories({
    type: "Investment",
    color: "yellow",
  });

  await CreateInstance.save()
    .then(function (doc) {
      if (doc) return res.json(CreateInstance);
      return res
        .status(400)
        .json({ message: `Error while creating categories ${err}` });
    })
    .catch((err) => console.log("Error while saving data to DB", err));
}
// controller to get request: http://localhost:8080/api/categories
async function getCategories(req, res) {
  // this will return all the objects from category collection
  let data = await model.Categories.find({});

  //get only necessary fields
  let filter = await data.map((o) =>
    Object.assign({}, { type: o.type, color: o.color })
  );
  return res.json(data);
}
// controller to post request: http://localhost:8080/api/transaction - this is an endpoint
async function createTransaction(req, res) {
  if (!req.body) return res.status(400).json("Pos HTTP data was not provided");
  let { name, type, amount } = req.body;

  const create = await new model.Transactions({
    name,
    type,
    amount,
    date: new Date(),
  });

  create
    .save()
    .then((data) => res.json(data))
    .catch((err) =>
      res.status(400).json(`Error while creating transaction ${err}`)
    );
}

// controller to get request: http://localhost:8080/api/transaction - this is an endpoint
async function getTransaction(req, res) {
  let data = await model.Transactions.find({});

  return res.json(data);
}
module.exports = {
  createCategories,
  getCategories,
  createTransaction,
  getTransaction,
};
