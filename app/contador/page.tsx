import PageHeader from "@/app/_components/PageHeader";
import TitleCounter from "@/app/_components/TitleCounter";

/*
  Exercício 11 — Server vs Client Component
  Esta página não tem "use client", por isso é um Server Component (o padrão no App Router):
  corre no servidor e o seu código não é enviado para o browser.
  Mesmo assim, pode renderizar Client Components como o TitleCounter. O "use client"
  desse ficheiro marca onde começa o código que vai para o browser.
*/
export default function CounterPage() {
  return (
    <>
      <PageHeader
        exercises="Exercícios 7, 8, 9 e 11"
        title="Contador"
        description="useEffect com dependências, cleanup de listeners e um custom hook. Abre a consola do browser para ver quando o efeito corre."
      />
      <TitleCounter />
    </>
  );
}
