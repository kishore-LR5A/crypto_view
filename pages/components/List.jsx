function List({ name, value, unit }) {
  return (
    <div
      className="text-black font-bold text-lg grid grid-cols-2 gap-2 rounded-lg
    bg-gray-400"
    >
      <p className="col-span-1 flex justify-end rounded-lg">{name} :</p>
      <p className="col-span-1 rounded-lg">
        {unit && "USD($)"} {value??"No Entry"}
      </p>
    </div>
  );
}

export default List;
