import Head from "next/head";
import CoinList from "./components/CoinList";
import Header from "./components/Header";

export default function Home() {
  // const [state, setstate] = useState(initialState);
  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2 bg-gray-700">
      <Head>
        <title>Crypto View</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <div className="mt-14">
        <CoinList />
      </div>
    </div>
  );
}
