import { Link } from "react-router-dom";

import Logo from "../Logo/Logo.jsx";
import "./Navbar.css";
import Menu from "../Menu/Menu.jsx";

export default (props) => {
  return (
    <nav>
      <ul>
        <li className="nav-list logo item">
          <Link to="/">
            <Logo />
          </Link>
        </li>
        <li className="nav-list menu item">
          <Menu
            cart={props.cart}
            toggleCartShown={props.toggleCartShown}
            currentUser={props.currentUser}
            changeCurrentUser={props.changeCurrentUser}
            auth = {props.auth}
          />
        </li>
      </ul>
    </nav>
  );
};
