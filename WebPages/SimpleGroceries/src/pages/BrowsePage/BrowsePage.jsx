import ItemListing from "../../components/ItemListing/ItemListing";
import items from "../../data/items.js";
import "./BrowsePage.css";

export default () => {
  return (
    <>
      <div className="listings-container">
        {items.map((item) => {
          return (
            <ItemListing
              link={item.imageLink}
              eta={item.eta}
              name={item.itemName}
              weight={item.weight}
              price={item.currentPrice}
              mrp={item.originalPrice}
            />
          );
        })}
      </div>
    </>
  );
};
