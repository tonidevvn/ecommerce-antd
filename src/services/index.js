import axios from "axios";

export const getAllProducts = async () => {
  try {
    const resp = await axios.get("https://dummyjson.com/products");
    console.log("🚀 ~ file: index.js:6 ~ getAllProducts ~ resp:", resp.data);
    return resp.data;
  } catch (error) {
    console.log("🚀 ~ file: index.js:8 ~ getAllProducts ~ error:", error);
    return [];
  }
};

export const getAllProductsCategories = async () => {
  try {
    const resp = await axios.get("https://dummyjson.com/products/categories");
    console.log(
      "🚀 ~ file: index.js:18 ~ getAllProductsCategories ~ resp:",
      resp.data
    );
    return resp.data;
  } catch (error) {
    console.log(
      "🚀 ~ file: index.js:8 ~ getAllProductsCategories ~ error:",
      error
    );
    return [];
  }
};

export const getProductsByCategory = async (category) => {
  try {
    const resp = await axios.get(
      `https://dummyjson.com/products/category/${category}`
    );
    console.log(
      "🚀 ~ file: index.js:18 ~ getProductsByCategory ~ resp:",
      resp.data
    );
    return resp.data;
  } catch (error) {
    console.log("🚀 ~ file: index.js:8 ~ getAllProducts ~ error:", error);
    return [];
  }
};

export const addToCard = async (id) => {
  try {
    const resp = await axios.post("https://dummyjson.com/carts/add", {
      userId: "1",
      products: [
        {
          id: id,
          quantity: 1,
        },
      ],
    });
    console.log("🚀 ~ file: index.js:25 ~ addToCard ~ resp:", resp.data);
    return resp.data;
  } catch (error) {
    console.log("🚀 ~ file: index.js:28 ~ addToCard ~ error:", error);
    return [];
  }
};

export const getSingleCard = async (id = 1) => {
  try {
    const resp = await axios.get(`https://dummyjson.com/carts/${id}`);
    console.log("🚀 ~ file: index.js:53 ~ getSingleCard ~ resp:", resp.data);
    return resp.data;
  } catch (error) {
    console.log("🚀 ~ file: index.js:55 ~ getSingleCard ~ error:", error);
    return [];
  }
};
