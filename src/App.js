import "./styles.css";
import { useState } from "react";
import Demo from "./Demo";

export default function App() {
  const [count, setCount] = useState(0);
  const [todo, setTodo] = useState(["todo"]);
  return (
    <div className="App">
      <h4>
        Memoize child component to prevent re-render when parent state changes
      </h4>
      <h1>Parent Component</h1>
      <h5>{count}</h5>
      <button
        onClick={() => {
          setCount((st) => st + 1);
          // setTodo([...todo, `${count}`]);
        }}
      >
        Increment
      </button>
      <Demo toDo={todo} />
    </div>
  );
}
