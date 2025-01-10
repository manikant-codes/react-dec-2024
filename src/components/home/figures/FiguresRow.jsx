import React from "react";
import FigureCard from "./FigureCard";
import styles from "./figuresRow.module.css";

// const components = [
//   <FigureCard figure={232} desc="Clients" />,
//   <FigureCard figure={521} desc="Projects" />,
//   <FigureCard figure={1453} desc="Hours Of Support" />,
//   <FigureCard figure={32} desc="Workers" />
// ];

const data = [
  { figure: 232, desc: "Clients" },
  { figure: 521, desc: "Projects" },
  { figure: 1453, desc: "Hours Of Support" },
  { figure: 32, desc: "Workers" }
];

const components = data.map((value, index, array) => {
  return <FigureCard key={index} figure={value.figure} desc={value.desc} />;
});

function FiguresRow() {
  return <div className={styles.container}>{components}</div>;
}

export default FiguresRow;
