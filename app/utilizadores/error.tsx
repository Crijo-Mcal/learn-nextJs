"use client";

type ErrorPageProps = {
  error: unknown;
  retry: () => void;
};

/*
  Exercício 13 — error.tsx
  Apanha os erros lançados (throw) nesta pasta e nas subpastas, incluindo [id].
  É como um try/catch para a página inteira.
  Tem de ser Client Component: tem interação (botão) e o error boundary corre no browser.

  retry() volta a pedir os dados ao servidor e renderiza de novo a página do URL atual.
  (reset() só voltaria a renderizar, sem novo pedido. No Next.js 16 usa-se retry.)

  O componente NÃO se chama "Error": esse nome esconderia a classe Error do JavaScript
  e o "instanceof Error" abaixo deixaria de funcionar.
*/
export default function ErrorPage({error, retry}: ErrorPageProps) {
  // Em produção, as mensagens dos erros do servidor são substituídas por uma
  // mensagem genérica, para não expor detalhes internos.
  const message = error instanceof Error ? error.message : "Ocorreu um erro inesperado.";

  return (
    <div className="card flex flex-col items-center gap-4 text-center">
      <h2 className="text-lg font-semibold text-danger">Algo correu mal</h2>
      <p className="text-muted">{message}</p>
      <button className="btn" onClick={() => retry()}>
        Tentar novamente
      </button>
    </div>
  );
}
