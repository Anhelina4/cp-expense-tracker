import { TransactionSimpleView } from "../../domains";
import { Typography } from "antd";
import apiSlice from "../../store/apiSlice";
import { getStatsPercentage } from "../../helpers";
import { useParams } from "react-router-dom";
const CategoryShow = () => {
  const userId = localStorage.getItem("userId");
  const { categoryId } = useParams();

  const { data, isFetching, isSuccess, isError } = apiSlice.useGetStatsQuery();
  const currCategory = data?.filter((item) => item?._id === categoryId)?.[0];
  console.log("currCategory", currCategory);

  const { data: transactionData } = apiSlice.useGetStatsQuery();
  const userTransactions = transactionData?.filter(
    (item) => item?.userId === userId
  );
  console.log("userTransactions", userTransactions);

  const transactionsByCategory = userTransactions?.filter(
    (item) => item?.type === currCategory?.type
  );
  console.log("transactionsByCategory", transactionsByCategory);
  return (
    <div className="p-12">
      <Typography.Title>Category {currCategory?.type}</Typography.Title>
      <Typography.Title level={5} type="secondary">
        This is a list of transactions by current category.
      </Typography.Title>

      {transactionsByCategory?.map((item) => (
        <div className="mb-4">
          <TransactionSimpleView transaction={item} />
        </div>
      ))}
    </div>
  );
};

export default CategoryShow;
