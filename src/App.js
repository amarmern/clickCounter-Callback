import React, { useCallback, useState } from "react";
import "./styles.css";

const Counter = (props) => {
  const [count, setCount] = useState(0);
  const clickCounter = () => {
    setCount((count) => count + 1);
    props.callbackParent(count);
  };
  return (
    <div>
      {" "}
      <button onClick={clickCounter}>counter </button>{" "}
    </div>
  );
};

export default function App() {
  const [count, setCount] = useState(0);
  const callback = useCallback((count) => {
    setCount(count);
  }, []);
  return (
    <div className="App">
      <Counter callbackParent={callback} />
      {count}
    </div>
  );
}
