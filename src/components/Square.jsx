import React from 'react';

function Square({ value, onClick }) {
  return (
    <button
      className="square"
      onClick={onClick}
      aria-label={`Square ${value ? value : 'empty'}`}
    >
      {value}
    </button>
  );
}

export default Square;
