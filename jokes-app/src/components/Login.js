import React, { useState } from 'react';
import { useNavigate, Navigate } from 'react-router-dom';

const Login = () => {
  const defaultUsername = 'shubham';
  const defaultPassword = '123456';

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const [showPassword, setShowPassword] = useState(false);

  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();

    if (username === '' || password === '') {
      setError('Please Enter All Credentials');
    } else if (username === defaultUsername && password === defaultPassword) {
      localStorage.setItem('loggedin', true);
      navigate('/');
    } else {
      setError('Wrong Credentials');
    }
  };

  const loggedUser = localStorage.getItem('loggedin');

  return loggedUser ? (
    <Navigate to={'/'} />
  ) : (
    <div
      className="vh-100 d-flex flex-column justify-content-center align-items-center"
      style={{
        backgroundImage:
          "url('https://img.freepik.com/free-vector/emoji-summer-background_79603-1589.jpg?w=1380&t=st=1710408738~exp=1710409338~hmac=71e8c51ea1bdca65c8c92ec8ca6f0d9263204db140ab98a08b15e03e46f3834f')",
        backgroundSize: 'cover',
      }}
    >
      <div className="d-flex flex-column justify-content-evenly align-items-center bg-light m-2 p-3 p-md-4 p-lg-5 h-50 rounded bg-opacity-75">
        <h1 className="text-black">Jokes App</h1>
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label className="text-black fs-5 mb-1" htmlFor="username">
              Username
            </label>
            <input
              value={username}
              onChange={(e) => {
                setUsername(e.target.value);
              }}
              className="border border-0 p-2 w-100"
              id="username"
              type="text"
              placeholder="Enter Username....."
              style={{ outline: 'none' }}
            />
          </div>
          <div className="mb-3">
            <label className="text-black fs-5 mb-1" htmlFor="password">
              Password
            </label>
            <input
              value={password}
              onChange={(e) => {
                setPassword(e.target.value);
              }}
              className="border border-0 p-2 w-100"
              id="password"
              type={`${showPassword ? 'text' : 'password'}`}
              placeholder="Enter Password....."
              style={{ outline: 'none' }}
            />
            <p
              onClick={() => setShowPassword(!showPassword)}
              style={{ cursor: 'pointer' }}
              className={`text-end mt-2 ${
                showPassword ? 'text-danger fw-bold' : 'text-black'
              }`}
            >
              Show Password
            </p>
          </div>
          <button type="submit" className="btn btn-primary w-100 mt-4 fs-5">
            Login
          </button>
        </form>
        {error && (
          <p
            style={{ position: 'fixed', bottom: '0' }}
            className="bg-light m-2 p-3 rounded bg-opacity-75 text-danger fw-bold fs-5"
          >
            {error}
          </p>
        )}
      </div>
      <div className="bg-light m-2 p-2 p-md-3 p-lg-4 rounded bg-opacity-75">
        <p className="text-center text-black fs-5 m-0">Username: shubham</p>
        <p className="text-center text-black fs-5 m-0">Password: 123456</p>
      </div>
    </div>
  );
};

export default Login;
