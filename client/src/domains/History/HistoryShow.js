import React from "react";
import { TransactionSimpleView } from "../../domains";
import apiSlice from "../../store/apiSlice";
const HistoryShow = () => {
  const userId = localStorage.getItem("userId");

  const { data } = apiSlice.useGetStatsQuery();
  const userRelatedData = data?.filter((item) => item?.userId === userId);
  console.log("userRelatedData", userRelatedData);
  return (
    <div className="p-12">
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
