import { Link, useOutletContext } from "react-router-dom";
import "./HomePage.css";

export default () => {
  const props = useOutletContext();
  return (
    <>
      <div className="landing-container">
        <Link to={props.currentUser === "" ? "/login" : "/browse"}>
          <img src="/Frontend/SimpleGroceries/banner.avif" alt="banner" />
        </Link>
        <Link to={props.currentUser === "" ? "/login" : "/browse"}>
          <img src="/Frontend/SimpleGroceries/sub-banner-blue.avif" alt="banner" />
        </Link>
      </div>
    </>
  );
};
