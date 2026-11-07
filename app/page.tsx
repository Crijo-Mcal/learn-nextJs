import Link from "next/link";

type Section = {
  href: string;
  title: string;
  exercises: string;
  concepts: string[];
};

// Mapa de todos os exercícios: cada secção é uma página da aplicação.
const sections: Section[] = [
  {
    href: "/produtos",
    title: "Produtos",
    exercises: "Exercícios 1, 2, 4 e 5",
    concepts: ["Props", "useState", "Eventos", "Renderização condicional", "Listas e key"],
  },
  {
    href: "/cores",
    title: "Cores",
    exercises: "Exercício 3",
    concepts: ["Elevar o estado (lifting state up)"],
  },
  {
    href: "/formulario",
    title: "Formulário",
    exercises: "Exercício 6",
    concepts: ["Inputs controlados", "Validação no cliente"],
  },
  {
    href: "/contador",
    title: "Contador",
    exercises: "Exercícios 7, 8, 9 e 11",
    concepts: ["useEffect e dependências", "Cleanup", "Custom hook", "Server vs Client Component"],
  },
  {
    href: "/utilizadores",
    title: "Utilizadores",
    exercises: "Exercícios 12 a 16",
    concepts: [
      "Fetch num Server Component",
      "loading.tsx",
      "error.tsx",
      '"use cache"',
      "Rotas dinâmicas [id]",
      "notFound()",
    ],
  },
  {
    href: "/convidados",
    title: "Livro de convidados",
    exercises: "Exercícios 17 e 18",
    concepts: ["Server Actions", "useActionState", "Estado pendente"],
  },
];

// Página inicial (Server Component): só mostra dados fixos, por isso não precisa de "use client".
export default function HomePage() {
  return (
    <>
      <header className="mb-10">
        <h1 className="text-3xl font-semibold tracking-tight">Aprender Next.js</h1>
        <p className="mt-2 max-w-2xl text-muted">
          Revisão de React e introdução ao Next.js (App Router). Cada cartão abre uma
          página com os exercícios, e o código tem comentários a explicar como funciona.
        </p>
      </header>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {sections.map((section) => (
          <Link
            key={section.href}
            href={section.href}
            className="card block transition-colors hover:border-accent"
          >
            <p className="text-sm font-medium text-accent">{section.exercises}</p>
            <h2 className="mt-1 text-xl font-semibold">{section.title}</h2>
            <ul className="mt-3 flex flex-wrap gap-2">
              {section.concepts.map((concept) => (
                <li
                  key={concept}
                  className="rounded-full border border-border px-2.5 py-0.5 text-xs text-muted"
                >
                  {concept}
                </li>
              ))}
            </ul>
          </Link>
        ))}
      </div>

      <p className="mt-10 text-sm text-muted">
        O Exercício 10 (layout e &lt;Link&gt;) está em{" "}
        <code className="font-mono">app/layout.tsx</code>: é a barra de navegação no topo
        de todas as páginas.
      </p>
    </>
  );
}
