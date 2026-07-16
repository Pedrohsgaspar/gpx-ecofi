import {
  Search,
  BrainCircuit,
  FileText,
  BadgeCheck,
  ArrowRight,
} from "lucide-react";

import Container from "@/components/ui/Container";

const steps = [
  {
    icon: Search,
    number: "01",
    title: "Consulta",
    description:
      "Pesquise um imóvel rural utilizando matrícula, CAR ou coordenadas geográficas.",
  },
  {
    icon: BrainCircuit,
    number: "02",
    title: "Análise Inteligente",
    description:
      "A plataforma reúne automaticamente informações ambientais, fundiárias e territoriais.",
  },
  {
    icon: FileText,
    number: "03",
    title: "Relatório Completo",
    description:
      "Visualize mapas, indicadores e análises detalhadas em poucos segundos.",
  },
  {
    icon: BadgeCheck,
    number: "04",
    title: "Decisão Segura",
    description:
      "Tenha mais confiança para aprovar financiamentos, negociar imóveis ou realizar investimentos.",
  },
];

export default function HowItWorks() {
  return (
    <section 
    id="como-funciona"
    className="scroll-mt-24 bg-slate-50 py-28">
      <Container>

        <div className="mx-auto max-w-3xl text-center">

          <span className="inline-flex rounded-full bg-cyan-100 px-4 py-2 text-xs font-semibold uppercase tracking-widest text-cyan-700">
            Como funciona
          </span>

          <h2 className="mt-6 text-4xl font-extrabold text-slate-900">
            Da consulta à tomada de decisão em poucos passos
          </h2>

          <p className="mt-5 text-lg leading-8 text-slate-600">
            Um fluxo simples, rápido e inteligente para transformar dados em decisões confiáveis.
          </p>

        </div>

        <div className="mx-auto mt-20 max-w-6xl grid gap-12 md:grid-cols-4">

          {steps.map((step, index) => {

            const Icon = step.icon;

            return (
              <div key={step.number} className="relative">

                <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-cyan-500 text-white shadow-lg">

                  <Icon size={30} />

                </div>

                <span className="mt-6 block text-sm font-bold tracking-widest text-cyan-600">
                  {step.number}
                </span>

                <h3 className="mt-2 text-2xl font-bold text-slate-900">
                  {step.title}
                </h3>

                <p className="mt-4 leading-7 text-slate-600">
                  {step.description}
                </p>

                {index < steps.length - 1 && (
                  <ArrowRight
                    className="absolute right-[-32px] top-7 hidden text-cyan-300 lg:block"
                    size={28}
                  />
                )}

              </div>
            );

          })}

        </div>

      </Container>
    </section>
  );
}