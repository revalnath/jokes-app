import React, { useEffect, useState } from 'react';
import { Link, Navigate } from 'react-router-dom';

const HomePage = () => {
  const [jokeData, setJokeData] = useState([]);

  const fetchJokes = () => {
    fetch(
      'https://v2.jokeapi.dev/joke/any?format=json&blacklistFlags=nsfw,sexist&type=single&lang=EN&amount=10'
    )
      .then((response) => response.json())
      .then((data) => {
        setJokeData(data.jokes);
      });
  };

  useEffect(fetchJokes, []);

  console.log(jokeData);

  const jokeCard = jokeData.map((data) => {
    return (
      <li
        className="bg-secondary-subtle text-black border border-dark m-2 p-2 w-75 fs-5"
        key={data.id}
      >
        {data.joke}
      </li>
    );
  });

  const handleLogout = () => {
    localStorage.clear();
    window.location.reload();
  };

  const loggedUser = localStorage.getItem('loggedin');
  console.log(loggedUser);

  return loggedUser ? (
    <div
      className="d-flex flex-column bg-light vh-100"
      style={{
        overflow: 'auto',
        backgroundImage:
          "url('https://img.freepik.com/free-vector/hand-drawn-world-emoji-day-background-with-emoticons_23-2149418958.jpg?w=1380&t=st=1710408957~exp=1710409557~hmac=4d8eb8dad75711eff5327fd5680a971a8ec80659db418a6da7b3399c9835920e')",
        backgroundSize: 'cover',
      }}
    >
      <div className="bg-dark d-flex justify-content-between align-items-center p-3 border-bottom">
        <Link
          to="/"
          className="fs-4 fw-bold text-white m-0 text-decoration-none"
        >
          Jokes App
        </Link>
        <button className="btn btn-light" onClick={handleLogout}>
          Logout
        </button>
      </div>
      <h3 className="m-3 text-center text-decoration-underline">
        Let Find Out What's Funny Today
      </h3>
      <ul className="d-flex flex-column justify-content-center align-items-center text-center list-unstyled w-full m-2">
        {jokeCard}
      </ul>
      <button
        onClick={() => fetchJokes()}
        className="btn btn-dark align-self-center mt-2 mb-2"
      >
        Refresh Jokes
      </button>
    </div>
  ) : (
    <Navigate to="/login" />
  );
};

export default HomePage;
