"use client";

import {useState} from "react";

export default function Quantity() {
  const [count, setCount] = useState(0);

  function handleIncrement() {
    setCount(count + 1);
  }

  function handleDecrement() {
    if (count <= 0) {
      return;
    }
    setCount(count - 1);
  }

  return (
    <>
      <div className="flex flex-col items-center justify-center gap-4">
        <p className="text-xl font-bold text-cyan-700 ">{count}</p>
        <div className="flex gap-4">
          <button
            className="bg-cyan-700 text-white px-4 py-2 rounded-md"
            onClick={handleIncrement}
          >
            +
          </button>
          {count > 0 && (
            <button
              className="bg-cyan-700 text-white px-4 py-2 rounded-md"
              onClick={handleDecrement}
            >
              -
            </button>
          )}
        </div>
      </div>

      <div className="h-7">
        {count <= 0 ? (
          <p className="text-xl font-bold text-red-700 ">
            no item selected {count}
          </p>
        ) : (
          <p className="text-xl font-bold text-blue-600 ">
            item selected {count}
          </p>
        )}
      </div>
    </>
  );
}
