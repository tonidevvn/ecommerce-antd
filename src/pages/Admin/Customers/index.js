import { Avatar, Table, Typography } from "antd";
import React, { useEffect, useState } from "react";
import { getAllUsers } from "../../../services";

function CustomersTable() {
  const [loading, setLoading] = useState(false);
  const [dataSource, setDataSource] = useState([]);
  useEffect(() => {
    setLoading(true);
    getAllUsers().then((resp) => {
      setDataSource(resp.users);
      setTimeout(() => {
        setLoading(false);
      }, 500);
    });
  }, []);

  const columns = [
    {
      title: "",
      dataIndex: "image",
      key: "image",
      render: (image) => <Avatar src={image} />,
    },
    {
      title: "First Name",
      dataIndex: "firstName",
      key: "firstName",
    },
    {
      title: "Last Name",
      dataIndex: "lastName",
      key: "lastName",
    },
    {
      title: "Age",
      dataIndex: "age",
      key: "age",
    },
    {
      title: "Gender",
      dataIndex: "gender",
      key: "gender",
    },
    {
      title: "Email",
      dataIndex: "email",
      key: "email",
    },
    {
      title: "Address",
      dataIndex: "address",
      key: "address",
      render: (address) => address.city,
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
function Customers() {
  return (
    <>
      <Typography.Title level={3}>Customers</Typography.Title>
      <CustomersTable />
    </>
  );
}

export default Customers;
