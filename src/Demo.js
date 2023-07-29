import "./styles.css";
import { memo } from "react";

function Demo(props) {
  console.log("child");
  return (
    <div>
      <h1>Child Component</h1>
      <h5>{props.toDo.join(" - ")}</h5>
    </div>
  );
}

export default memo(Demo);
