import { History } from "../../components";
import { Icon } from "@qonsoll/icons";
import React from "react";
import { Typography } from "antd";
import { default as api } from "../../store/apiSlice";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";

const Form = () => {
  const navigate = useNavigate();
  const { register, handleSubmit, resetField } = useForm();
  const [addTransaction] = api.useAddTransactionMutation();

  const userId = localStorage.getItem("userId");

  const onSubmit = async (values) => {
    if (!values) return {};
    const preparedValues = {
      ...values,
      userId: userId,
    };
    console.log("preparedValues", preparedValues);
    await addTransaction(preparedValues).unwrap();
    resetField("name");
    resetField("amount");
  };

  const navigateToCategoriesAll = () => navigate("/categories");

  return (
    <div className="form w-96 ">
      {/* all categories */}
      <div className="mb-6 flex justify-center items-center">
        <Typography.Title
          level={3}
          style={{ marginBottom: 0, marginRight: "8px" }}>
          All categories
        </Typography.Title>
        <Icon name="ArrowLongRightFilled" onClick={navigateToCategoriesAll} />
      </div>

      {/* form */}
      <form
        className="pr-3"
        id="transaction-form"
        onSubmit={handleSubmit(onSubmit)}>
        {/* title */}
        <h1 className="font-bold pb-4 text-xl">Transaction</h1>
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
            <button className="border py-2 w-full form-input hover:bg-blue-50 focus:bg-blue-100">
              Make transaction
            </button>
          </div>
        </div>
      </form>
      <History />
    </div>
  );
};

export default Form;
