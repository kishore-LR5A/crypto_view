import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";

function CoinShow({ id, name, img, symbol, rank, price }) {
  return (
    <Link href={`/coindata/${id}`}>
      <div className="bg-white text-black font-bold text-lg cursor-pointer rounded-md sm:mx-2 w-full h-auto flex justify-evenly items-center p-2 my-2 space-x-2 relative">
        <div className="w-24 h-24">
          <img src={img} />
        </div>
        <div className="flex flex-col justify-start items-center text-center">
          <p className="h-auto bg-gray-400 rounded-md p-1 w-28 mb-1">{name} </p>
          <p className="h-auto bg-gray-400 rounded-md p-1 w-28 mb-1">
            {symbol}{" "}
          </p>
          <p className="h-auto bg-gray-400 rounded-md p-1 w-28"> $: {price} </p>
        </div>
        <div className="w-5 h-w-5 absolute top-1 left-1 flex items-center justify-center pointer-events-none bg-gray-400 text-sm font-bold rounded-full">
          {rank}
        </div>
      </div>
    </Link>
  );
}

export default CoinShow;
