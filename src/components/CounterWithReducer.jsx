import { useReducer } from 'react';

const initialState = { count: 0 };

function counterReducer(state, action) {
  switch (action.type) {
    case 'increment':
      return { count: state.count + 1 };
    case 'decrement':
      return { count: state.count - 1 };
    case 'reset':
      return { count: initialState.count };
    default:
      throw new Error(`Unknown action type: ${action.type}`);
  }
}

function CounterWithReducer() {
  const [state, dispatch] = useReducer(counterReducer, initialState);
  return (
    <div>
      <h2>Counter with useReducer:</h2>
      <h3>count: {state.count}</h3>
      <button onClick={() => dispatch({ type: 'decrement' })}>-</button>
      <button onClick={() => dispatch({ type: 'increment' })}>+</button>
      <button onClick={() => dispatch({ type: 'reset' })}>reset</button>
    </div>
  );
}
export default CounterWithReducer;
