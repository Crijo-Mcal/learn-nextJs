/*
  Este loading.tsx tem de estar na pasta [id], e não só na pasta pai.
  Com partialPrefetching: true, o Next.js prepara uma "estrutura" da página partilhada
  por todos os links (/utilizadores/1, /2...). Ler params fora de um <Suspense>
  liga essa estrutura a um único URL e mostra o aviso "URL data outside of Suspense".
  O loading.tsx desta pasta coloca a página dentro de um <Suspense> e resolve o aviso.
*/
export default function Loading() {
  return <p className="animate-pulse text-muted">A carregar utilizador...</p>;
}
