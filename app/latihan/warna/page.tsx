import ColorPanel from "../components/ColorPanel";

export default function Latihan2() {
  return (
    <div className="flex flex-col flex-1  items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <main className="flex flex-1 w-full h-full justify-center items-center gap-6 py-32 px-16 bg-white dark:bg-black sm:items-start">
        <ColorPanel />
      </main>
    </div>
  );
}
