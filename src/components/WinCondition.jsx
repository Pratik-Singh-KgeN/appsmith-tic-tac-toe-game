import React from 'react';

function WinCondition({ winner }) {
  if (!winner) return null;
  const message = winner === 'Draw' ? "It's a draw!" : `Winner: ${winner}`;
  return (
    <div className="win-condition">
      {message}
    </div>
  );
}

export default WinCondition
