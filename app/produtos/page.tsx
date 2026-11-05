import Card from "./components/Card";

const data = [
  {id: 1, title: "Laptop", price: 800},
  {id: 2, title: "Keyboard", price: 50},
  {id: 3, title: "Mouse", price: 25},
];

export default function Latihan1() {
  return (
    <div className="flex flex-col flex-1 items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <main className="flex flex-1 w-full h-full justify-center items-center gap-6 py-32 px-16 bg-white dark:bg-black sm:items-start">
        {data.map((item) => (
          <Card key={item.id} title={item.title} price={item.price} />
        ))}
      </main>
    </div>
  );
}
