import PageHeader from "@/app/_components/PageHeader";
import {guests} from "./data";
import GuestForm from "./GuestForm";

/*
  Esta página continua a ser Server Component porque lê dados que estão no servidor.
  Se tivesse "use client", o browser receberia uma CÓPIA do array e nunca veria os
  convidados adicionados pela Server Action (que altera o array do servidor).
  Só o formulário, que precisa de interação, é Client Component.
*/
export default function GuestsPage() {
  return (
    <>
      <PageHeader
        exercises="Exercícios 17 e 18"
        title="Livro de convidados"
        description="Formulário com Server Action, validação no servidor, mensagens com useActionState e estado pendente."
      />
      <div className="grid gap-6 md:grid-cols-[20rem_1fr]">
        <GuestForm />
        <section className="card">
          <h2 className="font-semibold">Convidados ({guests.length})</h2>
          <ul className="mt-3 divide-y divide-border">
            {guests.map((guest) => (
              <li key={guest.id} className="py-2">
                {guest.name}
              </li>
            ))}
          </ul>
        </section>
      </div>
    </>
  );
}
