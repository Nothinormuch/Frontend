import { Outlet } from "react-router-dom";

import Navbar from "../../components/Navbar/Navbar.jsx";

export default () => {
  return (
    <>
      <header>
        <Navbar />
      </header>
      <Outlet />
    </>
  );
};
