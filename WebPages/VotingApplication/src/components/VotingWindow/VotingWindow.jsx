import question from "../../data/question.js";
import "./VotingWindow.css";

export default (props) => {
  function vote(formData) {
    if (props.currentUser < props.userCount + 1) {
      let data = formData.get(props.question);
      if (data == null) {
        return;
      } else {
        props.setVotes(formData.get(props.question));
        props.incrementUser();
      }
    } else {
      props.incrementUser();
    }
    clearSelection();
  }
  function clearSelection() {
    for (let i of document.getElementsByClassName("selected")) {
      i.classList.remove("selected");
    }
  }

  function select(e) {
    clearSelection();
    e.target.classList.add("selected");
  }

  return (
    <>
      <form action={vote} className="vote-container">
        <h2 className="question">{props.question}</h2>
        <div className="choice-container">
          {props.votes.map((choice, index) => {
            return (
              <div className={"choice choice-" + index}>
                <div className={"choice-input input-" + index}>
                  <input
                    type="radio"
                    name={props.question}
                    id={"radio-" + index}
                    value={index}
                  />
                  <label
                    htmlFor={"radio-" + index}
                    id={"label-" + index}
                    onClick={(e) => {
                      select(e);
                    }}
                  >
                    {choice.choice}
                  </label>
                </div>
                <p className={"vote vote-" + index}>{choice.count}</p>
              </div>
            );
          })}
        </div>
        <button type="submit">Vote</button>
      </form>
    </>
  );
};
