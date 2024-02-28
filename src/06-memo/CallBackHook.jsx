import { useCallback, useState } from "react";
import { ShowIncrement } from "./ShowIncrement";
export const CallBackHook = () => {
  const [counter, setCounter] = useState(10);
  const incrementFather = useCallback(
    (value) => {
        // console.log("sada")
        // setCounter(counter+1)
        setCounter((c)=>{
            return c+ value
        });    
    },
    [],
  )
  
//   const incrementFather = ()=>{
//     setCounter(counter+1);
//   }

  return (
    <>
      <h1>CallBackHook {counter}</h1>
      <hr />
      <ShowIncrement increment={incrementFather} />
    </>
  );
};
