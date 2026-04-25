import "./ResultWindow.css";
export default (props) => {
  return (
    <div className="result-container">
      <p>{props.winner}</p>
    </div>
  );
};
