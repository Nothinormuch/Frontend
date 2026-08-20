import { useOutletContext } from "react-router-dom";
import "./RegisterPage.css";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default () => {
  const props = useOutletContext();
  async function register(userData) {
    if (
      props.users.filter((user) => {
        return userData.get("email") === user.email;
      }).length > 0
    ) {
      alert("This Email is already in use!");
    } else if (
      props.users.filter((user) => {
        return userData.get("name") === user.name;
      }).length > 0
    ) {
      alert("This Username is already taken!");
    } else {
      const passHash = await props.hashGen(userData.get("pass"));
      props.addUser(userData.get("name"), userData.get("email"), passHash);
    }
  }

  const navigate = useNavigate();
  useEffect(() => {
    if (props.users.length > 0) {
      alert("User successfully Registered, please Login!");
      navigate("/");
    }
  }, [props.users]);
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
