import { useState } from "react";
import { MdEdit, MdSave } from "react-icons/md";

type Props = {
    symbol: string;
    active: boolean;
    draw: boolean;
    winner: string|null;
}

function Card({
  symbol, active, draw, winner
}: Props) {
  const [player, setPlayer] = useState(`Player-${symbol}`);
  const [edit, setEdit] = useState(false);

  function handleEdit() {
    setEdit(!edit);
  }

  let style = 'bg-gray-200';
  if (active && winner === null && !draw) {
    style = 'bg-gray-400';
  }
  if (winner === symbol) {
    style = 'bg-green-200';
  }

  if (edit) {
    return (
      <div className={`grid grid-rows-2 rounded-md w-full ${style} p-2`}>
        <div className="flex justify-between">
          <input type="text" name="playerName" value={player} onChange={(e) => setPlayer(e.target.value)} className="w-3/4 px-2" />
          <button
            type="button"
            onClick={handleEdit}
            className="bg-white hover:bg-gray-100 rounded-xl border-black border p-2"
          ><MdSave />
          </button>
        </div>
        <div className="text-center text-xl">{symbol}</div>
      </div>
    );
  }

  return (
    <div className={`grid grid-rows-2 rounded-md w-full ${style} p-2`}>
      <div className="flex justify-between">
        <div className="p-2">{player}</div>
        <button
          type="button"
          onClick={handleEdit}
          className="bg-white hover:bg-gray-100 rounded-xl border-black border p-2"
        ><MdEdit />
        </button>
      </div>
      <div className="text-center text-xl">{symbol}</div>
    </div>
  );
}

export default Card;
