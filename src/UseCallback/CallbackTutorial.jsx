import axios from "axios";
import { useCallback, useState } from "react";
import Child from "./Child";
//similar to usememo but useCallback returns its function uncalled so you can call it later, while useMemo calls its function and returns the result. useCallback returns a memoized callback function, while useMemo returns a memoized value
export default function CallBackTutorial() {
  const [toggle, setToggle] = useState(false);
  const [data, setData] = useState("Yo, pls sub to the channel!");

// function is recreated at every time there is a state change
  const returnComment = ()=>{
      return data
};

// basically value return-->like useMemo
// const returnComment = (name)=>{
//   return data+name;
// };

// returing func, also uncalled thats why wont re-render useeffect.
  // const returnComment = useCallback(
  //   (name) => {
  //     return data + name;
  //   },
  //   [data]
  // );

  return (
    <div className="App">
      useCallback
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
