import { useState } from "react";
/*
useState hook is one of the fundamental hooks in React, and it's used for managing state within functional components. It allows you to add stateful behavior to your components, enabling them to react to changes in data and re-render accordingly. 
**/ 
const StateTutorial = () => {
  const [inputValue, setInputValue] = useState("Pedro");

  let onChange = (event) => {
    const newValue = event.target.value;
    setInputValue(newValue);
  };

  return (
    <div>
      <h2>useState</h2>
      <input placeholder="enter something..." onChange={onChange} />
      {inputValue}
    </div>
  );
};
/*
Bailing out of a state update: This can be useful to prevent unnecessary re-renders.
Batching State Updates: React batches state updates for performance reasons. When you call a state updater function multiple times in a synchronous context (like within an event handler), React will batch those updates together and perform a single re-render.
*/ 
export default StateTutorial;
