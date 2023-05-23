import "boxicons";

import React from "react";
import apiSlice from "../../store/apiSlice";

const List = () => {
  const { data, isFetching, isSuccess, isError } = apiSlice.useGetLabelsQuery();
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
      {result}
    </div>
  );
};

const Transaction = (props) => {
  const { category, handleDelete } = props;

  return category ? (
    <div
      className="item flex justify-center bg-gray-50 py-2 rounded-r"
      style={{
        borderRight: `8px solid ${category?.color || "var(--color-gray)"}`,
      }}>
      <button onClick={handleDelete}>
        <box-icon data-id={category?._id || ""} name="trash" size="16px" />
      </button>
      <span className="block w-full">{category?.name || ""}</span>
    </div>
  ) : null;
};
export default List;
