import React from 'react';
import './History.css';

interface Milestone {
  year: number;
  title: string;
  description: string;
}

function getMilestonesFrom(milestones: Milestone[], fromYear: number): Milestone[] {
  return milestones.filter((m) => m.year >= fromYear);
}

const milestones: Milestone[] = [
  {
    year: 1849,
    title: "Meucci's First Design",
    description:
      "Italian inventor Antonio Meucci developed an early voice communication device he called the teletrofono, though he lacked funds to fully patent it.",
  },
  {
    year: 1876,
    title: 'Bell Patents the Telephone',
    description:
      'Alexander Graham Bell received U.S. Patent #174,465. Days later he made the first successful phone call to his assistant Thomas Watson.',
  },
  {
    year: 1878,
    title: 'First Telephone Exchange',
    description:
      "The world's first commercial telephone exchange opened in New Haven, Connecticut, connecting 21 subscribers.",
  },
  {
    year: 1915,
    title: 'First Transcontinental Call',
    description:
      'Bell called Watson from New York to San Francisco, spanning 3,400 miles.',
  },
  {
    year: 1973,
    title: 'First Mobile Phone Call',
    description:
      'Motorola engineer Martin Cooper made the first handheld cellular phone call. The phone weighed 2.5 pounds.',
  },
  {
    year: 2007,
    title: 'The Smartphone Era',
    description:
      'Apple introduced the iPhone, redefining what a telephone could be and launching the modern smartphone era.',
  },
];

const History: React.FC = () => {
  const displayedMilestones: Milestone[] = getMilestonesFrom(milestones, 1849);

  return (
    <div>
      <h1>History of the Telephone</h1>
      <hr />

      <img src="/teletrofono.png" alt="Antonio Meucci's Teletrofono" className='page-img' />
      <p>
        The telephone did not appear overnight. It was the result of decades of experimentation,
        competition, and legal battles. Below are some of the key moments in its history.
      </p>

      <h2>Key Milestones</h2>

      <table className="milestone-table">
        <thead>
          <tr>
            <th>Year</th>
            <th>Event</th>
            <th>Description</th>
          </tr>
        </thead>
        <tbody>
          {displayedMilestones.map((m) => (
            <tr key={m.year}>
              <td>{m.year}</td>
              <td>{m.title}</td>
              <td>{m.description}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default History;
