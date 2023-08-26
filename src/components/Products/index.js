import { useEffect, useState } from "react";
import { addToCard, getAllProducts, getProductsByCategory } from "../../API";
import { Button, Card, Image, List, Rate, message } from "antd";
import Meta from "antd/es/card/Meta";

import { Typography, Badge } from "antd";

const AddToCardButton = ({ item }) => {
  const [isLoading, setIsLoading] = useState();

  const onClick = () => {
    async function fetchData() {
      const data = await addToCard(item.id);
      console.log("🚀 ~ file: index.js:13 ~ fetchData ~ data:", data);
      message.success(`${item.title} has been added to card 👌`);
      setIsLoading(false);
      return data.data;
    }
    setIsLoading(true);
    setTimeout(() => {
      fetchData();
    }, 1000);
  };

  return (
    <Button type="link" onClick={onClick} loading={isLoading}>
      Add to card
    </Button>
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

  return (
    <>
      <List
        grid={{ column: 3 }}
        pagination={{
          position: "bottom",
          align: "center",
        }}
        dataSource={products}
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
    </>
  );
}

export default Products;
