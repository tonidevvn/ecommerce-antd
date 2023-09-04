import {
  DollarCircleOutlined,
  ShoppingCartOutlined,
  ShoppingOutlined,
  UserOutlined,
} from "@ant-design/icons";
import { Card, Space, Statistic, Typography } from "antd";
import RecentOrders from "../RecentOrders";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
import { useEffect, useState } from "react";
import { getAllCarts } from "../../../services";

function DashboardCard({ icon, title, value }) {
  return (
    <Card>
      <Space direction="horizontal" size={"large"}>
        {icon}
        <Statistic
          title={title}
          value={value}
          style={{ textAlign: "center" }}
        ></Statistic>
      </Space>
    </Card>
  );
}

function DashboardChart() {
  const [dataChart, setDataChart] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const resp = await getAllCarts();
      console.log("🚀 ~ file: index.js:43 ~ fetchData ~ carts:", resp);

      const dataChart = resp.carts.map((cart) => {
        return {
          name: `U-${cart.userId}`,
          price: cart.discountedTotal,
          qty: cart.totalQuantity,
        };
      });
      setDataChart(dataChart);
      console.log("🚀 ~ file: index.js:53 ~ fetchData ~ dataChart:", dataChart);
    }
    fetchData();
  }, []);

  return (
    <div className="dashboardChart">
      <ResponsiveContainer width="100%" height="100%">
        <BarChart
          width={500}
          height={300}
          data={dataChart}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey="price" fill="#8884d8" />
          <Bar dataKey="qty" fill="#82ca9d" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}

function Dashboard() {
  return (
    <>
      <Typography.Title level={3}>Dashboard</Typography.Title>
      <Space direction="horizontal" size={"middle"} wrap={true}>
        <DashboardCard
          icon={
            <ShoppingCartOutlined
              style={{
                cursor: "pointer",
                color: "green",
                fontSize: "26px",
                backgroundColor: "rgba(0,255,0,0.15)",
                borderRadius: "25%",
                padding: "25%",
                margin: "12px",
              }}
            />
          }
          title={"Orders"}
          value={1234}
        />
        <DashboardCard
          icon={
            <ShoppingOutlined
              style={{
                cursor: "pointer",
                color: "purple",
                fontSize: "26px",
                backgroundColor: "rgba(0,255,255,0.15)",
                borderRadius: "25%",
                padding: "25%",
                margin: "12px",
              }}
            />
          }
          title={"Inventory"}
          value={1234}
        />
        <DashboardCard
          icon={
            <UserOutlined
              style={{
                cursor: "pointer",
                color: "navy",
                fontSize: "26px",
                backgroundColor: "rgba(0,0,255,0.15)",
                borderRadius: "25%",
                padding: "25%",
                margin: "12px",
              }}
            />
          }
          title={"Customers"}
          value={1234}
        />
        <DashboardCard
          icon={
            <DollarCircleOutlined
              style={{
                cursor: "pointer",
                color: "red",
                fontSize: "26px",
                backgroundColor: "rgba(255,0,0,0.15)",
                borderRadius: "25%",
                padding: "25%",
                margin: "12px",
              }}
            />
          }
          title={"Revenue"}
          value={1234}
        />
      </Space>
      <RecentOrders />
      <DashboardChart />
    </>
  );
}

export default Dashboard;
