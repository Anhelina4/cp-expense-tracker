import React from "react";
import { TransactionSimpleView } from "../../domains";
import { Typography } from "antd";
import apiSlice from "../../store/apiSlice";

const HistoryShow = () => {
  const userId = localStorage.getItem("userId");

  const { data } = apiSlice.useGetStatsQuery();
  const userRelatedData = data?.filter((item) => item?.userId === userId);
  console.log("userRelatedData", userRelatedData);
  return (
    <div className="p-12">
      <Typography.Title>History</Typography.Title>
      <Typography.Title level={5} type="secondary">
        History is a list of all your transaction for the whole period of using
        expense-tracker
      </Typography.Title>
      {userRelatedData?.map((item) => {
        return (
          <div className="mb-2">
            <TransactionSimpleView transaction={item} />
          </div>
        );
      })}
    </div>
  );
};

export default HistoryShow;
