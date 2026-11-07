import {cacheLife} from "next/cache";
import Link from "next/link";
import PageHeader from "@/app/_components/PageHeader";

type User = {
  id: number;
  name: string;
  email: string;
};

/*
  Exercício 14 — "use cache"
  O resultado desta função fica guardado na memória do servidor (parecido com o Redis).
  Os pedidos seguintes recebem o resultado guardado, sem chamar a API outra vez.
  A cache é partilhada por TODOS os visitantes, por isso só serve para dados públicos.
  cacheLife("minutes") define durante quanto tempo o resultado é válido.
*/
async function getUsers(): Promise<User[]> {
  "use cache";
  cacheLife("minutes");

  const response = await fetch("https://jsonplaceholder.typicode.com/users");

  // Exercício 13 — O fetch NÃO lança erro com 404 ou 500, por isso verificamos response.ok.
  // O throw é apanhado pelo error.tsx desta pasta.
  if (!response.ok) {
    throw new Error(`Falha ao carregar os utilizadores (estado ${response.status})`);
  }

  return response.json();
}

/*
  Exercício 12 — Fetch num Server Component
  A página é async e espera pelos dados com await, sem useState nem useEffect.
  Este código corre só no servidor, por isso um console.log aqui aparece no terminal.
  Enquanto espera, o Next.js mostra o loading.tsx desta pasta.
*/
export default async function UsersPage() {
  const users = await getUsers();

  return (
    <>
      <PageHeader
        exercises="Exercícios 12 a 16"
        title="Utilizadores"
        description="Dados carregados no servidor, com cache, loading e tratamento de erros. Clica num nome para ver o detalhe, ou experimenta /utilizadores/999 para ver o not-found."
      />
      <ul className="card divide-y divide-border p-0">
        {users.map((user) => (
          <li key={user.id}>
            {/* Exercício 15 — Um único <Link> dentro do .map() gera um link para cada utilizador. */}
            <Link
              href={`/utilizadores/${user.id}`}
              className="flex flex-col gap-0.5 px-6 py-4 transition-colors hover:bg-background sm:flex-row sm:justify-between"
            >
              <span className="font-medium">{user.name}</span>
              <span className="text-sm text-muted">{user.email}</span>
            </Link>
          </li>
        ))}
      </ul>
    </>
  );
}
