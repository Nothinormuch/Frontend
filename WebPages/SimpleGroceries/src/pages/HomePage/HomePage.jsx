import { Link, useOutletContext } from "react-router-dom";
import "./HomePage.css";

export default () => {
  const props = useOutletContext();
  return (
    <>
      <div className="landing-container">
        <Link to={props.currentUser === "" ? "/login" : "/browse"}>
          <img src="/banner.avif" alt="banner" />
        </Link>
        <Link to={props.currentUser === "" ? "/login" : "/browse"}>
          <img src="/sub-banner-blue.avif" alt="banner" />
        </Link>
      </div>
    </>
  );
};
