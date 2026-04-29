import { Provider } from "react-redux";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import { HomePage } from "./Pages/HomePage.jsx";
import { ProfilePage } from "./Pages/ProfilePage.jsx";

import { Counter } from "./components/Counter.jsx";
import { Mirror } from "./components/Mirror.jsx";
import { store } from "./state/store.js";
import { NotFoundPage } from "./Pages/NotFoundPage.jsx";

export function App() {
  const router = createBrowserRouter([
    { path: "/", element: <HomePage />, errorElement: <NotFoundPage/> },
    { path: "/profile", element: <ProfilePage /> },
  ]);

  return (
    <Provider store={store}>
      <RouterProvider router={router} />
      {/* <Counter />
      <Mirror /> */}
    </Provider>
  );
}
