import React from "react";
import { TransactionSimpleView } from "../../domains";
import { Typography } from "antd";
import apiSlice from "../../store/apiSlice";
import { useParams } from "react-router-dom";
const TransactionShow = () => {
  const { transactionId } = useParams();
  const { data } = apiSlice.useGetStatsQuery();
  const transaction = data?.filter((item) => item?._id === transactionId)?.[0];

  return (
    <div className="p-12">
      <Typography.Title>Transaction</Typography.Title>
      <Typography.Title level={5} type="secondary">
        This is one of your transactions. Be free to look through its data or
        delete it from transaction history.
      </Typography.Title>
      {transaction ? (
        <TransactionSimpleView transaction={transaction} />
      ) : (
        <Typography.Title level={4}>No transaction is found</Typography.Title>
      )}
    </div>
  );
};

export default TransactionShow;
