import { useNavigate } from "react-router-dom";
import { signOut } from "firebase/auth";
import "./Profile.css";

export default (props) => {
  const navigate = useNavigate();
  async function logout() {
    try {
      await signOut(props.auth);
      alert("User signed out successfully");
      navigate("/");
    } catch (error) {
      console.error("Error signing out:", error.message);
    }
  }
  return (
    <>
      <div className="profile">
        <button onClick={logout}>
          <i className="fa-solid fa-circle-user"></i>
          <span>{props.auth.currentUser?props.auth.currentUser.displayName:""}</span>
        </button>
      </div>
    </>
  );
};
