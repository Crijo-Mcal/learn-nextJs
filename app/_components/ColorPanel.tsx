"use client";

import {useState} from "react";

type ColorButtonProps = {
  onClick: () => void;
};

function ColorButton({onClick}: ColorButtonProps) {
  return (
    <button
      onClick={onClick}
      className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
    >
      change color
    </button>
  );
}

type ColorCardProps = {
  isActive: boolean;
};

function ColorCard({isActive}: ColorCardProps) {
  return (
    <div
      className={`flex flex-col items-center  justify-center  ${isActive ? "bg-green-300" : "bg-cyan-300"} p-2 h-75 w-full max-w-[300px] gap-6 text-center rounded-md`}
    ></div>
  );
}

export default function ColorPanel() {
  const [isActive, setIsActive] = useState(true);
  return (
    <div className="flex flex-col w-full items-center justify-center gap-6">
      <ColorCard isActive={isActive} />
      <ColorButton onClick={() => setIsActive(!isActive)} />
    </div>
  );
}
