type Props = {
  value: string|null;
  onSquareClick: () => void;
}

function Square({ value, onSquareClick }: Props) {
  return (
    <button
      className="h-20 w-20 border border-black p-4 text-3xl"
      type="button"
      onClick={onSquareClick}
    >
      {value}&nbsp;
    </button>
  );
}

export default Square;
