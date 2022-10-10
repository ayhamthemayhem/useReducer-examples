import { useReducer } from 'react';

const initialValue = {
  value: '',
  touched: false,
  error: null,
};

const reducer = (state, action) => {
  switch (action.type) {
    case 'update':
      return {
        value: action.payload.value,
        touched: true,
        error: action.payload.error,
      };
    case 'reset':
      return initialValue;
    default:
      throw new Error(`Unknown action type: ${action.type}`);
  }
};

const FormWithReducerLvl3 = () => {
  const [state, dispatch] = useReducer(reducer, initialValue);

  return (
    <form>
      <h2>Form with reducer level 3</h2>
      <label htmlFor="email">Email</label>
      <input
        name="email"
        className={state.error ? 'error' : ''}
        value={state.value}
        onChange={(event) =>
          dispatch({
            type: 'update',
            payload: {
              value: event.target.value,
              error: state.touched ? event.target.value.length === 0 : null,
            },
          })
        }
      />
      <button type="button" onClick={() => dispatch({ type: 'reset' })}>
        Submit(reset)
      </button>
    </form>
  );
};

export default FormWithReducerLvl3;
