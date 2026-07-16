import {
  MapPinned,
  ShieldCheck,
  Satellite,
  FileSearch,
  ClipboardCheck,
  FileText,
} from "lucide-react";

import Container from "@/components/ui/Container";

const solutions = [
  {
    icon: MapPinned,
    title: "Dados Fundiários",
    description:
      "Consulte informações completas sobre imóveis rurais com rapidez e precisão.",
  },
  {
    icon: ShieldCheck,
    title: "Análise da Conformidade Ambiental",
    description:
      "CAR, Áreas Consolidadas até 2008, Áreas Protegidas, Vegetação Nativa, Dossiê do PRODES, Supressão de Vegetação, Cursos Hídricos, SIGEF, INCRA, Trabalho Escravo, IBAMA, órgãos governamentais e conformidades legais, normativas e mercadológicas (EUDR, CBAM e SBCE).",
  },
  {
    icon: Satellite,
    title: "Monitoramento e Sensoriamento Remoto por Satélite",
    description:
      "Acompanhe alterações na propriedade com imagens atualizadas e monitoramento contínuo.",
  },
  {
    icon: FileSearch,
    title: "Relatório de Verificação e Defesa de Alertas de Desmatamento",
    description:
      "Auditoria forense individualizada do PRODES e dos alertas do DETER e MapBiomas.",
  },
  {
    icon: ClipboardCheck,
    title: "Relatório de Conformidade Legal, Normativa e Mercadológica",
    description:
      "Todos os dados são tratados conforme exigências legais, normativas e mercadológicas, com emissão de Relatório de Conformidade 100% rastreável.",
  },
  {
    icon: FileText,
    title: "Laudo Técnico de Sensoriamento Remoto",
    description:
      "Comprovação do uso e ocupação do solo no marco temporal de 22/07/2008. Categorização forense da Área Rural Consolidada, com análise técnica e laudo fundamentado na legislação vigente.",
  },
];

export default function Solutions() {
  return (
    <section
      id="solucoes"
      className="scroll-mt-24 py-28 bg-white"
    >
      <Container>

        <div className="mx-auto max-w-4xl text-center">

          <span className="inline-flex rounded-full bg-cyan-100 px-4 py-2 text-xs font-semibold uppercase tracking-widest text-cyan-700">
            Soluções
          </span>

          <h2 className="mt-6 text-4xl font-extrabold text-slate-900">
            Soluções Completas de Análise Fundiária e Ambiental
          </h2>

          <p className="mt-5 text-lg leading-8 text-slate-600">
            Do diagnóstico fundiário e ambiental com monitoramento contínuo numa única Plataforma  
          </p>

        </div>

        <div className="mt-16 grid gap-8 md:grid-cols-2 xl:grid-cols-3">

          {solutions.map((solution) => {

            const Icon = solution.icon;

            return (

              <div
                key={solution.title}
                className="group rounded-3xl border border-slate-200 bg-white p-8 transition-all duration-300 hover:-translate-y-2 hover:border-cyan-400 hover:shadow-2xl"
              >

                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-cyan-50 text-cyan-600 transition-all group-hover:bg-cyan-500 group-hover:text-white">

                  <Icon size={28} />

                </div>

                <h3 className="mt-6 text-xl font-bold text-slate-900">
                  {solution.title}
                </h3>

                <p className="mt-4 leading-7 text-slate-600">
                  {solution.description}
                </p>

              </div>

            );

          })}

        </div>

      </Container>
    </section>
  );
}