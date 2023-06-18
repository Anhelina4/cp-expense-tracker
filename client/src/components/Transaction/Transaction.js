import { Icon } from "@qonsoll/icons";
import { useNavigate } from "react-router-dom";
const Transaction = (props) => {
  const { category, handleDelete } = props;
  const navigate = useNavigate();

  const navigateToTransaction = () => navigate(`/transaction/${category?._id}`);

  return category ? (
    <div
      className="item flex justify-center align-center bg-gray-50 p-2 rounded-r shadow-lg"
      style={{
        borderRight: `8px solid ${category?.color || "var(--color-gray)"}`,
      }}>
      <button onClick={handleDelete}>
        <box-icon data-id={category?._id || ""} name="trash" size="16px" />
      </button>

      <Icon
        name="EyeOutlined"
        className="align-center"
        ml={2}
        mt="1px"
        onClick={navigateToTransaction}
      />
      <span className="block w-full">{category?.name || ""}</span>
    </div>
  ) : null;
};

export default Transaction;
