export default function Title(props) {
  console.log("props", props);

  return (
    <>
      <h1>
        Hello my name is <span style={{ color: "green" }}>{props.name}</span>! I
        like {props.favourite}.
      </h1>
      <img src="vite.svg" alt="" />
      <p>Color: {props.obj?.color} </p>
    </>
  );
}
