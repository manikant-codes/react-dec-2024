import React from "react";

// const fruits = [
//   {
//     img: "https://5.imimg.com/data5/SELLER/Default/2023/9/344928632/OW/RQ/XC/25352890/yellow-mango.jpeg",
//     name: "Mango",
//     price: 120
//   },
//   {
//     img: "https://i.pinimg.com/originals/f9/86/e4/f986e4d28fa6ad24dfe90475dac6a248.jpg",
//     name: "Apple",
//     price: 100
//   },
//   {
//     img: "https://w7.pngwing.com/pngs/675/836/png-transparent-banana-juice-cavendish-banana-fruit-eating-delicious-delicious-banana-food-tropical-fruit-eating.png",
//     name: "Banana",
//     price: 40
//   },
//   {
//     img: "https://fruitique.in/cdn/shop/products/43_750x810.jpg",
//     name: "Papaya",
//     price: 60
//   },
//   {
//     img: "https://www.spotlessfruits.com/cdn/shop/products/Guava-SpotlessFruits_1000x1000.png",
//     name: "Guava",
//     price: 80
//   }
// ];

// const fruits = [
//   <p>Mango</p>,
//   <p>Apple</p>,
//   <p>Banana</p>,
//   <p>Papaya</p>,
//   <p>Guava</p>
// ];

const fruits = ["Mango", "Apple", "Banana", "Papaya", "Guava"];
// const fruitsList = [];
// for (const fruit of fruits) {
//   fruitsList.push(<p>{fruit}</p>);
// }

const fruitsList = fruits.map((value, index, array) => {
  return <p>{value}</p>;
});

function ListRendering() {
  return (
    <>
      {/* <p>Mango</p>
      <p>Apple</p>
      <p>Banana</p>
      <p>Papaya</p>
      <p>Guava</p> */}
      {fruitsList}
    </>
  );
}

export default ListRendering;
