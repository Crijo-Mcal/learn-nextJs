import type {Metadata} from "next";
import {Geist, Geist_Mono} from "next/font/google";
import Link from "next/link";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Aprender Next.js",
  description: "Exercícios de revisão de React e introdução ao Next.js",
};

// Os links ficam num array para gerar os <Link> com .map(), em vez de os repetir à mão.
const navLinks = [
  {href: "/produtos", label: "Produtos"},
  {href: "/cores", label: "Cores"},
  {href: "/formulario", label: "Formulário"},
  {href: "/contador", label: "Contador"},
  {href: "/utilizadores", label: "Utilizadores"},
  {href: "/convidados", label: "Convidados"},
];

/*
  Exercício 10 — Layout e <Link>
  O root layout envolve TODAS as páginas. Ao navegar com <Link>, só o {children} muda:
  a <nav> continua montada e o estado dela não se perde.
  Um <a> normal faria um reload completo e todo o estado do browser seria perdido.

  Como o next.config.ts tem cacheComponents: true, as páginas que deixamos não são
  destruídas: o React esconde-as com <Activity> (display: none), por isso o estado
  delas também se mantém (até 3 páginas).
*/
export default function RootLayout({children}: LayoutProps<"/">) {
  return (
    <html
      lang="pt-PT"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="flex min-h-full flex-col">
        <header className="border-b border-border bg-surface">
          <nav className="mx-auto flex max-w-5xl flex-wrap items-center gap-x-6 gap-y-2 px-4 py-3 text-sm">
            <Link href="/" className="font-semibold text-accent">
              Aprender Next.js
            </Link>
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-muted transition-colors hover:text-foreground"
              >
                {link.label}
              </Link>
            ))}
          </nav>
        </header>
        <main className="mx-auto w-full max-w-5xl flex-1 px-4 py-10">
          {children}
        </main>
      </body>
    </html>
  );
}
