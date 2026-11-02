import Quantity from "./Quantity";

type CardProps = {
  title: string;
  price: number;
};

export default function Card({title, price}: CardProps) {
  return (
    <div className="flex flex-col items-center justify-center  bg-cyan-300 p-2 h-75 w-full max-w-[300px] gap-6 text-center rounded-md">
      <h2 className="max-w-xs text-2xl font-semibold  tracking-tight  text-black">
        {title}
      </h2>
      <p className="text-xl font-bold text-cyan-700 ">${price.toFixed(2)}</p>
      <Quantity />
    </div>
  );
}
