import "./Profile.css";

export default (props) => {
  function logout() {
    props.changeCurrentUser("");
    alert("Successfuly Logged Out!");
  }
  return (
    <>
      <div className="profile">
        <button onClick={logout}>
          <i className="fa-solid fa-circle-user"></i>
          <span>{props.currentUser}</span>
        </button>
      </div>
    </>
  );
};
