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
import Login from "../pages/Admin/Login";
import Search from "../pages/Search";
import Product from "../pages/Product";

function AppRoutes() {
  const router = createBrowserRouter([
    {
      path: "/",
      errorElement: (
        <DefaultLayout>
          <ErrorPage />
        </DefaultLayout>
      ),
      children: [
        {
          path: "products/:productId",
          element: (
            <DefaultLayout>
              <PageContent>
                <Product />
              </PageContent>
            </DefaultLayout>
          ),
        },
        {
          path: "products/categories/:categoryId",
          element: (
            <DefaultLayout>
              <PageContent>
                <Category />
              </PageContent>
            </DefaultLayout>
          ),
        },
        {
          path: "products/search",
          element: (
            <DefaultLayout>
              <PageContent>
                <Search />
              </PageContent>
            </DefaultLayout>
          ),
        },
        {
          path: "about",
          element: (
            <DefaultLayout>
              <PageContent>
                <About />
              </PageContent>
            </DefaultLayout>
          ),
        },
        {
          path: "cart",
          element: (
            <DefaultLayout>
              <PageContent>
                <Cart />
              </PageContent>
            </DefaultLayout>
          ),
        },
        {
          path: "thank-you",
          element: (
            <DefaultLayout>
              <PageContent>
                <ThankYou />
              </PageContent>
            </DefaultLayout>
          ),
        },
        {
          path: "/login",
          element: <Login />,
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
        {
          path: "",
          element: (
            <DefaultLayout>
              <PageContent hasSider>
                <Home />
              </PageContent>
            </DefaultLayout>
          ),
        },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
}

export default AppRoutes;
