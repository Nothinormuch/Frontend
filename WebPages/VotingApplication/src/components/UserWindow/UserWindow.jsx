import "./UserWindow.css";

export default (props) => {
  let users = [];
  if (props.currentUser === props.userCount) {
    users.push(<i className={"fa-regular fa-circle-user voted"}></i>);
  } else {
    for (let i = 0; i < props.currentUser; i++) {
      users.push(<i className={"fa-regular fa-circle-user voted"}></i>);
    }
    users.push(<i className={"fa-regular fa-circle-user current"}></i>);
    for (let i = props.currentUser + 1; i < props.userCount; i++) {
      users.push(<i className={"fa-regular fa-circle-user"}></i>);
    }
  }

  return <div className="user-container">{users}</div>;
};
