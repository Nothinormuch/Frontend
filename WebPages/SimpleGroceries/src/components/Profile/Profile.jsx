import { Link } from "react-router-dom";

import "./Profile.css";

export default () => {
  return (
    <div className="profile-list">
      <Link to="/login">
        <button className="login">LogIn</button>
      </Link>
      <Link to="/register">
        <button className="register">Register</button>
      </Link>
    </div>
  );
};
