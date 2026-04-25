import React from 'react';
import './Impact.css';

const Impact: React.FC = () => {
  return (
    <div>
      <h1>Impact of the Telephone</h1>
      <hr />

      <img src="/cellphone.jpg" alt="Person using a smartphone" className="page-img" />

      <p>
        Before the telephone, sending a message across long distances meant writing a letter
        that could take days or weeks to arrive. The telephone changed all of that instantly.
        Businesses could coordinate across cities, families could stay connected, and emergency
        services could be reached in seconds.
      </p>

      <h2>Business and Commerce</h2>
      <p>
        The telephone transformed how businesses operate. Sales calls, customer service, and
        business negotiations all moved to the phone. It made it possible to run operations
        across multiple locations without being there in person.
      </p>

      <h2>Emergency Services</h2>
      <p>
        The introduction of emergency phone lines like 911 (established in the U.S. in 1968)
        meant that police, fire, and medical help could be summoned instantly. This has saved
        countless lives over the decades.
      </p>

      <h2>Social Connection</h2>
      <p>
        Families and friends no longer needed to be in the same place to communicate. The
        telephone was the first technology that made real-time personal conversation across
        distance a normal part of everyday life.
      </p>

      <h2>The Digital Age</h2>
      <p>
        Telephone lines became the backbone of the early internet through dial-up modems.
        Today, the smartphone — a telephone at its core — is the primary computing device
        for billions of people worldwide.
      </p>
    </div>
  );
};

export default Impact;
