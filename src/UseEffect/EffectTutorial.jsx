import { useEffect, useState } from "react";
import axios from "axios";
/**
 * useEffect is used in React to perform side effects in function components, such as data fetching, DOM manipulation, or subscribing to external events, after the component has rendered.
 * */ 
function EffectTutorial() {
  const [data, setData] = useState("");
  const [count, setCount] = useState(0);

  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/comments")
      .then((response) => {
        console.log(response.data);
        setData(response.data[1].email);
        console.log("API WAS CALLED");
      });
  }, []);
// }, [count]); jodi likha hoy, tahole jotobar count er value barbe, otobar api call hobe. dependencies na thakle ekbar useeffect call hobe.
  return (
    <div>
      Hello World: useEffect
      <h1>{data}</h1>
      <h1>{count}</h1>
      <button
        onClick={() => {
          setCount(count + 1);
        }}
      >
        Click
      </button>
    </div>
  );
}

export default EffectTutorial;
