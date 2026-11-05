"use client";

import simpanNama from "./actions";
import {useActionState} from "react";

export default function FormTamu() {
  const [state, formAction, pending] = useActionState(simpanNama, {
    message: "",
  });
  return (
    <form
      className="flex flex-col justify-center p-2 items-center gap-2  h-25 bg-cyan-600 rounded-sm "
      action={formAction}
    >
      <input
        className="border ring-0 focus:outline-0 rounded-sm pl-1"
        type="text"
        name="nama"
      />
      <button disabled={pending} type="submit">
        {pending ? "Menyinpan.." : "simpan"}
      </button>
      <p>{state.message}</p>
    </form>
  );
}
