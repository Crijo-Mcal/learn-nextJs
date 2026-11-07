"use client";

import {useState} from "react";

/*
  Exercício 2 — useState e eventos
  Uma variável normal (let count = 0) voltaria a 0 em cada render.
  O useState guarda o valor entre renders e, quando chamamos setCount,
  o React volta a renderizar o componente com o novo valor.

  Exercício 4 — Renderização condicional
  {condição && <Elemento />} mostra o elemento só quando a condição é verdadeira.
  {condição ? A : B} escolhe entre duas opções.
*/
export default function Quantity() {
  const [count, setCount] = useState(0);

  function handleIncrement() {
    setCount(count + 1);
  }

  function handleDecrement() {
    // Não permitir valores negativos.
    if (count <= 0) {
      return;
    }
    setCount(count - 1);
  }

  return (
    <div className="flex flex-col items-center gap-3">
      <div className="flex items-center gap-3">
        {/* Caixa com largura fixa para o layout não "saltar" quando o botão aparece. */}
        <div className="w-10">
          {count > 0 && (
            // Passamos a função SEM parênteses: onClick={handleDecrement()}
            // executaria a função logo no render, e não no clique.
            <button
              className="btn-secondary w-10"
              onClick={handleDecrement}
              aria-label="Diminuir"
            >
              −
            </button>
          )}
        </div>
        <span className="w-8 text-xl font-semibold tabular-nums">{count}</span>
        <button className="btn w-10" onClick={handleIncrement} aria-label="Aumentar">
          +
        </button>
      </div>

      <p className={`text-sm ${count > 0 ? "text-success" : "text-muted"}`}>
        {count > 0 ? `${count} selecionado(s)` : "Nenhum item selecionado"}
      </p>
    </div>
  );
}
