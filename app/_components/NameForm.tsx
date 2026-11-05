"use client";

import {useState} from "react";

export default function NameForm() {
  const [name, setName] = useState("");
  const [saveName, setSaveName] = useState("");
  const [error, setError] = useState("");

  function handleSubmit(event: React.SubmitEvent<HTMLFormElement>) {
    event.preventDefault();

    if (name.trim() === "") {
      setError("Name is required");
      setName("");
      return;
    }
    setError("");
    setSaveName(name.trim());
    setName("");
  }

  return (
    <>
      <div className="h-7">
        {saveName && (
          <p className="text-green-500 text-base">Saved name: {saveName}</p>
        )}
      </div>

      <form
        className="flex flex-col gap-4 bg-cyan-300 p-4 rounded-md"
        onSubmit={handleSubmit}
      >
        <input
          className="px-4 py-2 text-black rounded-md border border-cyan-500 focus:outline-none ring-2 ring-cyan-500 focus:border-cyan-500"
          type="text"
          placeholder="Name"
          value={name}
          onChange={(e) => {
            setName(e.target.value);
            setError("");
          }}
        />
        <button
          className="bg-cyan-700 text-white px-4 py-2 rounded-md hover:bg-cyan-600"
          type="submit"
        >
          Submit
        </button>
      </form>

      <div className="h-7">
        {name.trim() !== "" && !error && (
          <p className="text-green-500 text-base">Hello, {name}!</p>
        )}

        {name.trim() == "" && !error && (
          <p className="text-rose-500 text-base">Please enter your name.</p>
        )}

        {error && <p className="text-red-500 text-base">{error}</p>}
      </div>
    </>
  );
}
