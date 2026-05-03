import { createBrowserRouter, RouterProvider } from "react-router-dom";
import NotFoundPage from "./pages/NotFoundPage/NotFoundPage.jsx";
import MainPage from "./pages/MainPage/MainPage.jsx";
import RegisterPage from "./pages/RegisterPage/RegisterPage.jsx";
import HomePage from "./pages/HomePage/HomePage.jsx";
import LoginPage from "./pages/LoginPage/LoginPage.jsx";
import BrowsePage from "./pages/BrowsePage/BrowsePage.jsx";
import "./App.css";
import CartPage from "./pages/CartPage/CartPage.jsx";

export default () => {
  const router = createBrowserRouter(
    [
      {
        path: "/",
        element: <MainPage />,
        errorElement: <NotFoundPage />,
        children: [
          { index: true, element: <HomePage /> },
          {
            path: "register",
            element: <RegisterPage />,
          },
          { path: "login", element: <LoginPage /> },
          { path: "browse", element: <BrowsePage /> },
        ],
      },
    ],
    {
      basename: "/Frontend/SimpleGroceries",
    },
  );
  return <RouterProvider router={router} />;
};
