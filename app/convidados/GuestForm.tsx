"use client";

import {useActionState} from "react";
import {addGuest, type GuestFormState} from "./actions";

const initialState: GuestFormState = {message: "", success: false};

/*
  Exercício 18 — useActionState
  state      → o último valor devolvido pela action (parecido com uma "flash message" na sessão)
  formAction → a action "embrulhada" pelo React, para usar em <form action={...}>
  pending    → true enquanto a action está a correr no servidor

  Este componente tem de ser Client Component porque usa um hook.
  A action não pode ser escrita aqui: vem de um ficheiro com "use server".

  Nota: quando a action termina sem erro, o React 19 limpa automaticamente os inputs
  do formulário. Não é o refresh() que os limpa (a mensagem do state continua visível).
*/
export default function GuestForm() {
  const [state, formAction, pending] = useActionState(addGuest, initialState);

  return (
    <form action={formAction} className="card flex flex-col gap-3">
      <label className="flex flex-col gap-1 text-sm font-medium">
        Nome
        <input className="input" type="text" name="name" placeholder="Escreve o teu nome" />
      </label>

      <button type="submit" className="btn" disabled={pending}>
        {pending ? "A guardar..." : "Adicionar"}
      </button>

      {/* aria-live avisa os leitores de ecrã quando a mensagem muda. */}
      <p
        aria-live="polite"
        className={`min-h-5 text-sm ${state.success ? "text-success" : "text-danger"}`}
      >
        {state.message}
      </p>
    </form>
  );
}
