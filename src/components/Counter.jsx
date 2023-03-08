import { useReducer } from "react";

const inintialState = {
    count: 0,
    numberToChangeBy: 1,
};

const reducer = (state, action) => {

    if (action.type == "increment") {
        return {
            ...state,
            count: state.count + state.numberToChangeBy,
        };
    }
    else if (action.type == "decrement") {
        return {
            ...state,
            count: state.count - state.numberToChangeBy,
        };
    }
    else if (action.type == "setNumberToChangeBy") {
        return {
            ...state,
            numberToChangeBy: action.payload,
        };
    }
    else {
        console.error("Error, action is invalid");
    }
};

const Counter = () => {
  const [state, dispatch] = useReducer(reducer, inintialState);

  const handleNumberChange = (e) => {
    dispatch({ type: "setNumberToChangeBy", payload: Number(e.target.value) });
  };

  return (
    <div className="App">
      <pre className="rainbow box text-center">Value {state.count}</pre>
      <div className="flex gap center">
        <button
          className="button-box"
          onClick={() => dispatch({ type: "increment" })}
        >
          <span className="huge">+</span>Increment by {state.numberToChangeBy}
        </button>
        <button
          className="button-box"
          onClick={() => dispatch({ type: "decrement" })}
        >
          <span className="huge">-</span>Decrement by {state.numberToChangeBy}
        </button>
      </div>
      <p className="flex gap center">
        <label className="button-box" htmlFor="number">
          Number to Increment/Decrement by{" "}
        </label>
        <input
          className="input-box"
          onChange={handleNumberChange}
          type="number"
          value={state.numberToChangeBy}
          name="number"
          id="number"
        />
      </p>
    </div>
  );
};

export default Counter;