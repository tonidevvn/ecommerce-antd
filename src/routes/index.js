import { createBrowserRouter, RouterProvider } from "react-router-dom";
import PageContent from "../components/PageContent";
import DefaultLayout from "../layouts/DefaultLayout";
import AuthLayout from "../layouts/AuthLayout";
import About from "../pages/About";
import Category from "../pages/Category";
import ErrorPage from "../pages/Error";
import Home from "../pages/Home";
import Cart from "../pages/Cart";
import ThankYou from "../pages/Checkout";
import Dashboard from "../pages/Admin/Dashboard";
import Inventory from "../pages/Admin/Inventory";
import Orders from "../pages/Admin/Orders";
import Customers from "../pages/Admin/Customers";

function AppRoutes() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <DefaultLayout />,
      errorElement: (
        <DefaultLayout>
          <ErrorPage />
        </DefaultLayout>
      ),
      children: [
        {
          path: "products/categories/:categoryId",
          element: (
            <PageContent>
              <Category />
            </PageContent>
          ),
        },
        {
          path: "about",
          element: (
            <PageContent>
              <About />
            </PageContent>
          ),
        },
        {
          path: "cart",
          element: (
            <PageContent>
              <Cart />
            </PageContent>
          ),
        },
        {
          path: "thank-you",
          element: (
            <PageContent>
              <ThankYou />
            </PageContent>
          ),
        },
        {
          path: "",
          element: (
            <PageContent hasSider>
              <Home />
            </PageContent>
          ),
        },
      ],
    },
    {
      path: "/admin",
      element: <AuthLayout />,
      children: [
        {
          path: "dash-board",
          element: (
            <PageContent>
              <Dashboard />
            </PageContent>
          ),
        },
        {
          path: "inventory",
          element: (
            <PageContent>
              <Inventory />
            </PageContent>
          ),
        },
        {
          path: "customers",
          element: (
            <PageContent>
              <Customers />
            </PageContent>
          ),
        },
        {
          path: "orders",
          element: (
            <PageContent>
              <Orders />
            </PageContent>
          ),
        },
        {
          path: "",
          element: (
            <PageContent>
              <Dashboard />
            </PageContent>
          ),
        },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
}

export default AppRoutes;
