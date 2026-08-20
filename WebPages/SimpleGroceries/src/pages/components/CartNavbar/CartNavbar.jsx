import "./CartNavbar.css";

export default (props) => {
  return (
    <>
      <nav className="cart-navbar">
        <ul>
          <button
            className="close-button"
            onClick={() => {
              props.toggleCartShown();
            }}
          >
            <li>
              <i className="fa-solid fa-arrow-left"></i>
            </li>
          </button>
          <li>
            <h2>My Cart</h2>
          </li>
        </ul>
      </nav>
    </>
  );
};
