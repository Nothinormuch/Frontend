import { Outlet } from "react-router-dom";
import { useState } from "react";

import Navbar from "../../components/Navbar/Navbar.jsx";
import "./MainPage.css";

export default () => {
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
          currentUser={currentUser}
          changeCurrentUser={changeCurrentUser}
        />
      </header>
      <main className="wrapper-wrapper">
        <div className="wrapper">
          <Outlet
            context={{
              addUser: addUser,
              users: userList,
              changeCurrentUser: changeCurrentUser,
              currentUser: currentUser,
              hashGen: hashGen,
            }}
          />
        </div>
      </main>
    </>
  );
};
