import { createRoot } from "react-dom/client";
import Title from "./Title.jsx";

// function title(name, like) {
//   return (
//     <h1>
//       Hello my name is {name}! I like {like}.
//     </h1>
//   );
// }

const myDiv = document.getElementById("mydiv");
const rootElement = createRoot(myDiv);
// rootElement.render(title("Hitendra", "travelling"));
rootElement.render(
  <>
    <Title
      name="Akshay"
      favourite="pizza"
      age={12}
      bool={true}
      big={10n}
      fn={() => {}}
      arr={[1, 2, 3]}
      obj={{ color: "red", number: 12 }}
      comp={<Title />}
    />
    <Title name="Hemant" favourite="driving" />
    <Title name="Vivek" favourite="talking" />
  </>
);
