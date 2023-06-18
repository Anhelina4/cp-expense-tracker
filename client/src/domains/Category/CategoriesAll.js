import { CategorySimpleView } from "../../domains";
import React from "react";
import { Typography } from "antd";
import apiSlice from "../../store/apiSlice";
import { getStatsPercentage } from "../../helpers";

const CategoriesAll = () => {
  const { data, isFetching, isSuccess, isError } = apiSlice.useGetStatsQuery();
  console.log("data", data);
  const categories = getStatsPercentage(data);
  console.log("categories", categories);
  return (
    <div className="p-12">
      <Typography.Title>Categories</Typography.Title>
      <Typography.Title level={5} type="secondary">
        This is a list of categories for your transactions. You are able to look
        through them. If you want to see transactions by a specific category, do
        not hesitate to do that.
      </Typography.Title>

      {categories?.map((item) => (
        <div className="mb-4">
          <CategorySimpleView category={item} />
        </div>
      ))}
    </div>
  );
};

export default CategoriesAll;
