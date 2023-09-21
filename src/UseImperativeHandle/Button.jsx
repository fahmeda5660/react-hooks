// import { useState } from "react";

// const Button = (props) => {
//   const [toggle, setToggle] = useState(false);

//   return (
//     <>
//       <button onClick={()=>{
//         setToggle(!toggle)
//       }}
//       >
//         Button From Child
//         </button>
//       {toggle && <span>Toggle on</span>}
//     </>
//   );
// };

// export default Button;
/**
 *imperative handle hook it allows you to create this certain functions that if you pass a reference it will be able to be called from a parent component
 *forwardRef function allows us to transform a functional component and allow it to accept a reference from a parent 
 * */
import { forwardRef, useImperativeHandle, useState } from "react";

const Button = forwardRef((props, ref) => {
  const [toggle, setToggle] = useState(false);

  useImperativeHandle(ref, () => ({
    alterToggle() {
      setToggle(!toggle);
    },
  }));
  return (
    <>
      <button onClick={() => {
        setToggle(!toggle)
      }}
      >
        Button From Child
      </button>
      {toggle && <span>Toggle on</span>}
    </>
  );
});
export default Button;
