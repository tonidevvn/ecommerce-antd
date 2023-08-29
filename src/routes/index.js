import { createBrowserRouter, RouterProvider } from "react-router-dom";
import About from "../views/About";
import Category from "../views/Category";
import ErrorPage from "../views/Error";
import DefaultLayout from "../layouts/DefaultLayout";
import PageContent from "../components/PageContent";
import Home from "../views/Home";
import Cart from "../views/Cart";
import { ThankYou } from "../views/Checkout";

function AppRoutes() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <DefaultLayout />,
      errorElement: <ErrorPage />,
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
  ]);

  return <RouterProvider router={router} />;
}

export default AppRoutes;
