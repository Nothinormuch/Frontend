import { useOutletContext } from "react-router-dom";

import "./CartButton.css";

export default (props) => {
  const uniqueItems = props.cart.filter((item) =>
    item.count > 0 ? true : false,
  );
  return (
    <>
      <div className="cart-btn-container">
        <button className="cart-btn">
          <i className="fa-solid fa-basket-shopping"></i>
        </button>
        {uniqueItems.length > 0 ? (
          <span className="cart-size">{uniqueItems.length}</span>
        ) : null}
      </div>
    </>
  );
};
