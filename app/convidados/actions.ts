"use server";

import {refresh} from "next/cache";
import {guests} from "./data";

/*
  Exercício 17 — Server Action
  "use server" no topo do ficheiro: todas as funções exportadas correm no servidor.
  O Next.js cria automaticamente um endpoint POST para cada uma (como um ficheiro .php
  de destino de um formulário).
  Atenção: qualquer pessoa pode chamar esse endpoint diretamente, sem passar pelo
  formulário. Por isso, a validação tem de ficar AQUI, no servidor.

  Exercício 18 — useActionState
  Quando usada com useActionState, a action recebe (prevState, formData) e o valor
  devolvido passa a ser o novo state do formulário. Por isso devolve sempre o mesmo
  formato: {message, success}.
*/

export type GuestFormState = {
  message: string;
  success: boolean;
};

export async function addGuest(
  prevState: GuestFormState,
  formData: FormData,
): Promise<GuestFormState> {
  // Descomenta para simular um servidor lento e ver o estado "pending" do botão.
  // await new Promise((resolve) => setTimeout(resolve, 1500));

  // formData.get() devolve string | File | null (o campo pode ser texto, um ficheiro
  // ou nem existir). O typeof "estreita" o tipo: a partir daqui, o TypeScript sabe que é string.
  // Graças ao curto-circuito do ||, o .trim() só corre quando name já é string.
  const name = formData.get("name");
  if (typeof name !== "string" || name.trim() === "") {
    return {message: "O nome é obrigatório.", success: false};
  }

  const trimmedName = name.trim();
  const lastId = guests.at(-1)?.id ?? 0;
  guests.push({id: lastId + 1, name: trimmedName});

  // Volta a renderizar a página no servidor e envia a lista atualizada para o browser,
  // sem reload completo (o estado do formulário mantém-se).
  refresh();

  return {message: `${trimmedName} foi adicionado.`, success: true};
}
