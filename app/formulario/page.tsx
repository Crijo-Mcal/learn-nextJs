import NameForm from "@/app/_components/NameForm";
import PageHeader from "@/app/_components/PageHeader";

export default function FormPage() {
  return (
    <>
      <PageHeader
        exercises="Exercício 6"
        title="Formulário"
        description="Formulário com input controlado e validação no cliente (useState + onSubmit)."
      />
      <NameForm />
    </>
  );
}
