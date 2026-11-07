import Link from "next/link";

/*
  Exercício 16 — not-found.tsx
  Aparece quando a página chama notFound(). É diferente do error.tsx:
  aqui os dados simplesmente não existem, por isso um botão "Tentar novamente" não faria sentido.
  Não precisa de "use client": o <Link> não é uma interação com onClick.

  Curiosidade: aqui o estado HTTP fica 200, e não 404. Como existe um loading.tsx,
  o Next.js já começou a enviar a resposta (streaming) antes de saber que o
  utilizador não existe, e o estado HTTP já não pode mudar. Para os motores de
  busca, o Next.js acrescenta <meta name="robots" content="noindex">.
*/
export default function NotFound() {
  return (
    <div className="card flex flex-col items-center gap-4 text-center">
      <h2 className="text-lg font-semibold">Utilizador não encontrado</h2>
      <p className="text-muted">Não existe nenhum utilizador com este id.</p>
      {/* O <Link> já é um elemento interativo: não o colocamos dentro de um <button>. */}
      <Link href="/utilizadores" className="btn">
        ← Voltar à lista
      </Link>
    </div>
  );
}
