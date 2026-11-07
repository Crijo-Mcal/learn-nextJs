/*
  Exercício 12 — loading.tsx
  O Next.js envolve a page.tsx num <Suspense> e mostra este componente enquanto
  a página espera pelos dados (await). Também resolve o aviso "Blocking Route"
  que o cacheComponents mostra quando a página carrega dados sem cache.
  Vale para esta pasta e para todas as subpastas.
*/
export default function Loading() {
  return <p className="animate-pulse text-muted">A carregar utilizadores...</p>;
}
