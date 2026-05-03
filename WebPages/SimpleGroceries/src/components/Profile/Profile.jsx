import "./Profile.css";

export default (props) => {
  return (
    <>
      <div className="profile">
        <i className="fa-solid fa-circle-user"></i>
        <span>{props.currentUser}</span>
      </div>
    </>
  );
};
