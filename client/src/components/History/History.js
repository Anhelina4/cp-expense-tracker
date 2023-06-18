import "boxicons";

import { Icon } from "@qonsoll/icons";
import React from "react";
import { Transaction } from "..";
import apiSlice from "../../store/apiSlice";
import { useNavigate } from "react-router-dom";

const History = () => {
  const userId = localStorage.getItem("userId");
  const { data, isFetching, isSuccess, isError } = apiSlice.useGetStatsQuery();
  const userRelatedData = data?.filter((item) => item?.userId === userId);

  const [deleteTransaction] = apiSlice.useDeleteTransactionMutation();

  const handleDelete = (e) => {
    if (!e.target.dataset.id) return 0;
    deleteTransaction({ _id: e.target.dataset.id });
  };
  let result;
  if (isFetching) {
    result = <div>Fetching...</div>;
  } else if (isSuccess) {
    result = userRelatedData?.map((item, index) => (
      <Transaction key={index} category={item} handleDelete={handleDelete} />
    ));
  } else if (isError) {
    result = <div>Error</div>;
  }

  const navigate = useNavigate();
  const navigateToHistoryShow = () => navigate("/history");

  return (
    <div className="flex flex-col py-6 gap-3">
      <div className="flex items-center justify-between px-2">
        <h1 className="py-4 text-empty font-bold text-xl">History</h1>
        <Icon name="ArrowLongRightFilled" onClick={navigateToHistoryShow} />
      </div>
      <div className="h-64 overflow-y-scroll flex flex-col gap-3 pr-3">
        {result}
      </div>
    </div>
  );
};

export default History;
