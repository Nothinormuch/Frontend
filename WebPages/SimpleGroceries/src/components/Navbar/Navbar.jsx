import { Link } from "react-router-dom";

import Logo from "../Logo/Logo.jsx";
import SearchBar from "../SearchBar/SearchBar.jsx";
import "./Navbar.css";
import Profile from "../Profile/Profile.jsx";

export default () => {
  return (
    <nav>
      <ul>
        <li className="nav-list logo item">
          <Link href="/">
            <Logo />
          </Link>
        </li>
        <li className="nav-list search item">
          <SearchBar/>
        </li>
        <li className="nav-list profile item">
          <Profile/>
        </li>
      </ul>
    </nav>
  );
};
