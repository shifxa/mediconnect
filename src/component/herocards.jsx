// import React from 'react'

// import { Calendar } from "lucide-react";
import { motion } from "motion/react";

function Herocards({ id, icon, title, desp }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 0.85, y: 0 }}
      transition={{ duration: 0.4 }}
      className="bg-white p-4 rounded-2xl flex flex-col gap-2 w-80 scale-95 
      hover:bg-blue-500 opacity-85 cursor-pointer"
      key={id}
    >
      <span
        className="bg-gray-100 text-blue-400 p-2 rounded-full max-w-10 cursor-pointer
        hover:bg-white"
      >
        {icon}
      </span>
      <h1 className="geist-semi-bold ">{title}</h1>
      <p className="text-xs">{desp}</p>
    </motion.div>
  );
}

export default Herocards;
