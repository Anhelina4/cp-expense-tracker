import "boxicons";

import React from "react";

const config = [
  { label: "Savings", value: 30, color: "var(--color-blue)" },
  { label: "Investment", value: 60, color: "var(--color-yellow)" },
  { label: "Expense", value: 10, color: "var(--color-pink)" },
];

const List = () => {
  return (
    <div className="flex flex-col py-6 gap-3">
      <h1 className="py-4 text-empty font-bold text-xl">History</h1>
      {config?.map((item) => (
        <Transaction category={item} />
      ))}
    </div>
  );
};

const Transaction = (props) => {
  const { category } = props;

  return category ? (
    <div
      className="item flex justify-center bg-gray-50 py-2 rounded-r"
      style={{
        borderRight: `8px solid ${category?.color || "var(--color-gray)"}`,
      }}>
      <button className="">
        <box-icon name="trash" size="16px"></box-icon>
      </button>
      <span className="block w-full">{category?.label || ""}</span>
    </div>
  ) : null;
};
export default List;
