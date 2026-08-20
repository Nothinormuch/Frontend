import ChangeAmmountButton from "../ChangeAmmountButton/ChangeAmmountButton";
import "./OrderListItem.css";

export default (props) => {
  return (
    <>
      <div className="order-list-item">
        <div className="item-details">
          <img src={props.items[props.index].imageLink} alt="" />
          <div className="text">
            <div className="headings">
              <h2>{props.items[props.index].itemName}</h2>
              <h3>{props.items[props.index].weight}</h3>
            </div>
            <div className="price-details">
              <span className="price">
                {props.items[props.index].currentPrice}
              </span>
              <span className="mrp">
                {props.items[props.index].originalPrice}
              </span>
            </div>
          </div>
        </div>
        <div className="change-ammount-button">
          <ChangeAmmountButton
            index={props.index}
            cart={props.cart}
            addItem={props.addItem}
            removeItem={props.removeItem}
          />
        </div>
      </div>
    </>
  );
};
