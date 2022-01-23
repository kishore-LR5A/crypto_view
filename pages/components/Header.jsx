// import Image from "next/image";

import Link from "next/link";

function Header() {
  return (
    <header className="fixed top-0 w-full h-12 bg-gray-200 flex justify-between px-3 z-50 shadow-md">
      {/* <div className="flex justify-center items-center ">
        <img className="w-16 h-16" src="/vercel.svg" alt="Vercel Image" />
      </div> */}

      <div className="flex justify-center items-center">
        <p className="font-bold text-3xl">Crypto_View</p>
      </div>
      <div className="flex justify-end items-center space-x-3">
        <Link href={"/"}>
          <p className="cursor-pointer bg-gray-700 text-white font-bold text-md w-auto h-8 p-2 m-1 flex justify-center items-center hover:scale-105 hover:text-teal-400 hover:shadow-md rounded-md">
            Home
          </p>
        </Link>
        {/* <Link href={"/Services"}>
          <p className="cursor-pointer bg-gray-700 text-white font-bold text-md w-auto h-8 p-2 m-1 flex justify-center items-center hover:scale-105 hover:text-teal-400 hover:shadow-md rounded-md">
            Services
          </p>
        </Link> */}
        <Link href={"/About"}>
          <p className="cursor-pointer bg-gray-700 text-white font-bold text-md w-auto h-8 p-2 m-1 flex justify-center items-center hover:scale-105 hover:text-teal-400 hover:shadow-md rounded-md">
            About
          </p>
        </Link>
      </div>
    </header>
  );
}

export default Header;
