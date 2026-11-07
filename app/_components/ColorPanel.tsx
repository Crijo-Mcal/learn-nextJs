"use client";

import {useState} from "react";

/*
  Exercício 3 — Elevar o estado (lifting state up)
  O ColorButton e o ColorCard precisam do mesmo estado. Por isso, o estado vive
  no componente pai (ColorPanel) e desce para os filhos através de props:
  - o ColorCard recebe o valor (isActive);
  - o ColorButton recebe a função que o altera (onClick).
*/

type ColorButtonProps = {
  onClick: () => void;
};

function ColorButton({onClick}: ColorButtonProps) {
  return (
    <button onClick={onClick} className="btn">
      Mudar cor
    </button>
  );
}

type ColorCardProps = {
  isActive: boolean;
};

function ColorCard({isActive}: ColorCardProps) {
  return (
    <div
      className={`flex h-48 w-full max-w-xs items-center justify-center rounded-xl text-lg font-medium text-white transition-colors ${isActive ? "bg-emerald-500" : "bg-sky-500"}`}
    >
      {isActive ? "Verde" : "Azul"}
    </div>
  );
}

export default function ColorPanel() {
  const [isActive, setIsActive] = useState(true);

  return (
    <div className="card flex flex-col items-center gap-6">
      <ColorCard isActive={isActive} />
      <ColorButton onClick={() => setIsActive(!isActive)} />
    </div>
  );
}
