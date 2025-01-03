import React from "react";

//   const arr = [
//     <p style={{ color: "orange" }}>Mango _</p>,
//     <p style={{ color: "orange" }}>Apple _</p>,
//     <p style={{ color: "orange" }}>Banana _</p>,
//     <p style={{ color: "orange" }}>Papaya _</p>,
//     <p style={{ color: "orange" }}>Guava _</p>
//   ];

function ListRendering() {
  const paragraphArray = [];
  const fruits = ["Mango", "Apple", "Banana", "Papaya", "Guava"];

  for (const fruit of fruits) {
    paragraphArray.push(<p style={{ color: "red" }}>{fruit}</p>);
  }

  return <div>{paragraphArray}</div>;
}

export default ListRendering;
