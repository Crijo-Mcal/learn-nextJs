import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex flex-col justify-center items-center gap-4 w-full h-full">
      <p>user tidak ditemukan</p>
      <Link className="px-6 py-1 bg-amber-300" href="/latihan/user">
        kembali
      </Link>
    </div>
  );
}
