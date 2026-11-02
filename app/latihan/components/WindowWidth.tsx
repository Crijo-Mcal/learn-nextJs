import useWindowWidth from "../hooks/useWindowWidth";

export default function WindowWidth() {
  const width = useWindowWidth();

  return <p className="text-black">Window width: {width}px</p>;
}
