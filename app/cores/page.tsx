import ColorPanel from "@/app/_components/ColorPanel";
import PageHeader from "@/app/_components/PageHeader";

export default function ColorsPage() {
  return (
    <>
      <PageHeader
        exercises="Exercício 3"
        title="Cores"
        description="Dois componentes irmãos partilham o mesmo estado, que vive no componente pai e desce por props."
      />
      <ColorPanel />
    </>
  );
}
