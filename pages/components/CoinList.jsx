import { useState } from "react";
import CoinShow from "./CoinShow";

function CoinList() {
  const [coinsList, setCoinsList] = useState(() => []);
  const getCoins = () => {
    fetch(
      "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false"
    )
      .then((res) => res.json())
      .then((data) => {
        setCoinsList(data);
        console.log(data);
      });
  };
  return (
    <div className="w-full ">
      {coinsList.length == 0 && (
        <div className=" flex flex-col space-y-3">
          <p
            className="bg-white text-black font-bold text-lg text-center cursor-pointer p-2 rounded-md w-auto"
            onClick={getCoins}
          >
            Get Coins List
          </p>
          <div className="flex flex-col justify-start text-white min-w-[400px]">
            <h1 className="text-2xl font-serif font-bold">TechStack Used:</h1>
            <div className="relative">
              <ul className="font-semibold list-decimal cursor-pointer text-lg absolute left-7">
                <li className="hover:underline hover:decoration-2">
                  <a href="https://nextjs.org">Next.js (Reactjs framework)</a>
                </li>
                <li className="hover:underline hover:decoration-2">
                  <a href="https://tailwindcss.com">
                    TailwindCSS (CSS framework)
                  </a>{" "}
                </li>
                <li className="hover:underline hover:decoration-2">
                  <a href="https://www.coingecko.com/en">
                    Coingecko free public api for cryptocurrency data
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      )}

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2 md:gap-5">
        {coinsList.map((coin) => {
          return (
            <CoinShow
              key={coin.id}
              id={coin.id}
              name={coin.name}
              img={coin.image}
              symbol={coin.symbol}
              rank={coin.market_cap_rank}
              price={coin.current_price}
            />
          );
        })}
      </div>
    </div>
  );
}

export default CoinList;
