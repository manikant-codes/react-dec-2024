import React from "react";

function ListItem(props) {
  const { fruit } = props;
  return (
    <div
      style={{
        padding: "8px",
        border: "solid 1px #ddd",
        backgroundColor: "rgba(255, 255, 255, 0.5)",
        display: "flex",
        alignItems: "center",
        gap: "8px"
      }}
    >
      <img src={fruit.img} alt="" width={50} height={50} />
      <div>
        <p style={{ marginBottom: "8px" }}>{fruit.name}</p>
        <p>₹{fruit.price.toLocaleString("en-in")}</p>
      </div>
    </div>
  );
}

export default ListItem;
