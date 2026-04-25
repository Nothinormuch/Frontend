import { useState } from "react";
import VotingWindow from "./components/VotingWindow/VotingWindow";
import UserWindow from "./components/UserWindow/UserWindow";
import ResultWindow from "./components/ResultWindow/ResultWindow.jsx";
import questions from "./data/question.js";
import "./App.css";

export default () => {
  let userCount = 5;
  let [currentUser, setCurrentUser] = useState(0);
  let [votes, setVotes] = useState(
    questions.choices.map((choice) => {
      return { choice: choice, count: 0 };
    }),
  );

  function incrementUser() {
    setCurrentUser((oldVal) => oldVal + 1);
  }
  function voteFor(choiceIndex) {
    setVotes((oldArr) => [
      ...oldArr.slice(0, choiceIndex),
      {
        choice: oldArr[choiceIndex].choice,
        count: oldArr[choiceIndex].count + 1,
      },
      ...oldArr.slice(Number(choiceIndex) + 1),
    ]);
  }

  let voteList = votes.map((value) => Number(value.count));
  let max = votes.map((value) => value.choice)[
    voteList.indexOf(Math.max(...voteList))
  ];
  let winner =
    voteList.filter((x) => x === Math.max(...voteList)).length > 1
      ? "There was a tie between multiple options!"
      : "Winner: " +
        max +
        " with " +
        Math.max(...voteList) +
        ` vote${Math.max(...voteList) > 1 ? "s" : ""}!`;
  console.log(Math.max(...voteList));
  console.log(voteList);
  console.log(voteList.filter((x) => x === Math.max(...voteList)));
  return (
    <>
      {currentUser < userCount ? (
        <>
          <VotingWindow
            userCount={userCount}
            currentUser={currentUser}
            question={questions.question}
            votes={votes}
            setVotes={voteFor}
            incrementUser={incrementUser}
          />
          <UserWindow currentUser={currentUser} userCount={userCount} />
        </>
      ) : (
        <>
          <ResultWindow winner={winner} />
        </>
      )}
    </>
  );
};
