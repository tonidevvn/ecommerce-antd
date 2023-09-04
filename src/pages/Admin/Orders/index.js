import { Table, Typography } from "antd";
import React, { useEffect, useState } from "react";
import { getAllCarts } from "../../../services";

function OrdersTable() {
  const [loading, setLoading] = useState(false);
  const [dataSource, setDataSource] = useState([]);
  useEffect(() => {
    setLoading(true);
    getAllCarts().then((resp) => {
      setDataSource(resp.carts);
      setTimeout(() => {
        setLoading(false);
      }, 500);
    });
  }, []);

  const columns = [
    {
      title: "Id",
      dataIndex: "id",
      key: "id",
    },
    {
      title: "Products",
      dataIndex: "products",
      key: "products",
      render: (products) => {
        return (
          <ul>
            {products.map((product, index) => (
              <li key={index}>
                {product.title} x {product.quantity}
              </li>
            ))}
          </ul>
        );
      },
    },
    {
      title: "Total Products",
      dataIndex: "totalProducts",
      key: "totalProducts",
      sorter: (a, b) => a.totalProducts - b.totalProducts,
    },
    {
      title: "Total Quantity",
      dataIndex: "totalQuantity",
      key: "totalQuantity",
      sorter: (a, b) => a.totalQuantity - b.totalQuantity,
    },
    {
      title: "Total",
      dataIndex: "total",
      key: "total",
      render: (total) => `$${total}`,
      sorter: (a, b) => a.total - b.total,
    },
    {
      title: "Discounted Total",
      dataIndex: "discountedTotal",
      key: "discountedTotal",
      render: (discountedTotal) => `$${discountedTotal}`,
      sorter: (a, b) => a.discountedTotal - b.discountedTotal,
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
function Orders() {
  return (
    <>
      <Typography.Title level={3}>Orders</Typography.Title>
      <OrdersTable />
    </>
  );
}

export default Orders;
