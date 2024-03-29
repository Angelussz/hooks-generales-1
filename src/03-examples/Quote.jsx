import React, { useLayoutEffect, useRef, useState } from "react";

export const Quote = ({ quote, author }) => {
  const pRef = useRef();
  const [size, setSize] = useState({
    width: 0,
    height: 0,
  });
  useLayoutEffect(() => {
    const {height, width}= pRef.current.getBoundingClientRect();
    setSize({width,height})
  }, [quote]);
  return (
    <>
      <blockquote className="blockquote text-end" style={{ display: "flex" }}>
        <p ref={pRef} className="mb-1">
          {quote}
        </p>
        <footer className="blockquote-footer">{author}</footer>
      </blockquote>
      <h5>{JSON.stringify(size)}</h5>
    </>
  );
};
