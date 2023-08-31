import { useContext, useEffect, useState } from "react";
import { getAllProducts, getProductsByCategory } from "../../services";
import { Button, Card, Image, List, Rate, Tabs, message } from "antd";
import Meta from "antd/es/card/Meta";

import { Typography, Badge } from "antd";
import { AppContext } from "../../context";
import { addCartItem } from "../../utils";

const AddToCardButton = ({ item }) => {
  const [isLoading, setIsLoading] = useState();

  const { cartItems, setCartItems } = useContext(AppContext);

  const onClick = () => {
    setIsLoading(true);
    message.success(`${item.title} has been added to card 👌`);
    let newCartItems = addCartItem(cartItems, item);
    setCartItems(newCartItems);
    console.log(
      "🚀 ~ file: index.js:24 ~ CartHolder ~ cartItems:",
      newCartItems
    );

    setTimeout(() => {
      setIsLoading(false);
    }, 500);
  };

  return (
    <Button type="link" onClick={onClick} loading={isLoading}>
      Add to card
    </Button>
  );
};

const ListProducts = ({ products }) => {
  const [productsData, setproductsData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setproductsData(products);
      setLoading(false);
      setCurrentPage(1);
    }, 1000);
  }, [products]);

  return (
    <List
      grid={{
        column: 3,
        xs: 1,
        sm: 2,
        md: 3,
        lg: 3,
        xl: 3,
        xxl: 4,
      }}
      pagination={{
        hideOnSinglePage: true,
        position: "bottom",
        align: "center",
        defaultPageSize: 12,
        current: currentPage,
        onChange: (page, pageSize) => {
          if (page !== currentPage) setCurrentPage(page);
        },
      }}
      loading={loading}
      dataSource={productsData}
      renderItem={(product, index) => (
        <div className="itemCard">
          <Badge.Ribbon
            text={`${parseFloat(product.discountPercentage).toFixed()}% OFF`}
            color="volcano"
            placement="start"
          >
            <Card
              hoverable
              cover={
                <Image
                  alt={product.title}
                  className="itemCardImage"
                  src={`${product.thumbnail}`}
                />
              }
              actions={[
                <div className="itemRating">
                  <Rate value={product.rating} allowHalf disabled />
                </div>,
                <div>
                  <AddToCardButton item={product} />
                </div>,
              ]}
            >
              <Meta
                title={
                  <>
                    <Typography.Paragraph>
                      <Typography.Text>{product.title}</Typography.Text>
                    </Typography.Paragraph>
                    <Typography.Paragraph>
                      Price: $
                      {parseFloat(
                        (product.price * (100 - product.discountPercentage)) /
                          100
                      ).toFixed(0)}{" "}
                      <Typography.Text delete type="danger">
                        {" "}
                        ${product.price}
                      </Typography.Text>
                    </Typography.Paragraph>
                  </>
                }
                description={
                  <Typography.Paragraph
                    ellipsis={{ rows: 2, expandable: false }}
                  >
                    {product.description}
                  </Typography.Paragraph>
                }
              />
            </Card>
          </Badge.Ribbon>
        </div>
      )}
    />
  );
};

function Products({ category }) {
  console.log("🚀 ~ file: index.js:33 ~ Products ~ category:", category);
  const [products, setProducts] = useState([]);

  useEffect(() => {
    if (!!category) {
      getProductsByCategory(category).then((resp) => {
        console.log(
          "🚀 ~ file: index.js:38 ~ getProductsByCategory ~ resp:",
          resp.products
        );
        setProducts(resp.products);
      });
    } else {
      getAllProducts().then((resp) => {
        console.log(
          "🚀 ~ file: index.js:8 ~ getAllProducts ~ resp:",
          resp.products
        );
        setProducts(resp.products);
      });
    }
  }, [category]);

  const sortProductsBy = (sortedBy) => {
    const sortedArr = [...products].sort((a, b) => {
      if (sortedBy === "az")
        return a.title > b.title ? 1 : a.title === b.title ? 0 : -1;
      else if (sortedBy === "za")
        return a.title > b.title ? -1 : a.title === b.title ? 0 : 1;
      else if (sortedBy === "lh")
        return a.price > b.price ? 1 : a.price === b.price ? 0 : -1;
      else if (sortedBy === "hl")
        return a.price > b.price ? -1 : a.price === b.price ? 0 : 1;
      else return a.title > b.title ? 1 : a.title === b.title ? 0 : -1;
    });
    setProducts(sortedArr);
  };

  const onChange = (key) => {
    console.log(key);
    sortProductsBy(key);
  };

  const sortBy = [
    {
      key: "az",
      label: "Alphabet A-Z",
    },
    {
      key: "za",
      label: "Alphabet Z-A",
    },
    {
      key: "lh",
      label: "Price Low To High",
    },
    {
      key: "hl",
      label: "Price High To Low",
    },
  ];

  return (
    <>
      <Tabs
        defaultActiveKey="az"
        items={sortBy}
        onChange={onChange}
        centered={true}
      />
      <ListProducts products={products} />
    </>
  );
}

export default Products;
