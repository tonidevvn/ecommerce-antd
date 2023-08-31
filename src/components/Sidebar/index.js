import { Card, Checkbox } from "antd";
import { useEffect, useState } from "react";
import { getAllProductsCategories } from "../../services";
import { makeUpLabel } from "../../utils";
import { FilterOutlined } from "@ant-design/icons";
import "./Sidebar.scss";
import { useNavigate } from "react-router-dom";
import ShoppingImg from "../../assets/images/shopping.svg";

function Sidebar() {
  const [checkedList, setCheckedList] = useState([]);
  const [categories, setCategories] = useState([]);
  const navigator = useNavigate();

  useEffect(() => {
    getAllProductsCategories().then((resp) => {
      console.log(
        "🚀 ~ file: index.js:8 ~ getAllProductsCategories ~ resp:",
        resp
      );
      setCategories([...resp]);
    });
  }, []);

  const onChange = (list) => {
    console.log("🚀 ~ file: index.js:22 ~ onChange ~ list:", list);
    setCheckedList(list);
    navigator(`/products/categories/${list[0]}`);
  };

  return (
    <>
      <Card
        title={
          <div className="cardHeader">
            <FilterOutlined /> Products Categories
          </div>
        }
      >
        <Checkbox.Group
          options={categories.map((cat) => {
            return { label: makeUpLabel(cat), value: cat };
          })}
          value={checkedList}
          onChange={onChange}
          className="categoriesGrp"
        />
      </Card>

      <img
        src={ShoppingImg}
        alt="Shopping with us"
        style={{ width: "350px", maxWidth: "80%" }}
      />
    </>
  );
}

export default Sidebar;
