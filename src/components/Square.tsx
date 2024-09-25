type Props = {
  value: string|null;
  onSquareClick: () => void;
}

function Square({ value, onSquareClick }: Props) {
  return (
    <button
      className="h-full w-full border border-black p-4 text-3xl"
      type="button"
      onClick={onSquareClick}
    >
      {value}&nbsp;
    </button>
  );
}

export default Square;
