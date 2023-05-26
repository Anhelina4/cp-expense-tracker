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

export default Transaction;
