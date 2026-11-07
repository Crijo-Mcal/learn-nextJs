import Link from "next/link";
import {notFound} from "next/navigation";

type User = {
  id: number;
  name: string;
  email: string;
  phone: string;
  website: string;
};

async function getUserById(id: string): Promise<User> {
  const response = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`);

  if (!response.ok) {
    // Exercício 16 — 404 significa "não existe": notFound() mostra o not-found.tsx.
    // Os outros erros significam "algo falhou": o throw mostra o error.tsx.
    // A verificação do 404 fica DENTRO do !response.ok e ANTES do throw;
    // caso contrário, o throw apanharia também o 404.
    if (response.status === 404) {
      notFound();
    }
    throw new Error(`Falha ao carregar o utilizador ${id} (estado ${response.status})`);
  }

  return response.json();
}

/*
  Exercício 15 — Rotas dinâmicas
  A pasta [id] apanha qualquer valor no URL: /utilizadores/1, /utilizadores/abc...
  O valor chega em params, que é uma Promise, por isso usamos await.
  O nome da propriedade (id) é igual ao nome entre parênteses retos na pasta.
  O id é SEMPRE string, porque o URL é texto (como o $_GET no PHP).
*/
export default async function UserDetailPage({params}: PageProps<"/utilizadores/[id]">) {
  const {id} = await params;
  const user = await getUserById(id);

  return (
    <div className="flex flex-col gap-6">
      <Link href="/utilizadores" className="text-sm text-muted hover:text-foreground">
        ← Voltar à lista
      </Link>
      <article className="card">
        <h1 className="text-2xl font-semibold">{user.name}</h1>
        <dl className="mt-4 grid gap-x-6 gap-y-3 sm:grid-cols-[8rem_1fr]">
          <dt className="text-sm text-muted">Email</dt>
          <dd>{user.email}</dd>
          <dt className="text-sm text-muted">Telefone</dt>
          <dd>{user.phone}</dd>
          <dt className="text-sm text-muted">Website</dt>
          <dd>{user.website}</dd>
        </dl>
      </article>
    </div>
  );
}
