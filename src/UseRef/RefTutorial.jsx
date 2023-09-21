import { useRef } from "react";
// basically this hook is the easiest way to access and manipulate dom elements.
function RefTutorial() {
  const inputRef = useRef(null);

  const onClick = () => {
    console.log(inputRef.current.value);
    // inputRef.current.focus();
    // inputRef.current.value = "";
  };
  return (
    <div>
      <h1>useRef</h1>
      <input type="text" placeholder="Example..." ref={inputRef} />
      <button onClick={onClick}>Change Name</button>
    </div>
  );
}
/*
-->Accessing DOM Elements: You can use useRef to get a reference to an HTML element on your web page, like a text input or a button. Once you have this reference, you can control or check what's happening with that element. For example, you can focus an input or read its value.

-->Storing Values Safely: It also helps you store information in a way that won't make your web page re-load or change when that information changes. This can be handy when you want to keep track of something, like the previous value of a variable, without making your web page refresh.
**/ 
export default RefTutorial;
