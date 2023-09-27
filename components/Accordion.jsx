import React, { useState } from "react";
import { IoIosArrowDown } from "react-icons/io";

const Accordion = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div
      onClick={() => setIsOpen(!isOpen)}
      className="flex flex-col bg-gray-100 p-4 rounded-md transition-all duration-300 cursor-pointer"
    >
      <div className="flex items-center text-slate-800 font-medium gap-1 justify-between">
        <span>{question}</span>
        <IoIosArrowDown
          className={`text-xl transition duration-200 ${
            isOpen ? "rotate-180" : ""
          }`}
        />
      </div>
      <div
        className={`text-slate-600 mt-4 ${
          isOpen ? "flex h-auto overflow-auto" : "hidden h-0 overflow-hidden"
        }`}
      >
        {answer}
      </div>
    </div>
  );
};

export default Accordion;
