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
  function toggleCartShown() {
    setCartShown((cartShown) => !cartShown);
  }

  const [cartShown, setCartShown] = useState(false);
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

  const [userList, setUserList] = useState([]);
  function addUser(name, email, passHash) {
    setUserList((userList) => {
      return [...userList, { name: name, email: email, passHash: passHash }];
    });
  }
  async function hashGen(pass) {
    return Array.from(
      new Uint8Array(
        await crypto.subtle.digest("SHA-256", new TextEncoder().encode(pass)),
      ),
    )
      .map((b) => b.toString(16).padStart(2, "0"))
      .join("");
  }

  const [currentUser, setCurrentUser] = useState("");
  function changeCurrentUser(name) {
    setCurrentUser(name);
  }
  return (
    <>
      <header>
        <Navbar
          cart={cart}
          toggleCartShown={toggleCartShown}
          currentUser={currentUser}
        />
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
              addUser: addUser,
              users: userList,
              changeCurrentUser: changeCurrentUser,
              currentUser: currentUser,
              hashGen: hashGen,
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
