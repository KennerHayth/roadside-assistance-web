import { useState } from "react";

const Counter: React.FC = () => {
  const [count, setCount] = useState<number>(0);

  const increment = (): void => setCount((prev) => prev + 1);
  const decrement = (): void => setCount((prev) => prev - 1);

  return (
    <div>
      <p>Count: {count}</p>
      <button type="button" onClick={increment}>+</button>
      <button type="button" onClick={decrement}>-</button>
    </div>
  );
};

export default Counter;