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

export const getSingleProduct = async (id = 1) => {
  try {
    const resp = await axios.get(`https://dummyjson.com/products/${id}`);
    console.log("🚀 ~ file: index.js:6 ~ getSingleProduct ~ resp:", resp.data);
    return resp.data;
  } catch (error) {
    console.log("🚀 ~ file: index.js:8 ~ getSingleProduct ~ error:", error);
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

export const getProductsByKeyword = async (query) => {
  try {
    console.log(
      "🚀 ~ file: index.js:48 ~ getProductsByKeyword ~ query:",
      query
    );
    const resp = await axios.get(
      `https://dummyjson.com/products/search?q=${query}`
    );
    console.log(
      "🚀 ~ file: index.js:18 ~ getProductsByKeyword ~ resp:",
      resp.data
    );
    return resp.data;
  } catch (error) {
    console.log("🚀 ~ file: index.js:8 ~ getProductsByKeyword ~ error:", error);
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

export const getAllCarts = async () => {
  try {
    const resp = await axios.get("https://dummyjson.com/carts");
    console.log("🚀 ~ file: index.js:69 ~ getAllCarts ~ resp:", resp.data);
    return resp.data;
  } catch (error) {
    console.log("🚀 ~ file: index.js:55 ~ getAllCarts ~ error:", error);
    return [];
  }
};

export const getComments = async () => {
  try {
    const resp = await axios.get("https://dummyjson.com/comments");
    console.log("🚀 ~ file: index.js:80 ~ getComments ~ resp:", resp.data);
    return resp.data;
  } catch (error) {
    console.log("🚀 ~ file: index.js:83 ~ getComments ~ error:", error);
    return [];
  }
};

export const getAllUsers = async () => {
  try {
    const resp = await axios.get("https://dummyjson.com/users");
    console.log("🚀 ~ file: index.js:80 ~ getAllUsers ~ resp:", resp.data);
    return resp.data;
  } catch (error) {
    console.log("🚀 ~ file: index.js:55 ~ getAllUsers ~ error:", error);
    return [];
  }
};

export const getSingleCart = async (id = 1) => {
  try {
    const resp = await axios.get(`https://dummyjson.com/carts/${id}`);
    console.log("🚀 ~ file: index.js:53 ~ getSingleCard ~ resp:", resp.data);
    return resp.data;
  } catch (error) {
    console.log("🚀 ~ file: index.js:55 ~ getSingleCard ~ error:", error);
    return [];
  }
};

export const getAuth = async ({ username, password }) => {
  try {
    const resp = await axios.post("https://dummyjson.com/auth/login", {
      username,
      password,
    });
    console.log("🚀 ~ file: index.js:80 ~ getAuth ~ resp:", resp.data);
    return resp.data;
  } catch (error) {
    console.log("🚀 ~ file: index.js:83 ~ getAuth ~ error:", error);
    throw error;
  }
};
