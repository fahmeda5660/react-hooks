import { useLayoutEffect, useEffect, useRef } from "react";
// very similar to the use effect but 
function LayoutEffectTutorial() {
  const inputRef = useRef(null);

  useEffect(() => {
    // console.log("useEffect");
    inputRef.current.value = "HELLO";
  }, []);

  useLayoutEffect(() => {
    // console.log("useLayoutEffect");
    console.log(inputRef.current.value);
  }, []);

  /**uselayouteffect  fundamentally called in a earlier stage of page, uselayouteffect render first then useEffect render,the use effect is called after everything is rendered into the page 
   **/
  return (
    <div className="App">
      <input ref={inputRef} value="PEDRO" style={{ width: 400, height: 60 }} />
    </div>
  );
}

export default LayoutEffectTutorial;
