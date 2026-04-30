import { useOutletContext } from "react-router-dom";
import ItemListing from "../../components/ItemListing/ItemListing";
import "./BrowsePage.css";

export default () => {
  const props = useOutletContext();

  return (
    <>
      <div className="listings-container">
        {props.items.map((item, index) => {
          return (
            <ItemListing
              key={index}
              index={index}
              link={item.imageLink}
              eta={item.eta}
              name={item.itemName}
              weight={item.weight}
              price={item.currentPrice}
              mrp={item.originalPrice}
              addItem={props.addItem}
              removeItem={props.removeItem}
              cart={props.cart}
            />
          );
        })}
      </div>
    </>
  );
};
