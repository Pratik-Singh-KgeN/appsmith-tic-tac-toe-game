import React from 'react';

function Scoreboard({ scores }) {
  return (
    <div className="scoreboard">
      <div>Score – X: {scores.X}</div>
      <div>Score – O: {scores.O}</div>
      <div>Draws: {scores.draws}</div>
    </div>
  );
}

export default Scoreboard;
