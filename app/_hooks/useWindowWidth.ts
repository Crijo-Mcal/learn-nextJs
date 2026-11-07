import {useEffect, useState} from "react";

/*
  Exercício 9 — Custom hook
  Um custom hook é uma função que começa por "use" e usa outros hooks.
  Serve para reutilizar lógica com estado em vários componentes.

  Um hook não é um componente: corre DENTRO do componente que o chama.
  Por isso não leva "use client". Quem decide onde corre é o componente (Exercício 11).
*/
export default function useWindowWidth() {
  const [width, setWidth] = useState(0);

  useEffect(() => {
    function handleResize() {
      setWidth(window.innerWidth);
    }

    // Ler a largura logo ao montar. Sem isto, o valor ficava 0 até ao primeiro resize.
    handleResize();
    window.addEventListener("resize", handleResize);

    // Exercício 8 — Cleanup
    // A função devolvida corre quando o componente desmonta.
    // Sem ela, cada montagem adicionava mais um listener e nunca o removia.
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []); // [] = executa só uma vez, ao montar.

  return width;
}
