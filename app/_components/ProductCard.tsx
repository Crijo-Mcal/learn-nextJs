import Quantity from "./Quantity";

type ProductCardProps = {
  title: string;
  price: number;
};

// Formata números como preço em euros (ex.: 800 → "800,00 €").
const priceFormatter = new Intl.NumberFormat("pt-PT", {
  style: "currency",
  currency: "EUR",
});

/*
  Exercício 1 — Props
  O componente recebe dados do pai através de props, como os argumentos de uma função.
  As props são só de leitura: o componente usa-as, mas nunca as altera.
*/
export default function ProductCard({title, price}: ProductCardProps) {
  return (
    <article className="card flex flex-col items-center gap-4 text-center">
      <h2 className="text-xl font-semibold">{title}</h2>
      <p className="text-2xl font-bold text-accent">{priceFormatter.format(price)}</p>
      {/* Cada cartão tem a sua própria instância de Quantity, com estado independente. */}
      <Quantity />
    </article>
  );
}
