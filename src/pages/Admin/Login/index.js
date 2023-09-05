import React, { useContext, useEffect, useState } from "react";
import { LockOutlined, UserOutlined } from "@ant-design/icons";
import { Button, Checkbox, Form, Input, message } from "antd";
import App from "../../../App";
import "../../../assets/styles/login.scss";
import { getAuth } from "../../../services";
import { AppContext } from "../../../context";
import { Link, useNavigate } from "react-router-dom";

function Login() {
  const { user, setUser } = useContext(AppContext);
  const [loading, setLoading] = useState(false);
  const navigator = useNavigate();

  useEffect(() => {
    const userInfo = localStorage.getItem("user");
    if (!!userInfo) {
      setUser(JSON.parse(userInfo));
    }
  }, []);

  useEffect(() => {
    if (!!user) {
      localStorage.setItem("user", JSON.stringify(user));
      setTimeout(() => {
        setLoading(false);
        navigator("/admin/dash-board");
      }, 500);
    } else localStorage.setItem("user", "");
  }, [user]);

  const onFinish = (values) => {
    setLoading(true);
    console.log("Received values of form: ", values);
    getAuth(values)
      .then((res) => {
        message.success(`Hi ${values.username}. Welcome back.`);
        setUser(res);
      })
      .catch((err) => message.error(err.message));
  };

  return (
    <App>
      <Form
        name="normal_login"
        className="login-form"
        initialValues={{
          remember: true,
          username: "kminchelle",
          password: "0lelplR",
        }}
        onFinish={onFinish}
      >
        <Form.Item
          name="username"
          rules={[
            {
              required: true,
              message: "Please input your Username!",
            },
          ]}
        >
          <Input
            prefix={<UserOutlined className="site-form-item-icon" />}
            placeholder="Username"
          />
        </Form.Item>
        <Form.Item
          name="password"
          rules={[
            {
              required: true,
              message: "Please input your Password!",
            },
          ]}
        >
          <Input
            prefix={<LockOutlined className="site-form-item-icon" />}
            type="password"
            placeholder="Password"
          />
        </Form.Item>
        <Form.Item>
          <Form.Item name="remember" valuePropName="checked" noStyle>
            <Checkbox>Remember me</Checkbox>
          </Form.Item>

          <a className="login-form-forgot" href="">
            Forgot password
          </a>
        </Form.Item>

        <Form.Item>
          <Button
            type="primary"
            htmlType="submit"
            className="login-form-button"
            loading={loading}
          >
            Log in
          </Button>
          Or <a href="#">register now!</a> <br />
          Or <Link to="/">back to home page</Link>
        </Form.Item>
      </Form>
    </App>
  );
}
export default Login;
