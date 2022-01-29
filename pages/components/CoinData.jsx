import Head from "next/head";
import Link from "next/link";
import { useEffect, useState } from "react";
import List from "./List";

function CoinData({ id }) {
  const [coinData, setCoinData] = useState({});
  const getCoinData = () => {
    fetch(`https://api.coingecko.com/api/v3/coins/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setCoinData(data);
        // console.log(data);
      });
  };
  useEffect(() => {
    getCoinData();
  }, []);
  return (
    <>
      <Head>
        <title>{id}</title>
      </Head>
      <div className="min-h-screen w-full flex flex-col items-center justify-start p-2 bg-gray-700 text-white font-bold text-lg">
        <img
          className="w-36 h-36 m-1 hover:scale-110 hover:shadow-gray-300 cursor-pointer"
          src={coinData?.image?.large}
          alt=""
        />
        <div className="bg-gray-400 rounded-lg w-auto p-2 mt-3">
          <List name="Name" value={coinData.name} unit={false} />
          <List name="Rank" value={coinData.market_cap_rank} unit={false} />
          <List
            name="current_price"
            value={coinData.market_data?.current_price.usd}
            unit={true}
          />
          <List
            name="hashing_algorithm"
            value={coinData.hashing_algorithm}
            unit={false}
          />
          <List
            name="HomePage"
            value={
              <a
                href={coinData.links?.homepage[0]}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:underline  hover:decoration-2"
              >
                {coinData.links?.homepage[0]}
              </a>
            }
            unit={false}
          />
          <List
            name="Date of Origin"
            value={coinData.genesis_date}
            unit={false}
          />
        </div>
      </div>
    </>
  );
}

export default CoinData;
