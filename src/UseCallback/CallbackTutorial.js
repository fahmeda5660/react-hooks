import axios from "axios";
import { useCallback, useState } from "react";
import Child from "./Child";
// useCallback returns its function uncalled so you can call it later, while useMemo calls its function and returns the result. useCallback returns a memoized callback function, while useMemo returns a memoized value
export default function CallBackTutorial() {
  const [toggle, setToggle] = useState(false);
  const [data, setData] = useState("Yo, pls sub to the channel!");

  const returnComment = useCallback(
    (name) => {
      return data + name;
    },
    [data]
  );

  return (
    <div className="App">
      <Child returnComment={returnComment} />

      <button
        onClick={() => {
          setToggle(!toggle);
        }}
      >
        {" "}
        Toggle
      </button>
      {toggle && <h1> toggle </h1>}
    </div>
  );
}
