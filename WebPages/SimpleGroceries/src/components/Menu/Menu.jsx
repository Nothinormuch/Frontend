import { Link } from "react-router-dom";
import "./Menu.css";
import CartButton from "../CartButton/CartButton";

export default (props) => {
  return (
    <div className="menu-list">
      <a
        onClick={() => {
          props.toggleCartShown();
        }}
      >
        <CartButton cart={props.cart} />
      </a>
      <Link to="/login">
        <button className="login-btn">LogIn</button>
      </Link>
      <Link to="/register">
        <button className="register-btn">Register</button>
      </Link>
    </div>
  );
};
