import { createBrowserRouter, RouterProvider } from "react-router-dom";
import NotFoundPage from "./pages/NotFoundPage/NotFoundPage.jsx";
import MainPage from "./pages/MainPage/MainPage.jsx";
import RegisterPage from "./pages/RegisterPage/RegisterPage.jsx";
import LoginPage from "./pages/LoginPage/LoginPage.jsx";
import "./App.css";

export default () => {
  const router = createBrowserRouter(
    [
      {
        path: "/",
        element: <MainPage />,
        errorElement: <NotFoundPage />,
        children: [
          { index: true, element: <LoginPage /> },
          {
            path: "register",
            element: <RegisterPage />,
          },
        ],
      },
    ],
    {
      basename: "/Frontend/Login",
    },
  );
  return <RouterProvider router={router} />;
};