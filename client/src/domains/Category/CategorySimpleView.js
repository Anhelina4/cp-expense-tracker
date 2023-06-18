import { Card, Col, Divider, Row, Tooltip, Typography } from "antd";

import { Icon } from "@qonsoll/icons";
import { useNavigate } from "react-router-dom";

const CategorySimpleView = ({ category }) => {
  const navigate = useNavigate();
  const navigateToCategoryTransaction = () =>
    navigate(`/categories/${category?._id}`);

  return (
    <Card className="shadow-lg">
      <div className="flex items-center justify-between">
        <div className="flex items-center">
          <div
            style={{
              background: category?.color,
              width: "20px",
              height: "20px",
              borderRadius: "50%",
              marginRight: "8px",
            }}></div>
          <Typography.Title level={3} style={{ margin: 0 }}>
            {category?.type}
          </Typography.Title>
        </div>
        <Tooltip title="See all transaction by its category">
          <Icon name="EyeOutlined" onClick={navigateToCategoryTransaction} />
        </Tooltip>
      </div>

      <Divider />
      <Row className="flex items-center justify-between mb-4">
        <Col>Total sum</Col>
        <Col>{category?.total}</Col>
      </Row>
      <Row className="flex items-center justify-between">
        <Col>Total percentage</Col>
        <Col>{Math.round(category?.percent) || 0}%</Col>
      </Row>
    </Card>
  );
};

export default CategorySimpleView;
