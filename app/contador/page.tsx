import TitleCounter from "../components/TitleCounter";
import WindowWidth from "../components/WindowWidth";

export default function Judul() {
  return (
    <main className="flex flex-col justify-center items-center gap-6 py-32 px-16 ">
      <TitleCounter />
      <WindowWidth />
    </main>
  );
}
