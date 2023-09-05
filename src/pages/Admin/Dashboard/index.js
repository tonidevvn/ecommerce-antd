import {
  DollarCircleOutlined,
  ShoppingCartOutlined,
  ShoppingOutlined,
  UserOutlined,
} from "@ant-design/icons";
import { Avatar, Card, Space, Statistic, Typography } from "antd";
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
import { useContext, useEffect, useState } from "react";
import { getAllCarts, getAllProducts, getAllUsers } from "../../../services";
import { AppContext } from "../../../context";

function DashboardCard({ icon, title, value, currency }) {
  return (
    <Card>
      <Space direction="horizontal" size={"large"}>
        {icon}
        <Statistic
          title={title}
          value={value}
          style={{ textAlign: "center" }}
          prefix={currency}
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
  const { user } = useContext(AppContext);
  const [orders, setOrders] = useState(0);
  const [inventory, setInventory] = useState(0);
  const [customers, setCustomers] = useState(0);
  const [revenue, setRevenue] = useState(0);

  useEffect(() => {
    getAllCarts().then((res) => {
      const totalQuantity = res.carts.reduce((prev, curr) => {
        return prev + curr.totalQuantity;
      }, 0);
      const discountedTotal = res.carts.reduce((prev, curr) => {
        return prev + curr.discountedTotal;
      }, 0);

      setOrders(totalQuantity);
      setRevenue(discountedTotal);
    });

    getAllProducts().then((res) => {
      const totalStock = res.products.reduce((prev, curr) => {
        return prev + curr.stock;
      }, 0);

      setInventory(totalStock);
    });

    getAllUsers().then((res) => {
      setCustomers(res.total || 0);
    });
  }, []);

  return (
    <>
      <Typography.Title level={2}>
        <Avatar src={user.image} />
        Halo {user.firstName}
      </Typography.Title>
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
          value={orders}
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
          value={inventory}
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
          value={customers}
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
          value={revenue}
          currency={"$"}
        />
      </Space>
      <RecentOrders />
      <DashboardChart />
    </>
  );
}

export default Dashboard;
