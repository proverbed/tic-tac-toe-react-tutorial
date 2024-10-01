import Square from "./Square.tsx";
import Card from "./Card.tsx";

type Props = {
    xIsNext: boolean;
    squares: (string | null)[];
    onPlay: (nextSquares: (string | null)[]) => void;
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

function Board({ xIsNext, squares, onPlay }: Props) {
  const winner = calculateWinner(squares);
  let status;
  if (winner) {
    status = `Winner: ${winner}`;
  } else {
    status = `Next player: ${xIsNext ? "X" : "O"}`;
  }

  function handleClick(i: number) {
    if (squares[i] || calculateWinner(squares)) {
      return;
    }
    const nextSquares = squares.slice();
    if (xIsNext) {
      nextSquares[i] = "X";
    } else {
      nextSquares[i] = "O";
    }
    onPlay(nextSquares);
  }

  const items = squares.map((item, index) => (
    <div className="w-1/3"><Square value={item} onSquareClick={() => handleClick(index)} /></div>
  ));

  return (
    <div className="m-10 ">
      <div className="status">{status}</div>
      <div className="w-80">
        <div className="flex flex-wrap justify-center">
          {items}
        </div>
      </div>

      <div className="grid grid-rows-2 pt-2 w-80 gap-2">
        <Card symbol="X" active={xIsNext} winner={winner} />
        <Card symbol="O" active={!xIsNext} winner={winner} />
      </div>

    </div>
  );
}

export default Board;
