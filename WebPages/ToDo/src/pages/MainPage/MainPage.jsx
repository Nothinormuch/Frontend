import { Outlet } from "react-router-dom";
import { useState, useEffect } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { collection } from "firebase/firestore";

import { auth, store } from "../../firebase.js";
import Navbar from "../../components/Navbar/Navbar.jsx";
import "./MainPage.css";
import LoagingPage from "../LoadingPage/LoagingPage.jsx";

export default (props) => {
  async function hashGen(pass) {
    return Array.from(
      new Uint8Array(
        await crypto.subtle.digest("SHA-256", new TextEncoder().encode(pass)),
      ),
    )
      .map((b) => b.toString(16).padStart(2, "0"))
      .join("");
  }
  function getTaskCollectionRef() {
    const user = auth.currentUser;
    if (!user) throw new Error("User not authenticated");
    return collection(store, "users", user.uid, "tasks");
  };

  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setLoading(false);
    });

    return () => unsubscribe();
  }, []);
  if (loading) return <LoagingPage />;
  return (
    <>
      <header>
        <Navbar auth={auth} user={user} />
      </header>
      <main className="wrapper-wrapper">
        <div className="wrapper">
          <Outlet
            context={{
              hashGen: hashGen,
              auth: auth,
              user: user,
              getTaskCollectionRef: getTaskCollectionRef,
              store: store,
            }}
          />
        </div>
      </main>
    </>
  );
};
