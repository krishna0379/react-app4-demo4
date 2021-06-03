import { useDispatch, useSelector } from "react-redux";
import { incrementAction, decrmentAction } from "../redux/actions/AppAction";

export function Project() {
  const state = useSelector((state) => state);
  const dispatch = useDispatch();

  const increment = () => dispatch(incrementAction());
  const decrement = () => dispatch(decrmentAction());
  return (
    <div className="mx-4">
      <div className="alert alert-info mt-2 text-center">
        COUNTER {state.cr.counter}
      </div>

      <input
        className="btn btn-secondary btn-lg  m-1 w-100"
        type="button"
        onClick={() => increment()}
        value="INCREMENT"
      />

      <input
        className="btn btn-dark btn-lg  m-1 w-100"
        type="button"
        onClick={() => decrement()}
        value="DECREMENT"
      />
    </div>
  );
}
