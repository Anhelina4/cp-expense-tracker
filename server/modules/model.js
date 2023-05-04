// specify structure to mongoDB documents(schema of documents)

// mongoose - is a lib for OOP JS, which connects MongoDB with JS execution environment - Node.js
const mongoose = require("mongoose");

const Schema = mongoose.Schema;

// categories = >filed=>['type', 'color']
const categoryModel = new Schema({
  type: { type: String, defaultValue: "Investment" },
  color: { type: String, defaultValue: "var(--color-yellow)" },
});

// transactions = > field =>['name', 'type', 'amount', 'date']
const transactionModel = new Schema({
  name: { type: String, defaultValue: "Anonymous" },
  type: { type: String, defaultValue: "Investment" },
  amount: { type: Number },
  date: { type: Date, defaultValue: Date.now() },
});

// add these models to mongoDB
const Categories = mongoose.model("categories", categoryModel);
const Transactions = mongoose.model("transactions", transactionModel);

exports.default = Transactions;
module.export = { Categories, Transactions };
