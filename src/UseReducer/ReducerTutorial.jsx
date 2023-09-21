import { useReducer } from "react";
// also state managing hook, use useState for basic state needs and useReducer for advanced state management(like managing two state at a moment).
const reducer = (state, action) => {
  switch (action.type) {
    case "INCREMENT":
      return { count: state.count + 1, showText: state.showText };
    case "toggleShowText":
      return { count: state.count, showText: !state.showText };
    default:
      return state;
  }
};

const ReducerTutorial = () => {
  // const [state, dispatch] = useReducer(reducer, initialArg, init);
  const [state, dispatch] = useReducer(reducer, { count: 0, showText: true });
// dispatch function
  return (
    <div>
      <h2>useReducer</h2>
      <h1>{state.count}</h1>
      <button
        onClick={() => {
          dispatch({ type: "INCREMENT" });
          dispatch({ type: "toggleShowText" });
        }}
      >
        Click Here
      </button>

      {state.showText && <p>This is a text</p>}
    </div>
  );
};

export default ReducerTutorial;
