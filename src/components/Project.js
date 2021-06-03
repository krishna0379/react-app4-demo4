import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

export function Project() {
  //const [counter, setCounter] = useState(0);
  const state = useSelector((state) => state);
  const dispatch = useDispatch();

  const increment = () => dispatch({ type: "INC" });
  const decrement = () => dispatch({ type: "DEC" });
  return (
    <div className="mx-4">
      <div className="alert alert-info mt-2 text-center">
        COUNTER {state.counter}
      </div>

      <input
        className="btn btn-secondary btn-lg  m-1 w-100"
        type="button"
        onClick={() => increment()}
        value="INCREMENT"
      />

      <input
        className="btn btn-secondary btn-lg  m-1 w-100"
        type="button"
        onClick={() => decrement()}
        value="DECREMENT"
      />
    </div>
  );
}
