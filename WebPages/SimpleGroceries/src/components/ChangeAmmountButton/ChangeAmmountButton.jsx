import "./ChangeAmmountButton.css";

export default (props) => {
  return (
    <div className="change-ammount-container">
      <button
        className="change-ammount-button decrement"
        onClick={() => {
          props.removeItem(props.index);
        }}
      >
        -
      </button>
      <span className="ammount">{props.cart[props.index].count}</span>
      <button
        className="change-ammount-button increment"
        onClick={() => {
          props.addItem(props.index);
        }}
      >
        +
      </button>
    </div>
  );
};
