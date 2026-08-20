import { Link } from "react-router-dom";
import "./Menu.css";
import Profile from "../Profile/Profile";

export default (props) => {
  return (
    <div className="menu-list">
      {props.currentUser === "" ? (
        <>
          <Link to="/">
            <button className="login-btn">LogIn</button>
          </Link>
          <Link to="/register">
            <button className="register-btn">Register</button>
          </Link>
        </>
      ) : (
        <>
          <Profile currentUser={props.currentUser} changeCurrentUser={props.changeCurrentUser} />
        </>
      )}
    </div>
  );
};
