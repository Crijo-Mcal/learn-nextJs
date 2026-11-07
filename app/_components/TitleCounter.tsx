"use client";

import {useEffect, useState} from "react";
import WindowWidth from "./WindowWidth";

/*
  Exercício 7 — useEffect e dependências
  O efeito sincroniza o título do separador do browser com o contador.
  O array [count] diz ao React: "volta a executar o efeito só quando count mudar".
  Escrever no campo de texto também provoca um re-render, mas NÃO executa o efeito,
  porque text não está nas dependências. Abre a consola do browser para confirmar.

  Exercício 8 — Cleanup (ver também _hooks/useWindowWidth.ts)
  O botão "Esconder largura" desmonta o <WindowWidth />, o que executa o cleanup
  do efeito dele e remove o listener de resize.
*/
export default function TitleCounter() {
  const [count, setCount] = useState(0);
  const [text, setText] = useState("");
  const [showWidth, setShowWidth] = useState(true);

  useEffect(() => {
    console.log("Efeito executado: count =", count);
    document.title = `Contador: ${count}`;

    // Cleanup: repõe o título quando o efeito volta a correr ou quando saímos da página.
    return () => {
      document.title = "Aprender Next.js";
    };
  }, [count]);

  return (
    <div className="grid w-full gap-6 sm:grid-cols-2">
      <section className="card flex flex-col items-center gap-4">
        <h2 className="font-semibold">Título do separador</h2>
        <p className="text-4xl font-bold tabular-nums">{count}</p>
        <button onClick={() => setCount(count + 1)} className="btn">
          +1
        </button>
      </section>

      <section className="card flex flex-col gap-3">
        <h2 className="font-semibold">Texto (não executa o efeito)</h2>
        <input
          type="text"
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="Escreve algo..."
          className="input"
        />
        <p className="text-sm text-muted">{text.length} caracteres</p>
      </section>

      <section className="card flex flex-col items-center gap-4 sm:col-span-2">
        <h2 className="font-semibold">Largura da janela (custom hook)</h2>
        <div className="min-h-6">{showWidth && <WindowWidth />}</div>
        <button onClick={() => setShowWidth(!showWidth)} className="btn-secondary">
          {showWidth ? "Esconder" : "Mostrar"} largura
        </button>
      </section>
    </div>
  );
}
