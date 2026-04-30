import { Link } from "react-router-dom";
import "./HomePage.css";

export default () => {
  return (
    <>
      <div className="landing-container">
        <Link to="/browse"><img src="/banner.png" alt="banner" /></Link>
      </div>
    </>
  );
};
