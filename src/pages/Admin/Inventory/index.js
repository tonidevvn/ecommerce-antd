import { Avatar, Rate, Table, Typography } from "antd";
import React, { useEffect, useState } from "react";
import { getAllProducts } from "../../../services";
import { makeUpLabel } from "../../../utils";

function InventoryTable() {
  const [loading, setLoading] = useState(false);
  const [dataSource, setDataSource] = useState([]);
  useEffect(() => {
    setLoading(true);
    getAllProducts().then((resp) => {
      setDataSource(resp.products);
      setTimeout(() => {
        setLoading(false);
      }, 500);
    });
  }, []);

  const columns = [
    {
      title: "",
      dataIndex: "thumbnail",
      key: "thumbnail",
      render: (thumbnail) => <Avatar src={thumbnail} />,
    },
    {
      title: "Id",
      dataIndex: "id",
      key: "id",
    },
    {
      title: "Category",
      dataIndex: "category",
      key: "category",
      render: (value) => makeUpLabel(value),
    },
    {
      title: "Title",
      dataIndex: "title",
      key: "title",
    },
    {
      title: "Stock",
      dataIndex: "stock",
      key: "stock",
      sorter: (a, b) => a.stock - b.stock,
    },
    {
      title: "Brand",
      dataIndex: "brand",
      key: "brand",
    },
    {
      title: "Price",
      dataIndex: "price",
      key: "price",
      render: (price) => `$${price}`,
      sorter: (a, b) => a.price - b.price,
    },
    {
      title: "Rating",
      dataIndex: "rating",
      key: "rating",
      render: (rating) => (
        <Rate
          value={rating}
          allowHalf={true}
          disabled
          style={{ fontSize: "12px" }}
        />
      ),
    },
  ];

  return (
    <>
      <Table
        loading={loading}
        dataSource={dataSource}
        columns={columns}
        rowKey={(data) => data.id}
        pagination={true}
        style={{ width: "100%", overflow: "auto" }}
      />
    </>
  );
}
function Inventory() {
  return (
    <>
      <Typography.Title level={3}>Inventory</Typography.Title>
      <InventoryTable />
    </>
  );
}

export default Inventory;
