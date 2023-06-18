import React from "react";
import { TransactionSimpleView } from "../../domains";
import apiSlice from "../../store/apiSlice";
import { useParams } from "react-router-dom";

const TransactionShow = () => {
  const { transactionId } = useParams();
  const { data } = apiSlice.useGetStatsQuery();
  const transaction = data?.filter((item) => item?._id === transactionId)?.[0];

  return (
    <div className="p-12">
      <TransactionSimpleView transaction={transaction} />
    </div>
  );
};

export default TransactionShow;
