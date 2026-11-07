type PageHeaderProps = {
  exercises: string;
  title: string;
  description: string;
};

// Cabeçalho comum a todas as páginas de exercícios.
// É um Server Component: não tem estado nem eventos, por isso não precisa de "use client".
export default function PageHeader({exercises, title, description}: PageHeaderProps) {
  return (
    <header className="mb-8">
      <p className="text-sm font-medium text-accent">{exercises}</p>
      <h1 className="mt-1 text-3xl font-semibold tracking-tight">{title}</h1>
      <p className="mt-2 max-w-2xl text-muted">{description}</p>
    </header>
  );
}
