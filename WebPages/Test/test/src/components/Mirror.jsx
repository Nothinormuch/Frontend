import { useDispatch, useSelector } from "react-redux";
import {increment,decrement,incrementByAmmount} from "../state/Counter.js"

export function Mirror() {
  const count = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();
  return (
    <>
      <h1>Count: {count}</h1>
      <button onClick={()=>{dispatch(incrementByAmmount(10))}}>+10</button>
    </>
  );
}
