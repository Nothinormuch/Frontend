import CartNavbar from "../../components/CartNavbar/CartNavbar";
import OrderListItem from "../../components/OrderListItem/OrderListItem";
import "./CartPage.css";

export default (props) => {
  const addedItems = props.cart.filter((item) => {
    return item.count > 0;
  });
  const total = addedItems.reduce((acc, curr) => {
    return (
      acc + Number(props.items[curr.index].currentPrice.slice(1)) * curr.count
    );
  }, 0);
  console.log(total);
  return (
    <>
      <div className="cart-wrapper">
        <div className="cart-panel">
          <CartNavbar toggleCartShown={props.toggleCartShown} />
          <div className="cart-item-list">
            <div className="delivery-detail">
              <i className="fa-solid fa-stopwatch-20"></i>
              <div className="text">
                <h2>Delivery in 20 minutes</h2>
                <p>
                  Shipment of {addedItems.length} item
                  {addedItems.length > 1 ? "s" : ""}
                </p>
              </div>
            </div>
            {addedItems.map((item) => {
              return (
                <OrderListItem
                  key={item.index}
                  index={item.index}
                  items={props.items}
                  cart={props.cart}
                  addItem={props.addItem}
                  removeItem={props.removeItem}
                />
              );
            })}
          </div>
          <div className="bill-wrapper">
            <h2>Bill details</h2>
            <div className="bill-entry">
              <div className="key">Items total</div>{" "}
              <div className="value">₹{total}</div>
            </div>
            <div className="bill-entry">
              <div className="key">Delivery charge</div>{" "}
              <div className="value">FREE</div>
            </div>
            <div className="bill-entry">
              <div className="key">Handling charge</div>{" "}
              <div className="value">₹2</div>
            </div>
            <div className="bill-entry">
              <div className="key total">Grand total</div>{" "}
              <div className="value total">₹{total}</div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
