import React from "react";
import apiSlice from "../../store/apiSlice";

const config = [
  { label: "Savings", value: 30, color: "var(--color-blue)" },
  { label: "Investment", value: 60, color: "var(--color-yellow)" },
  { label: "Expense", value: 10, color: "var(--color-pink)" },
];

export const Labels = () => {
  // we specified getCategories fn, but RTK query adds 'use' and 'query' to the name of the fn
  const { data, isFetching, isSuccess } = apiSlice.useGetCategoriesQuery();

  return config?.map((item) => <Label data={item} />);
};

export const Label = (props) => {
  const { data } = props;

  return data ? (
    <div className="labels flex justify-between mb-3">
      <div className="flex">
        <div
          className="w-2 h-2 rounded py-3  mr-1"
          style={{ background: data?.color }}></div>
        <h3>{data?.label || ""}</h3>
      </div>
      <div className="font-bold">{data?.value || 0}%</div>
    </div>
  ) : (
    <></>
  );
};
