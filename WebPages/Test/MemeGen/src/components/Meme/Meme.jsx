import "./Meme.css";
export default (props) => {
  return (
    <div className="meme">
      {props.imageURL ? <img src={props.imageURL} alt="meme-image" /> : null}
      <span className="top-text">{props.topText}</span>
      <span className="bottom-text">{props.bottomText}</span>
    </div>
  );
};
