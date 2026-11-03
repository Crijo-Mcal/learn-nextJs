import Link from "next/link";
import Quantity from "./components/Quantity";

export default function layoutLatihan({children}: LayoutProps<"/latihan">) {
  return (
    <div>
      <nav className="flex mb-4 justify-center items-center w-full h-10 gap-4 bg-cyan-800">
        <Link href="/latihan/judul">Judul</Link>
        <Link href="/latihan/warna">Warna</Link>
        <Link href="/latihan/form">Form</Link>
        <Link href="/latihan/">Home</Link>
      </nav>
      <div>{children}</div>
    </div>
  );
}
