import { Link } from "react-router-dom";
import "./Menu.css";
import Profile from "../Profile/Profile";

export default (props) => {
  return (
    <div className="menu-list">
      {!props.auth.currentUser ? (
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
          <Profile auth={props.auth}/>
        </>
      )}
    </div>
  );
};
