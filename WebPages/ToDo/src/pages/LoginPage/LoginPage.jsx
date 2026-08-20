import { useOutletContext } from "react-router-dom";
import "./LoginPage.css";
import { useNavigate } from "react-router-dom";
import { signInWithEmailAndPassword } from "firebase/auth";

export default () => {
  const props = useOutletContext();
  const navigate = useNavigate();
  async function login(credientials) {
    const passHash = await props.hashGen(credientials.get("pass"));
    try {
      const userCredential = await signInWithEmailAndPassword(
        props.auth,
        credientials.get("email"),
        passHash,
      );
      console.log("Logged in:", userCredential.user);
      alert("You have sucessfully LogedIn!");
      navigate("/");
    } catch (error) {
      alert(error.message);
    }
  }
  return (
    <>
      <div className="login-page">
        <div className="login-container">
          <form action={login}>
            <fieldset>
              <legend>Email</legend>
              <input type="text" placeholder="Email" name="email" />
            </fieldset>
            <fieldset>
              <legend>Password</legend>
              <input type="password" placeholder="Password" name="pass" />
            </fieldset>
            <button>Login</button>
          </form>
        </div>
      </div>
    </>
  );
};
