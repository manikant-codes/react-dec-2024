import React, { useState } from "react";

function UseStateCountDemo(props) {
  //   const array = useState(0);
  //   const count = array[0];
  //   const setCount = array[1];
  // OR
  const [count, setCount] = useState(0);
  //   const { count, setCount } = props;

  function handlePlus() {
    // count++;
    setCount(count + 1);
  }

  function handleMinus() {
    // count--;
    setCount(count - 1);
  }

  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        height: "100vh"
      }}
    >
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: "8px",
          backgroundColor: "#f1f1f1",
          padding: "32px",
          borderRadius: "8px",
          border: "solid 1px #ccc"
        }}
      >
        <button onClick={handleMinus} style={{ cursor: "pointer" }}>
          Minus
        </button>
        <p style={{ fontSize: "2rem" }}>{count}</p>
        <button onClick={handlePlus} style={{ cursor: "pointer" }}>
          Plus
        </button>
      </div>
    </div>
  );
}

export default UseStateCountDemo;
