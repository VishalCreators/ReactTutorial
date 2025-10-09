import React from "react";
import { motion } from "framer-motion";

function Card({ data, reference }) {
  return (
    <motion.div
      drag
      dragConstraints={reference}
      className="relative w-44 h-[280px] rounded-[30px] top-[50%] bg-zinc-800 shadow-lg shadow-black hover:scale-105 hover:w-92  duration-300 "
    >
      <div className="  w-full  bg-zinc-800  rounded-t-[30px] flex flex-col  gap-1 ">
        <img
          src={data.img}
          alt={data.name}
          className="w-full h-42 object-cover rounded-t-[30px] hover:object-fill"
        />
        <h1 className="flex justify-between items-center font-semibold text-md px-3 text-white">
          <span>{data.name}</span>
          <span className="text-amber-300">{data.rating}</span>
        </h1>
      </div>

      <div className="w-full flex justify-between items-center pl-3 pr-2 mt-1 text-sm text-gray-200">
        <span className="text-gray-400 text-md font-semibold">
          {data.genre}
        </span>
        {data.price.isFree ? (
          <span className="bg-zinc-700/50  text-center py-1 px-3 rounded-xl">
            Free
          </span>
        ) : (
          <span className="bg-zinc-700/50  text-center py-1 px-3 rounded-xl">
            {data.price.value}
          </span>
        )}
      </div>
      {data.isOwned ? (
        <h1 className="w-full  font-bold text-center absolute bottom-0  py-2 text-amber-50 border-t-2 border-black ">
          Owned
        </h1>
      ) : (
        <button className=" absolute bottom-0 w-full py-1.5 bg-amber-300 rounded-b-[30px]  text-center text-[18.5px] font-semibold">
          {data.price.isFree ? "Download now" : "Buy now"}
        </button>
      )}
    </motion.div>
  );
}

export default Card;
