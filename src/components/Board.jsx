import React from 'react';
import Square from './Square';

function Board({ board, onSquareClick }) {
  return (
    <div className="board">
      {board.map((value, idx) => (
        <Square key={idx} value={value} onClick={() => onSquareClick(idx)} />
      ))}
    </div>
  );
}

export default Board;
