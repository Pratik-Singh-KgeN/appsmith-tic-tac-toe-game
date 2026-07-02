import React, { useState, useEffect } from 'react';
import './styles.css';
import Board from './components/Board';
import PlayerTurn from './components/PlayerTurn';
import WinCondition from './components/WinCondition';
import ResetButton from './components/ResetButton';
import Scoreboard from './components/Scoreboard';

function App() {
  const emptyBoard = Array(9).fill(null);
  const [board, setBoard] = useState(emptyBoard);
  const [currentPlayer, setCurrentPlayer] = useState('X');
  const [winner, setWinner] = useState(null);
  const [isDark, setIsDark] = useState(false);
  const [scores, setScores] = useState({ X: 0, O: 0, draws: 0 });

  // Apply dark mode class to the root element
  useEffect(() => {
    document.documentElement.classList.toggle('dark', isDark);
  }, [isDark]);

  const toggleDarkMode = () => setIsDark(prev => !prev);

  const checkWinner = (boardState) => {
    const lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];
    for (let [a, b, c] of lines) {
      if (
        boardState[a] &&
        boardState[a] === boardState[b] &&
        boardState[a] === boardState[c]
      ) {
        return boardState[a];
      }
    }
    return boardState.every(cell => cell) ? 'Draw' : null;
  };

  const handleSquareClick = (idx) => {
    if (board[idx] || winner) return;

    const newBoard = board.slice();
    newBoard[idx] = currentPlayer;
    const result = checkWinner(newBoard);

    setBoard(newBoard);

    if (result) {
      setWinner(result);
      if (result === 'Draw') {
        setScores(prev => ({ ...prev, draws: prev.draws + 1 }));
      } else {
        setScores(prev => ({ ...prev, [result]: prev[result] + 1 }));
      }
    } else {
      setCurrentPlayer(prev => (prev === 'X' ? 'O' : 'X'));
    }
  };

  const resetGame = () => {
    setBoard(emptyBoard);
    setCurrentPlayer('X');
    setWinner(null);
  };

  return (
    <div className="app">
      <header className="header">
        <h1>Tic Tac Toe</h1>
        <button className="primary-button toggle-button" onClick={toggleDarkMode}>
          {isDark ? 'Light Mode' : 'Dark Mode'}
        </button>
      </header>
      <main className="container">
        <Scoreboard scores={scores} />
        <PlayerTurn currentPlayer={currentPlayer} />
        <Board board={board} onSquareClick={handleSquareClick} />
        {winner && <WinCondition winner={winner} />}
        <ResetButton onReset={resetGame} />
      </main>
    </div>
  );
}

export default App;
