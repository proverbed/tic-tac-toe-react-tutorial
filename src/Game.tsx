import { useState } from "react";
import Board from "./components/Board.tsx";

function Game() {
  const [history, setHistory] = useState([Array(9).fill(null)]);
  const [currentMove, setCurrentMove] = useState(0);
  const xIsNext = currentMove % 2 === 0;
  const currentSquares = history[currentMove];

  function handlePlay(nextSquares: (string | null)[]) {
    const nextHistory = [...history.slice(0, currentMove + 1), nextSquares];
    setHistory(nextHistory);
    setCurrentMove(nextHistory.length - 1);
  }

  function jumpTo(nextMove: number) {
    setCurrentMove(nextMove);
  }

  const moves = history.map((_, move) => {
    let description;
    if (move > 0) {
      description = `Go to move # ${move}`;
    } else {
      description = "Go to game start";
    }
    return (
      <li key={move} className="m-4">
        {currentMove === move ? <div>{description}</div> : (
          <button type="button" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" onClick={() => jumpTo(move)}>
            {description}
          </button>
        )}
      </li>
    );
  });

  return (
    <div className="bg-neutral w-full">
      <div className="grid md:grid-cols-2 grid-cols-1 ">
        <div className="flex justify-center ">
          <Board xIsNext={xIsNext} squares={currentSquares} onPlay={handlePlay} />
        </div>
        <div className="mt-10 p-4">
          <ol className="list-decimal">{moves}</ol>
        </div>
      </div>
    </div>
  );
}

export default Game;
