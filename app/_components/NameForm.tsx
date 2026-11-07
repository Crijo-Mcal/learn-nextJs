"use client";

import {useState} from "react";

/*
  Exercício 6 — Formulários (inputs controlados)
  O valor do input vem do estado (value={name}) e cada tecla atualiza o estado (onChange).
  Assim, o React é a "fonte da verdade" do formulário.
  event.preventDefault() impede o reload da página que o browser faria ao submeter.

  Compara com app/convidados, onde um formulário parecido usa uma Server Action
  e não precisa de useState nem de preventDefault.
*/
export default function NameForm() {
  const [name, setName] = useState("");
  const [savedName, setSavedName] = useState("");
  const [error, setError] = useState("");

  function handleSubmit(event: React.SubmitEvent<HTMLFormElement>) {
    event.preventDefault();

    const trimmedName = name.trim();
    if (trimmedName === "") {
      setError("O nome é obrigatório.");
      return;
    }

    setError("");
    setSavedName(trimmedName);
    setName("");
  }

  return (
    <form onSubmit={handleSubmit} className="card flex w-full max-w-sm flex-col gap-4">
      <label className="flex flex-col gap-1 text-sm font-medium">
        Nome
        <input
          className="input"
          type="text"
          placeholder="Escreve o teu nome"
          value={name}
          onChange={(e) => {
            setName(e.target.value);
            setError("");
          }}
        />
      </label>

      {/* Como o input é controlado, podemos usar o valor enquanto o utilizador escreve. */}
      <p className="min-h-5 text-sm text-muted">
        {name.trim() !== "" && `Olá, ${name.trim()}!`}
      </p>

      <button className="btn" type="submit">
        Guardar
      </button>

      {/* Cada mensagem depende de um só estado, para a lógica ficar simples de ler. */}
      <div className="min-h-5 text-sm">
        {error && <p className="text-danger">{error}</p>}
        {!error && savedName && <p className="text-success">Nome guardado: {savedName}</p>}
      </div>
    </form>
  );
}
