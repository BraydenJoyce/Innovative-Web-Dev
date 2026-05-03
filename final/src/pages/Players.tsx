import React, { useState } from 'react';

interface Player {
  id: number;
  name: string;
  team: string;
  position: string;
}

const Players: React.FC = () => {
  const [players, setPlayers] = useState<Player[]>([
    { id: 1, name: 'Wayne Gretzky', team: 'Edmonton Oilers', position: 'Center' },
    { id: 2, name: 'Sidney Crosby', team: 'Pittsburgh Penguins', position: 'Center' },
    { id: 3, name: 'Connor McDavid', team: 'Edmonton Oilers', position: 'Center' },
  ]);

  const [name, setName] = useState('');
  const [team, setTeam] = useState('');
  const [position, setPosition] = useState('');

  const addPlayer = () => {
    if (!name || !team || !position) return;
    const newPlayer: Player = {
      id: Date.now(),
      name,
      team,
      position,
    };
    setPlayers([...players, newPlayer]);
    setName('');
    setTeam('');
    setPosition('');
  };

  const removePlayer = (id: number) => {
    setPlayers(players.filter((p) => p.id !== id));
  };

  return (
    <div>
      <h1>Player List</h1>
      <p className="subtitle">All of your favorite hockey players</p>

      <div className="form-row">
        <div className="form-group">
          <label>Player:</label>
          <input
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Enter Player"
          />
        </div>
        <div className="form-group">
          <label>Team:</label>
          <input
            value={team}
            onChange={(e) => setTeam(e.target.value)}
            placeholder="Enter Team"
          />
        </div>
        <div className="form-group">
          <label>Position:</label>
          <input
            value={position}
            onChange={(e) => setPosition(e.target.value)}
            placeholder="Enter Position"
          />
        </div>
        <button onClick={addPlayer} className="btn-submit">
          Submit
        </button>
      </div>

      <h2>Players</h2>
      <table className="data-table">
        <thead>
          <tr>
            <th>Player</th>
            <th>Team</th>
            <th>Position</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {players.map((p) => (
            <tr key={p.id}>
              <td>{p.name}</td>
              <td>{p.team}</td>
              <td>{p.position}</td>
              <td>
                <button onClick={() => removePlayer(p.id)} className="btn-remove">
                  X
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Players;
