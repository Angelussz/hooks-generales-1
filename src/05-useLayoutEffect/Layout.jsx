import React from "react";
import { useFetch,useCounter } from "../hooks";
import { LoadingQuote,Quote } from "../03-examples";
export const Layout = () => {
  const {increment,decrement,counter,reset}=useCounter(1)
  const { data, isLoading, hasError } = useFetch(
    `https://api.breakingbadquotes.xyz/v1/quotes/${counter}`
  );
  // console.log({ data, isLoading, hasError });
  const {author, quote} = !!data && data[0];
  return (
    <>
      <h1>Breaking</h1>
      <hr />
      {isLoading ? (
        <LoadingQuote />
      ) : (
        <Quote author={author} quote={quote} />
      )}
      <button className="btn btn-primary" onClick={()=>{
        if(counter>=5){
          reset();
          return
        }
        increment();
      }}>
        Next Quote
      </button>
    </>
  );
};
