import { Card, Col, Divider, Row, Typography } from "antd";

import { Icon } from "@qonsoll/icons";
import React from "react";
import moment from "moment";
import { useNavigate } from "react-router-dom";

const TransactionSimpleView = ({ transaction }) => {
  const navigate = useNavigate();
  const navigateToTransaction = () =>
    navigate(`/transaction/${transaction?._id}`);

  return (
    <Card className="shadow-lg">
      <div className="flex items-center justify-between">
        <div className="flex items-center">
          <div
            style={{
              background: transaction?.color,
              width: "20px",
              height: "20px",
              borderRadius: "50%",
              marginRight: "8px",
            }}></div>
          <Typography.Title level={3} style={{ margin: 0 }}>
            {transaction?.name}
          </Typography.Title>
        </div>
        <Icon name="EyeOutlined" onClick={navigateToTransaction} />
      </div>

      <Divider />
      <Row className="align-center justify-between mb-2">
        <Col>Transaction category</Col>
        <Col>{transaction?.type}</Col>
      </Row>
      <Row className="align-center justify-between mb-2">
        <Col>Transaction amount</Col>
        <Col>{transaction?.amount}</Col>
      </Row>
      <Row className="align-center justify-between mb-2">
        <Col>Transaction date</Col>
        <Col>{moment(transaction?.date).format("LLL")}</Col>
      </Row>
    </Card>
  );
};

export default TransactionSimpleView;
