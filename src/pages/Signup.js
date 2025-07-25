import React, { useState } from 'react';
import SignupForm from './SignupForm';
import LoginForm from './LoginForm';
import { useNavigate } from 'react-router-dom';


function Signup() {
  const [users, setUsers] = useState([]);
  const [currentForm, setCurrentForm] = useState('signup');
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const navigate = useNavigate();

  const handleSignup = (newUser) => {
    const exists = users.some(
      (user) => user.email === newUser.email && user.phone === newUser.phone
    );

    if (exists) {
      alert('This user already exists. Please login instead.');
    } else {
      setUsers([...users, newUser]);
      alert('Signup successful! You can now login.');
      setCurrentForm('login');
    }
  };

  const handleLogin = (email, password) => {
    const userFound = users.find(
      (user) => user.email === email && user.password === password
    );
    if (userFound) {
      setIsLoggedIn(true);
    } else {
      alert('User not found or wrong password.');
    }
  };

  React.useEffect(() => {
    if (isLoggedIn) {
      navigate('/home');
    }
  }, [isLoggedIn, navigate]);


  return (
    <div>
      {currentForm === 'signup' ? (
        <>
          <SignupForm onSignup={handleSignup} />
          <p style={{ textAlign: 'center' }}>
            Already have an account?{' '}
            <button onClick={() => setCurrentForm('login')}>Login</button>
          </p>
        </>
      ) : (
        <>
          <LoginForm users={users} onLogin={handleLogin} />
          <p style={{ textAlign: 'center' }}>
            Don't have an account?{' '}
            <button onClick={() => setCurrentForm('signup')}>Sign up</button>
          </p>
        </>
      )}
    </div>
  );
}

export default Signup;
