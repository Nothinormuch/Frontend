import "./ItemListing.css";
export default (props) => {
  return (
    <div className="item-listing container">
      <img src={props.link}></img>
      <p className="dilevry-time">
        <i className="fa-regular fa-stopwatch"></i>{props.eta}
      </p>
      <h2>{props.name}</h2>
      <h3>{props.weight}</h3>
      <div className="shop-container">
        <div className="price-container">
          <span className="price">₹{props.price}</span>
          <span className="MRP">₹{props.mrp}</span>
        </div>
        <button className="add-button">Add</button>
      </div>
    </div>
  );
};
