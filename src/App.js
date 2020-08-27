import React, { useState } from 'react';
import './App.css';

function App() {
  const [team1Score, setTeam1Score] = useState(0)
  const [team2Score, setTeam2Score] = useState(0)
  const [team3Score, setTeam3Score] = useState(0)
  const [team4Score, setTeam4Score] = useState(0)

  const handleReset = () => {
    setTeam1Score(0)
    setTeam2Score(0)
    setTeam3Score(0)
    setTeam4Score(0)
  }

  return (
    <div className="App">
      <h1>ScoreKeeper</h1>
      <button className="reset-button" onClick={handleReset}>RESET</button>
      <section className="team-section">
        <h2 style={{color: 'red'}} className="team-text">Team 1</h2>
        <h2 className="team-text">{team1Score}</h2>
        <div>
          <button onClick={() => setTeam1Score(team1Score - 1)}>- 1</button>
          <button onClick={() => setTeam1Score(team1Score + 1)}>+ 1</button>
        </div>
      </section>
      <section className="team-section">
        <h2 style={{color: 'blue'}} className="team-text">Team 2</h2>
        <h2 className="team-text">{team2Score}</h2>
        <div>
          <button onClick={() => setTeam2Score(team2Score - 1)}>- 1</button>
          <button onClick={() => setTeam2Score(team2Score + 1)}>+ 1</button>
        </div>
      </section>
      <section className="team-section">
        <h2 style={{color: 'yellow'}} className="team-text">Team 3</h2>
        <h2 className="team-text">{team3Score}</h2>
        <div>
          <button onClick={() => setTeam3Score(team3Score - 1)}>- 1</button>
          <button onClick={() => setTeam3Score(team3Score + 1)}>+ 1</button>
        </div>
      </section>
      <section className="team-section">
        <h2 style={{color: 'green'}} className="team-text">Team 4</h2>
        <h2 className="team-text">{team4Score}</h2>
        <div>
          <button onClick={() => setTeam4Score(team4Score - 1)}>- 1</button>
          <button onClick={() => setTeam4Score(team4Score + 1)}>+ 1</button>
        </div>
      </section>
    </div>
  );
}

export default App;
