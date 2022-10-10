import { useState } from 'react';

const FormWithUseStateLvl3 = () => {
  const [username, setUsername] = useState('');
  const [error, setError] = useState(null);
  const [touched, setTouched] = useState(false);

  return (
    <div>
      <form>
        <h2>Form with useState level 3</h2>
        <label htmlFor="username">Username</label>
        <input
          className={error ? 'error' : ''}
          type="text"
          name="username"
          value={username}
          onChange={(event) => {
            setUsername(event.target.value);
            setTouched(true);
            setError(touched ? event.target.value.length === 0 : null);
          }}
        />
        <button
          type="button"
          onClick={() => {
            setUsername('');
            setError('');
            setTouched(false);
          }}
        >
          Submit(reset)
        </button>
      </form>
    </div>
  );
};

export default FormWithUseStateLvl3;
