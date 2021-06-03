import { useState } from "react";

export function Project() {
  const [counter, setCounter] = useState(0);

  const increment = () => setCounter(counter + 1);

  return (
    <div className="mx-4">
      <div className="alert alert-info mt-2 text-center">COUNTER {counter}</div>

      <input
        className="btn btn-secondary btn-lg w-100"
        type="button"
        onClick={() => increment()}
        value="Counter"
      />
    </div>
  );
}
