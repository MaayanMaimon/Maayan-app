"use client";

import React, { useState } from "react";
import styles from "./page.module.css";

type SquareValue = "X" | "O" | null;

// Single square on the board
function Square({
  value,
  onClick,
}: {
  value: SquareValue;
  onClick: () => void;
}) {
  // Extra class to color X and O differently
  const extraClass =
    value === "X"
      ? styles.squareX
      : value === "O"
      ? styles.squareO
      : "";

  return (
    <button
      className={`${styles.square} ${extraClass}`}
      onClick={onClick}
    >
      {value}
    </button>
  );
}

// Basic winner calculation, same idea as the React tutorial
function calculateWinner(squares: SquareValue[]): SquareValue {
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

  for (const [a, b, c] of lines) {
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a];
    }
  }
  return null;
}

// Main game board: holds the state and game logic
function Board() {
  // 9 squares, all empty at the beginning
  const [squares, setSquares] = useState<SquareValue[]>(Array(9).fill(null));
  // true -> X plays next, false -> O
  const [xIsNext, setXIsNext] = useState(true);

  function handleClick(index: number) {
    // Ignore clicks if we already have a winner or the square is taken
    if (calculateWinner(squares) || squares[index]) return;

    const next = squares.slice();
    next[index] = xIsNext ? "X" : "O";

    setSquares(next);
    setXIsNext(!xIsNext);
  }

  const winner = calculateWinner(squares);
  const isDraw = !winner && !squares.includes(null);

  const status = winner
    ? `Winner: ${winner}`
    : isDraw
    ? "Draw!"
    : `Next player: ${xIsNext ? "X" : "O"}`;

  // Add a CSS class when there is a winner to trigger the glow animation
  const wrapperClassName = `${styles.wrapper} ${winner ? styles.winner : ""}`;

  return (
    <div className={wrapperClassName}>
      <p className={styles.status}>{status}</p>

      <div className={styles.board}>
        {squares.map((val, idx) => (
          <Square key={idx} value={val} onClick={() => handleClick(idx)} />
        ))}
      </div>

      <button
        className={styles.restartButton}
        onClick={() => {
          // Reset the board and start again with X
          setSquares(Array(9).fill(null));
          setXIsNext(true);
        }}
      >
        Restart game
      </button>
    </div>
  );
}

// Page component for /tic-tac-toe
export default function TicTacToePage() {
  return (
    <main className={styles.container}>
      <h1 className={styles.title}>Tic-Tac-Toe</h1>
      <Board />
    </main>
  );
}
