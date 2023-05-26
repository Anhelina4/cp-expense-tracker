import "boxicons";

import React from "react";
import { Transaction } from "..";
import apiSlice from "../../store/apiSlice";

const History = () => {
  const { data, isFetching, isSuccess, isError } = apiSlice.useGetStatsQuery();
  const [deleteTransaction] = apiSlice.useDeleteTransactionMutation();
  const handleDelete = (e) => {
    if (!e.target.dataset.id) return 0;
    deleteTransaction({ _id: e.target.dataset.id });
  };
  let result;
  if (isFetching) {
    result = <div>Fetching...</div>;
  } else if (isSuccess) {
    result = data?.map((item, index) => (
      <Transaction key={index} category={item} handleDelete={handleDelete} />
    ));
  } else if (isError) {
    result = <div>Error</div>;
  }
  return (
    <div className="flex flex-col py-6 gap-3">
      <h1 className="py-4 text-empty font-bold text-xl">History</h1>
      <div className="h-96		overflow-y-scroll flex flex-col gap-3 pr-3">
        {result}
      </div>
    </div>
  );
};

export default History;
