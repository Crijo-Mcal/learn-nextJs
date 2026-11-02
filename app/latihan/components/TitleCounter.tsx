"use client";

import {useState, useEffect} from "react";
import WindowWidth from "./WindowWidth";
import useWindowWidth from "../hooks/useWindowWidth";

export default function TitleCounter() {
  const [count, setCount] = useState(0);
  const [text, setText] = useState("");
  const [showWidth, setShowWidth] = useState(true);
  const windowWidth = useWindowWidth();

  const handleIncrement = () => {
    setCount(count + 1);
  };

  const handleSubmit = (event: React.SubmitEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log("Form submitted with text:", text);
  };

  useEffect(() => {
    console.log("effect is running");
    document.title = `${count}`;
  }, [count]);

  return (
    <>
      <div className="flex w-75 h-50 bg-cyan-300 flex-col gap-2 justify-center items-center">
        <p>Count: {count}</p>
        <button
          onClick={handleIncrement}
          className="bg-cyan-700 text-white px-4 py-2 rounded-md hover:bg-cyan-600"
        >
          +
        </button>
      </div>

      <div className="flex w-75 h-20 bg-cyan-300 flex-col gap-2 justify-center items-center">
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            value={text}
            onChange={(e) => setText(e.target.value)}
            placeholder="Enter text"
            className="border-0 ring-2 ring-cyan-600 outline-none  rounded-md px-2 py-1 text-black"
          />
        </form>
      </div>

      <div className="flex w-75 h-20 bg-cyan-300 flex-col gap-2 justify-center items-center">
        <button
          onClick={() => setShowWidth(!showWidth)}
          className="bg-cyan-700 text-white px-4 py-2 rounded-md hover:bg-cyan-600"
        >
          {showWidth ? "Hide" : "Show"} Width
        </button>
      </div>

      <div className="flex w-75 h-20 bg-cyan-300 flex-col gap-2 justify-center items-center">
        {showWidth && <WindowWidth />}
      </div>
      <div className="flex w-75 h-20 bg-cyan-300 flex-col gap-2 justify-center items-center text-black">
        {windowWidth}px
      </div>
    </>
  );
}
