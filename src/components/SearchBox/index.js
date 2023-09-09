import { SearchOutlined } from "@ant-design/icons";
import { Badge, Button, Form, Input, Popover } from "antd";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function SearchBox() {
  const [form] = Form.useForm();
  const [popovervisible, setPopovervisible] = useState(false);
  const navigator = useNavigate();

  const handlePopoverChange = (newOpen) => {
    setPopovervisible(newOpen);
  };

  const onFinish = ({ query }) => {
    console.log("Success:", query);
    setPopovervisible(false);
    navigator(`/products/search?q=${query}`);
  };

  const SearchBoxForm = () => {
    return (
      <Form
        layout="inline"
        form={form}
        onFinish={onFinish}
        style={{
          width: "340px",
          maxWidth: "68vw",
        }}
      >
        <Form.Item name="query">
          <Input
            placeholder="iphone, watch, shoes ..."
            style={{ minWidth: "220px", maxWidth: "45%" }}
          />
        </Form.Item>
        <Form.Item>
          <Button type="primary" htmlType="submit">
            Search
          </Button>
        </Form.Item>
      </Form>
    );
  };

  return (
    <Popover
      placement="bottomRight"
      title={"Searching products"}
      content={<SearchBoxForm />}
      trigger="click"
      open={popovervisible}
      onOpenChange={handlePopoverChange}
      style={{
        overflow: "hidden",
      }}
    >
      <Badge dot>
        <SearchOutlined className="searchIcon" />
      </Badge>
    </Popover>
  );
}

export default SearchBox;
