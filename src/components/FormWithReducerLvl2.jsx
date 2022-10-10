import { useReducer } from 'react';

const initialValue = {
  username: '',
  email: '',
  password: '',
};

const reducer = (state, action) => {
  switch (action.type) {
    case 'textInput':
      return { ...state, [action.payload.key]: action.payload.value };
    case 'reset':
      return initialValue;
    default:
      throw new Error(`Unknown action type: ${action.type}`);
  }
};

const FormWithReducerLvl2 = () => {
  const [state, dispatch] = useReducer(reducer, initialValue);
  return (
    <form>
      <h2>Form with reducer level 2</h2>
      <label htmlFor="username">Username</label>
      <input
        type="text"
        name="username"
        value={state.username}
        onChange={(event) =>
          dispatch({
            type: 'textInput',
            payload: { key: event.target.name, value: event.target.value },
          })
        }
      />
      <label htmlFor="email">Email</label>
      <input
        type="email"
        name="email"
        value={state.email}
        onChange={(event) =>
          dispatch({
            type: 'textInput',
            payload: { key: event.target.name, value: event.target.value },
          })
        }
      />
      <label htmlFor="password">Password</label>
      <input
        name="password"
        type="password"
        value={state.password}
        onChange={(event) =>
          dispatch({
            type: 'textInput',
            payload: { key: event.target.name, value: event.target.value },
          })
        }
      />
      <button type="button" onClick={() => dispatch({ type: 'reset' })}>
        Submit(reset)
      </button>
    </form>
  );
};

export default FormWithReducerLvl2;
