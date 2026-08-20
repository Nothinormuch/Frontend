import { Link } from "react-router-dom";

import "./NotFoundPage.css"

export default () => {
  return (
    <>
      <div className="not-found-wrapper">
        <div className="not-found">
          <h1>Error 404</h1>
          <Link to="/">Home</Link>
        </div>
      </div>
    </>
  );
};
