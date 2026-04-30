import { Outlet } from "react-router-dom";
import { useState } from "react";

import Navbar from "../../components/Navbar/Navbar.jsx";
import items from "../../data/items.js";
import "./MainPage.css";
import CartPage from "../CartPage/CartPage.jsx";

export default () => {
  const [cart, setCart] = useState(
    items.map((item, index) => {
      return { index: index, count: 0 };
    }),
  );
  const [cartShown, setCartShown] = useState(false);
  function toggleCartShown() {
    setCartShown((cartShown) => !cartShown);
  }
  function addItem(index) {
    setCart((oldCart) => [
      ...oldCart.slice(0, index),
      { index: index, count: Number(oldCart[index].count) + 1 },
      ...oldCart.slice(Number(index) + 1),
    ]);
  }
  function removeItem(index) {
    if (Number(cart[index].count) - 1 >= 0) {
      setCart((oldCart) => [
        ...oldCart.slice(0, index),
        { index: index, count: Number(oldCart[index].count) - 1 },
        ...oldCart.slice(Number(index) + 1),
      ]);
    }
  }
  return (
    <>
      <header>
        <Navbar cart={cart} toggleCartShown={toggleCartShown} />
      </header>
      <main className="wrapper-wrapper">
        <div className="wrapper">
          <Outlet
            context={{
              items: items,
              cart: cart,
              setCart: setCart,
              addItem: addItem,
              removeItem: removeItem,
            }}
          />
        </div>
      </main>
      {cartShown ? (
        <CartPage
          toggleCartShown={toggleCartShown}
          cart={cart}
          addItem={addItem}
          removeItem={removeItem}
          items={items}
        />
      ) : null}
    </>
  );
};
