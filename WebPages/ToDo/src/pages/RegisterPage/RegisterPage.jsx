import { useOutletContext } from "react-router-dom";
import "./RegisterPage.css";
import { useNavigate } from "react-router-dom";
import {
  createUserWithEmailAndPassword,
  signOut,
  updateProfile,
} from "firebase/auth";
import { setDoc,doc } from "firebase/firestore";
import { useEffect } from "react";

export default () => {
  const props = useOutletContext();
  const navigate = useNavigate();
  async function register(userData) {
    const passHash = await props.hashGen(userData.get("pass"));
    try {
      const firebaseUser = await createUserWithEmailAndPassword(
        props.auth,
        userData.get("email"),
        passHash,
      );
      await updateProfile(firebaseUser.user, {
        displayName: userData.get("name"),
      });
      const userRef = doc(props.store, "users", firebaseUser.user.uid);
      await setDoc(
        userRef,
        { name: firebaseUser.user.displayName },
        { merge: true },
      );
      // alert("User successfully Registered, please Login!");
      console.log("Saved User to database: ", firebaseUser.user);
      await signOut(props.auth);
      alert("User successfully Registered, please Login!");
      navigate("/login");
    } catch (error) {
      console.error("Error during registration:", error);
      alert(error.message);
    }
  }
  return (
    <>
      <div className="register-page">
        <div className="register-container">
          <form action={register}>
            <fieldset>
              <legend>Username</legend>
              <input type="text" placeholder="Username" name="name" />
            </fieldset>
            <fieldset>
              <legend>Email</legend>
              <input type="email" placeholder="Email" name="email" />
            </fieldset>
            <fieldset>
              <legend>Password</legend>
              <input type="password" placeholder="Password" name="pass" />
            </fieldset>
            <button>Register</button>
          </form>
        </div>
      </div>
    </>
  );
};
