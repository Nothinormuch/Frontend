import { useSelector, useDispatch } from "react-redux";
import { increment, decrement, incrementByAmmount } from "../state/Counter.js";

export function Counter() {
  const counter = useSelector((state) => {
    return(state.counter.value);
  });
  const dispatch = useDispatch();

  return (
    <>
      <h1>Count: {counter}</h1>
      <button
        onClick={() => {
          dispatch(increment());
        }}
      >
        +1
      </button>
      <button
        onClick={() => {
          dispatch(decrement());
        }}
      >
        -1
      </button>
    </>
  );
}
