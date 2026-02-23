import { useState } from "react";

export default function Counter() {
  const [count, setCount] = useState(0);

  const handleClick = () => {
    // console.log("btn clicked");
    setCount(0);
    const newCount = count + 1;
    setCount(newCount);
  };

  const counterStyle = {
    border: " 3px solid red",
  };

  return (
    <div style={counterStyle}>
      <h3>Count : {count}</h3>
      <button onClick={handleClick}>Add</button>
    </div>
  );
}
