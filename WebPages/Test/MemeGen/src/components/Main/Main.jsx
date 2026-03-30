import "./Main.css";

export default (props) => {
  function liveUpdate(event) {
    const { value, name } = event.currentTarget;
    props.setMeme((prev) => {
      return {
        ...prev,
        [name]: value,
      };
    });
  }
  function changeMeme() {
    props.setMeme((prev) => {
      return {
        ...prev,
        imageURL:
          prev.imageArr[Math.floor(Math.random() * prev.imageArr.length)].url,
      };
    });
  }
  return (
    <>
      <div className="text">
        <div className="top-container">
          <label htmlFor="top">Top text</label>
          <input
            onChange={liveUpdate}
            type="text"
            name="topText"
            placeholder="Shut up"
            value={props.topText}
          />
        </div>
        <div className="bottom-container">
          <label htmlFor="bottom">Bottom text</label>
          <input
            onChange={liveUpdate}
            type="text"
            name="bottomText"
            placeholder="And take my money"
            value={props.bottomText}
          />
        </div>
      </div>
      <button onClick={changeMeme} className="gen-btn">
        Get a new meme image 🖼
      </button>
    </>
  );
};
