"use client";

import useWindowWidth from "@/app/_hooks/useWindowWidth";

/*
  Exercício 11 — A fronteira "use client"
  Este componente usa um hook com estado, por isso tem de correr no browser.
  O "use client" fica AQUI, no componente, e não no hook: um hook corre dentro
  do componente que o chama, por isso segue sempre esse componente.

  Hoje ele só é importado pelo TitleCounter (que já é Client Component), e tudo o
  que um ficheiro client importa também passa a ser client. Mesmo assim, deixamos
  o "use client" aqui: se um Server Component o importar diretamente, continua a funcionar.
*/
export default function WindowWidth() {
  const width = useWindowWidth();

  return <p className="text-lg tabular-nums">{width}px</p>;
}
