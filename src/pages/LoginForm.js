import React, { useState } from 'react';
import logo from'../assets/logo.svg'
function LoginForm({ users, onLogin }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = (e) => {
    e.preventDefault();
    onLogin(email, password);
  };

  return (
    <form onSubmit={handleLogin} className="formcontent">
        <img src={logo}/>
      <div className='loginInputs'>
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
      </div>
      <div className='submitButton'>
        <button type="submit" className='LoginButton'>Login</button>
      </div>
    </form>
  );
}

export default LoginForm;
