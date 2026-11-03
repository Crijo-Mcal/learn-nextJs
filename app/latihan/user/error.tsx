"use client";
export default function Error({
  error,
  retry,
}: {
  error: Error;
  retry: () => void;
}) {
  return (
    <div className="flex flex-col justify-center items-center gap-4 w-full h-full">
      <p>{error.message}</p>
      <button className="px-6 py-1 bg-amber-400" onClick={retry}>
        coba lagi
      </button>
    </div>
  );
}
