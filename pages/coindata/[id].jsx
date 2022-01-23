import { useRouter } from "next/router";
import CoinData from "../components/CoinData";

function Data() {
  const router = useRouter();
  const { id } = router.query;
//   console.log(router)
//   console.log(id)
  return <CoinData id={id} />;
}

export default Data;
