import {data} from "./data";
import FormTamu from "./FormTamu";

export default function DaftarTamu() {
  return (
    <div className="w-full h-full flex flex-col justify-center items-center">
      {data.map((x, i) => (
        <p key={i}>{x}</p>
      ))}

      <FormTamu />
    </div>
  );
}
