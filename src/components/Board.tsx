import { useState } from "react";
import Square from "./Square.tsx";
import Card from "./Card.tsx";
import SymbolEnum from "../util/Types.ts";

type Props = {
    xIsNext: boolean;
    squares: (string | null)[];
    onPlay: (nextSquares: (string | null)[]) => void;
    onRematch: () => void;
}

function calculateWinner(squares: (string | null)[]) {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
  ];
  for (let i = 0; i < lines.length; i += 1) {
    const [a, b, c] = lines[i];
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a];
    }
  }
  return null;
}

function Board({
  xIsNext, squares, onPlay, onRematch
}: Props) {
  const [playerX, setPlayerX] = useState(`Player1`);
  const [playerO, setPlayerO] = useState(`Player2`);

  const winner = calculateWinner(squares);
  const draw = squares.every((el) => el != null);
  let gameOverMessage;

  if (winner) {
    if (winner === SymbolEnum.X) {
      gameOverMessage = `${playerX} won!`;
    } else {
      gameOverMessage = `${playerO} won!`;
    }
  } else if (draw) {
    gameOverMessage = `It's a draw!`;
  }

  function handleClick(i: number) {
    if (squares[i] || calculateWinner(squares)) {
      return;
    }
    const nextSquares = squares.slice();
    if (xIsNext) {
      nextSquares[i] = SymbolEnum.X;
    } else {
      nextSquares[i] = SymbolEnum.O;
    }
    onPlay(nextSquares);
  }

  const items = squares.map((item, index) => (
    <div className="w-1/3"><Square value={item} onSquareClick={() => handleClick(index)} /></div>
  ));

  return (
    <div className="m-10 ">
      <div className="status">{status}</div>
      <div className="w-80 relative">
        <div className="flex flex-wrap justify-center">
          {items}
        </div>
        {(winner !== null || draw) && (
        <div className="absolute top-0 bg-blue-gray-500 opacity-90 w-full h-full">

          <h1 className="pt-2 text-center text-3xl">Game Over!</h1>

          <div className="text-center mt-4">{gameOverMessage}</div>

          <div className="text-center mt-8">
            <button
              type="button"
              onClick={onRematch}
              className="bg-white hover:bg-gray-100 rounded-xl border-black border p-2"
            >Rematch
            </button>
          </div>

        </div>
        )}
      </div>

      <div className="grid grid-rows-2 pt-2 w-80 gap-2">
        <Card symbol="X" active={xIsNext} winner={winner} draw={draw} player={playerX} setPlayer={setPlayerX} />
        <Card symbol="O" active={!xIsNext} winner={winner} draw={draw} player={playerO} setPlayer={setPlayerO} />
      </div>

    </div>
  );
}

export default Board;
