import React from 'react';

function PlayerTurn({ currentPlayer }) {
  return (
    <div className="player-turn">
      Current Turn: <strong>{currentPlayer}</strong>
    </div>
  );
}

export default PlayerTurn;
