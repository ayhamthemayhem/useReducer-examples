import { useState } from 'react';

const FormWithUseStateLvl2 = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [username, setUsername] = useState('');

  return (
    <div>
      <form>
        <h2>Form with useState level 2</h2>
        <label htmlFor="username">Username</label>
        <input
          type="text"
          name="username"
          value={username}
          onChange={(event) => setUsername(event.target.value)}
        />
        <label htmlFor="email">Email</label>
        <input
          type="email"
          name="email"
          value={email}
          onChange={(event) => setEmail(event.target.value)}
        />
        <label htmlFor="password">Password</label>
        <input
          type="password"
          name="password"
          value={password}
          onChange={(event) => setPassword(event.target.value)}
        />
        <button
          type="button"
          onClick={() => {
            setUsername('');
            setEmail('');
            setPassword('');
          }}
        >
          Submit(reset)
        </button>
      </form>
    </div>
  );
};

export default FormWithUseStateLvl2;
