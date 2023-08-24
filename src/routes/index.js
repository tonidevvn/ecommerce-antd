import { createBrowserRouter, RouterProvider } from "react-router-dom";
import About from "../views/About";
import Category from "../views/Category";
import ErrorPage from "../views/Error";
import DefaultLayout from "../layouts/DefaultLayout";
import PageContent from "../components/PageContent";

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
            <PageContent hasSider>
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
      ],
    },
  ]);

  return <RouterProvider router={router} />;
}

export default AppRoutes;
