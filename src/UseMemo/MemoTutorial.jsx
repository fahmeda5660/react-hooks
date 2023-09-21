import axios from "axios";
import { useEffect, useState, useMemo } from "react";
// hook is to actually improve performance and be able to decrease latency(reduce the time it takes to complete.) on huge computations that you make throughout your application

// recreated at re-render so if i had a different state in my application and that state was changed it will trigger a re-render of this whole application and this function will be created again and by default if a function is created again it would also recompute all of this information which means that this over here would be recomputed every single time a state change changed in our application which isn't really efficient especially in cases where it's more than just 500 comments it's like billions of comments or billions of data points um it is not efficient
// only re-render when data change->useMemo
export default function MemoTutorial() {
  const [data, setData] = useState(null);
  const [toggle, setToggle] = useState(false);

  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/comments")
      .then((response) => {
        setData(response.data);
      });
  }, []);

  const findLongestName = (comments) => {
    if (!comments) return null;

    let longestName = "";
    for (let i = 0; i < comments.length; i++) {
      let currentName = comments[i].name;
      if (currentName.length > longestName.length) {
        longestName = currentName;
      }
    }

    console.log("THIS WAS COMPUTED");

    return longestName;
  };

  const getLongestName = useMemo(() => findLongestName(data), [data]);
  // const getLongestName = useMemo(() => findLongestName(data), [toggle]);

  return (
    <div className="App">useMemo:
      <div> {getLongestName} </div>

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
