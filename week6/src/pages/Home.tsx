import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css';

// TypeScript function: calculates how many years ago the telephone was invented
function getYearsSinceInvention(inventionYear: number): number {
  return new Date().getFullYear() - inventionYear;
}

const INVENTION_YEAR = 1876;

const Home: React.FC = () => {
  const yearsSince: number = getYearsSinceInvention(INVENTION_YEAR);

  return (
    <div>
      <h1>The Telephone</h1>
      <hr />

      <img src="/telephoneagb.webp" alt="Alexander Graham Bell's telephone" className="page-img" />

      <p>
        The telephone is one of the most important inventions in human history.
        Patented by Alexander Graham Bell on March 7, 1876, it changed how people
        communicate across long distances — turning weeks of waiting into an instant conversation.
      </p>
      <br />
      <p>
        The first words ever spoken over a telephone were by Bell to his assistant Thomas Watson:
        <em> "Mr. Watson, come here — I want to see you."</em>
      </p>
      <br />
      <p>The telephone was invented <strong>{yearsSince} years ago.</strong></p>
      <br />
      <p>
        <Link to="/history">View History</Link> | <Link to="/impact">View Impact</Link>
      </p>
    </div>
  );
};

export default Home;
