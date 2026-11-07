import PageHeader from "@/app/_components/PageHeader";
import ProductCard from "@/app/_components/ProductCard";

const products = [
  {id: 1, title: "Portátil", price: 800},
  {id: 2, title: "Teclado", price: 50},
  {id: 3, title: "Rato", price: 25},
];

/*
  Exercício 5 — Listas e key
  .map() transforma cada item do array num elemento JSX.
  A key tem de ser única e estável (aqui, o id do produto). Evita usar o índice
  do array quando a lista pode ser reordenada ou ter itens removidos.
*/
export default function ProductsPage() {
  return (
    <>
      <PageHeader
        exercises="Exercícios 1, 2, 4 e 5"
        title="Produtos"
        description="Cartões que recebem dados por props. Cada cartão tem o seu próprio contador com useState, e o texto muda com renderização condicional."
      />
      <div className="grid gap-6 sm:grid-cols-3">
        {products.map((product) => (
          <ProductCard key={product.id} title={product.title} price={product.price} />
        ))}
      </div>
    </>
  );
}
