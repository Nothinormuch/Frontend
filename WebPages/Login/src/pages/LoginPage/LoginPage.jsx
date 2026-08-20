import { useOutletContext } from "react-router-dom";
import "./LoginPage.css";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default () => {
  const props = useOutletContext();
  async function login(credientials) {
    const passHash = await props.hashGen(credientials.get("pass"));
    const user = props.users.filter((user) => {
      return (
        (user.name === credientials.get("name-or-email") ||
          user.email === credientials.get("name-or-email")) &&
        user.passHash === passHash
      );
    });
    if (user.length > 0) {
      props.changeCurrentUser(user[0].name);
    } else {
      alert("Your credentials are invalid!");
    }
  }
  const navigate = useNavigate();
  useEffect(() => {
    if (props.currentUser !== "") {
      alert("You have sucessfully LogedIn!");
      navigate("/");
    }
  }, [props.currentUser]);
  return (
    <>
      <div className="login-page">
        <div className="login-container">
          <form action={login}>
            <fieldset>
              <legend>Username</legend>
              <input
                type="text"
                placeholder="Username or Email"
                name="name-or-email"
              />
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
