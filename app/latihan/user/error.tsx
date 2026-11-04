"use client";

import Link from "next/link";

export default function Error({error}: {error: Error}) {
  return (
    <div className="flex flex-col justify-center items-center gap-4 w-full h-full">
      <p>{error.message}</p>
      <button className="px-6 py-1 bg-amber-400">
        <Link href={"/latihan/user"}>kembali</Link>
      </button>
    </div>
  );
}
