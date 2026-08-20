import { Link } from "react-router-dom";
import "./Menu.css";
import CartButton from "../CartButton/CartButton";
import Profile from "../Profile/Profile";

export default (props) => {
  return (
    <div className="menu-list">
      {props.currentUser === "" ? (
        <>
          <Link to="/login">
            <button className="login-btn">LogIn</button>
          </Link>
          <Link to="/register">
            <button className="register-btn">Register</button>
          </Link>
        </>
      ) : (
        <>
          <a
            onClick={() => {
              props.toggleCartShown();
            }}
          >
            <CartButton cart={props.cart} />
          </a>
          <Profile currentUser={props.currentUser} />
        </>
      )}
    </div>
  );
};
