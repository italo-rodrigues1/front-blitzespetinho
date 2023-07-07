/* eslint-disable react-refresh/only-export-components */
import { createBrowserRouter } from "react-router-dom";
import Login from "../views/Login";
import NotFound from "../views/NotFound";
import { Suspense, lazy } from "react";
import Loading from "../components/Loading";
import { AuthContextProvider } from "../context";
import { ProductsContextProvider } from "../context/productsContext";

const Home = lazy(() => import("../views/Home"));
const Request = lazy(() => import("../views/Requests"));

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <Suspense fallback={<Loading />}>
        <AuthContextProvider>
          <ProductsContextProvider>
            <Home />
          </ProductsContextProvider>
        </AuthContextProvider>
      </Suspense>
    ),
  },
  {
    path: "/requests",
    element: (
      <Suspense fallback={<Loading />}>
        <ProductsContextProvider>
          <Request />
        </ProductsContextProvider>
      </Suspense>
    ),
    children: [],
  },
  {
    path: "/login",
    element: <Login />,
    children: [],
  },
  {
    path: "*",
    element: <NotFound />,
    children: [],
  },
]);

export default router;
