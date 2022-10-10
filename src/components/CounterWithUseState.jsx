import { useState } from 'react';

function CounterWithUseState() {
  const [count, setCount] = useState(0);
  return (
    <div>
      <h2>Counter with useState:</h2>
      <h3>count: {count}</h3>
      <button onClick={() => setCount((prevCount) => prevCount - 1)}>-</button>
      <button onClick={() => setCount(count + 1)}>+</button>
      <button onClick={() => setCount(0)}>reset</button>
    </div>
  );
}
export default CounterWithUseState;
