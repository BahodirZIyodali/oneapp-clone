import React, { useState } from 'react';

const AuthPage = () => {
  const [username, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isRegister, setIsRegister] = useState(false);

  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };  

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (isRegister) {
      fetch('https://oneapp-register.onrender.com/register', {
        method: 'POST',
        body: JSON.stringify({
          user_name:   username,
          email: email,
          user_password:  password
        }),
        headers: {
          'Content-type': 'application/json; charset=UTF-8',
        },
      })
      .then((response) => response.json())
      .then((data) => {
        alert('Registration successful');
        localStorage.setItem('token', data.token);
      })
      .catch((error) => {
        console.error('Registration failed:', error);
      });
    } 
    else {
      fetch('https://oneapp-register.onrender.com/login', {
        method: 'POST',
        body: JSON.stringify({
          email: email,
          user_password:  password
        }),
        headers: {
          'Content-type': 'application/json; charset=UTF-8',
        },
      })
      .then((response) => response.json())
      .then((data) => {
        alert('Login successful');
      })
      .catch((error) => {
        console.error('Login failed:', error);
      });
    }
    

    
  };

  return (
    <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-md-6 col-lg-4">
          <h1 className="mb-4">{isRegister ? 'Register' : 'Login'}</h1>
          <form onSubmit={handleSubmit}>
            {isRegister && (
              <div className="form-group">
                <label htmlFor="name">Name:</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  className="form-control"
                  value={username}
                  onChange={handleNameChange}
                  required
                />
              </div>
            )}
            <div className="form-group">
              <label htmlFor="email">Email:</label>
              <input
                type="email"
                id="email"
                name="email"
                className="form-control"
                value={email}
                onChange={handleEmailChange}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="password">Password:</label>
              <input
                type="password"
                id="password"
                name="password"
                className="form-control"
                value={password}
                onChange={handlePasswordChange}
                required
              />
            </div>
            <button type="submit" className="btn btn-primary mt-2">
              {isRegister ? 'Register' : 'Login'}
            </button>
          </form>
          <p className="mt-3">
            {isRegister
              ? 'Already have an account? '
              : 'Don\'t have an account? '}
            <button type="button" className="btn btn-link p-0" onClick={() => setIsRegister(!isRegister)}>
              {isRegister ? 'Login' : 'Register'}
            </button>
          </p>
        </div>
      </div>
    </div>
  );
};

export default AuthPage;
