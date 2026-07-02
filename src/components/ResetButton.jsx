import React from 'react';

function ResetButton({ onReset }) {
  return (
    <button className="primary-button reset-button" onClick={onReset}>
      Reset Game
    </button>
  );
}

export default ResetButton;
