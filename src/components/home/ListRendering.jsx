import React from "react";
import ListItem from "./ListItem";

const fruits = [
  {
    img: "https://5.imimg.com/data5/SELLER/Default/2023/9/344928632/OW/RQ/XC/25352890/yellow-mango.jpeg",
    name: "Mango",
    price: 1200
  },
  {
    img: "https://i.pinimg.com/originals/f9/86/e4/f986e4d28fa6ad24dfe90475dac6a248.jpg",
    name: "Apple",
    price: 100
  },
  {
    img: "https://w7.pngwing.com/pngs/675/836/png-transparent-banana-juice-cavendish-banana-fruit-eating-delicious-delicious-banana-food-tropical-fruit-eating.png",
    name: "Banana",
    price: 40
  },
  {
    img: "https://fruitique.in/cdn/shop/products/43_750x810.jpg",
    name: "Papaya",
    price: 60
  },
  {
    img: "https://www.spotlessfruits.com/cdn/shop/products/Guava-SpotlessFruits_1000x1000.png",
    name: "Guava",
    price: 80
  }
];

// const fruits = ["Mango", "Apple", "Banana", "Papaya", "Guava"];

function ListRendering() {
  return (
    <div
      style={{
        height: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center"
      }}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "8px",
          width: "300px",
          padding: "32px",
          backgroundColor: "lightblue"
        }}
      >
        {fruits.map((element, index) => {
          return <ListItem key={index} fruit={element} />;
        })}
      </div>
    </div>
  );
}

export default ListRendering;
