import React, { useState } from "react";

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

function UseStateDemo() {
  //   const arr = useState("Ram");
  //   const state = arr[0];
  //   const setState = arr[1];
  // OR
  const [colorHex, setColorHex] = useState(getRandomHexColor());

  function changeColorHex() {
    const newColorHex = getRandomHexColor();
    setColorHex(newColorHex);
    // colorHex = newColorHex;
    // console.log("colorHex", colorHex);
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
          border: "solid 1px #ccc",
          borderRadius: "8px",
          padding: "16px",
          height: "256px",
          width: "256px",
          display: "grid",
          gridTemplateRows: "1fr auto",
          gap: "8px"
        }}
        onClick={changeColorHex}
      >
        <div
          style={{
            flexGrow: 1,
            backgroundColor: colorHex,
            height: "100%",
            borderRadius: "8px"
          }}
        />
        <p>{colorHex}</p>
      </div>
    </div>
  );
}

export default UseStateDemo;
