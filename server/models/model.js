// specify structure to mongoDB documents(schema of documents)

// mongoose - is a lib for OOP JS, which connects MongoDB with JS execution environment - Node.js
const mongoose = require("mongoose");
const jwt = require("jsonwebtoken");
const Joi = require("joi");
const passwordComplexity = require("joi-password-complexity");

// categories = >filed=>['type', 'color']
const categoryModel = new mongoose.Schema({
  type: { type: String, defaultValue: "Investment" },
  color: { type: String, defaultValue: "var(--color-yellow)" },
});

// transactions = > field =>['name', 'type', 'amount', 'date']
const transactionModel = new mongoose.Schema({
  name: { type: String, defaultValue: "Anonymous" },
  type: { type: String, defaultValue: "Investment" },
  amount: { type: Number },
  date: { type: Date, defaultValue: Date.now() },
  userId: { type: String },
});

const userSchema = new mongoose.Schema({
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  email: { type: String, required: true },
  password: { type: String, required: true },
});

userSchema.methods.generateAuthToken = function () {
  const token = jwt.sign({ _id: this._id }, process.env.JWT_PRIVATE_KEY, {
    expiresIn: "7d",
  });
  return token;
};

const User = mongoose.model("user", userSchema);
const validate = (data) => {
  const schema = Joi.object({
    firstName: Joi.string().required().label("First Name"),
    lastName: Joi.string().required().label("Last Name"),
    email: Joi.string().email().required().label("Email"),
    password: passwordComplexity().required().label("Password"),
  });

  return schema.validate(data);
};
// add these models to mongoDB
const Categories = mongoose.model("categories", categoryModel);
const Transactions = mongoose.model("transactions", transactionModel);

exports.default = Transactions;
module.exports = { Categories, Transactions, User, validate };
