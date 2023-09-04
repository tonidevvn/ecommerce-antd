import { Table, Typography } from "antd";
import React, { useEffect, useState } from "react";
import { getAllCarts } from "../../../services";

function RecentOrders() {
  const [dataSource, setDataSource] = useState([]);
  useEffect(() => {
    getAllCarts().then((resp) => setDataSource(resp.carts[0].products));
  }, []);

  const columns = [
    {
      title: "Id",
      dataIndex: "id",
      key: "id",
    },
    {
      title: "Title",
      dataIndex: "title",
      key: "title",
    },
    {
      title: "Quantity",
      dataIndex: "quantity",
      key: "quantity",
    },
    {
      title: "Price total",
      dataIndex: "total",
      key: "total",
      render: (price) => `$${price}`,
    },
    {
      title: "Discounted Price",
      dataIndex: "discountedPrice",
      key: "discountedPrice",
      render: (price) => `$${price}`,
    },
  ];

  return (
    <>
      <Typography.Title level={4}>Recent Orders</Typography.Title>
      <Table
        dataSource={dataSource}
        columns={columns}
        rowKey={(data) => data.id}
        pagination={false}
        style={{ width: "100%", overflowX: "auto" }}
      />
    </>
  );
}

export default RecentOrders;
