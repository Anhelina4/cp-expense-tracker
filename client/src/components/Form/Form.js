import { List } from "../../components";
import React from "react";
import { useForm } from "react-hook-form";

const Form = () => {
  const { register, handleSubmit, resetField } = useForm();

  const onSubmit = (values) => {
    console.log("values", values);
  };

  return (
    <div className="form w-96">
      {/* title */}
      <h1 className="font-bold pb-4 text-xl">Transaction</h1>
      {/* form */}
      <form id="transaction-form" onSubmit={handleSubmit(onSubmit)}>
        <div className="grid gap-4">
          <div className="input-group">
            <input
              // name is a key and value is get from input
              {...register("name")}
              type="text"
              placeholder="Salary, House Rent..."
              className="form-input"></input>
          </div>
          <select className="form-input" {...register("type")}>
            <option value="Savings">Savings</option>
            <option value="Investment">Investment</option>
            <option value="Expense">Expense</option>
          </select>
          <div className="input-group">
            <input
              {...register("amount")}
              type="text"
              placeholder="Amount"
              className="form-input"></input>
          </div>
          <div className="submit-btn">
            <button className="border py-2 text-white bg-indigo-500 w-full form-input hover:bg-indigo-400 focus:bg-indigo-600">
              Make transaction
            </button>
          </div>
        </div>
      </form>
      <List />
    </div>
  );
};

export default Form;
