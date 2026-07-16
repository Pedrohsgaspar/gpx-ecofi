import {
  Scale,
  Building2,
  TrendingUp,
  Landmark,
  Users,
  BarChart3,
  Tractor,
} from "lucide-react";

import Container from "@/components/ui/Container";

const audience = [
  {
  icon: Tractor,
  title: "Produtores Rurais",
  description:
    "Monitore propriedades, acompanhe indicadores ambientais e tome decisões com base em dados confiáveis e atualizados.",
  },
  {
    icon: Scale,
    title: "Advogados do Agro",
    description:
      "Dados precisos e atualizados para embasar suas análises, pareceres e relatórios jurídicos.",
  },
  {
    icon: Building2,
    title: "Corretores / Imobiliárias",
    description:
      "Consulte informações completas sobre imóveis rurais antes de fechar qualquer negociação.",
  },
  {
    icon: TrendingUp,
    title: "Investidores",
    description:
      "Avalie propriedades rurais com segurança antes de realizar investimentos.",
  },
  {
    icon: Landmark,
    title: "Sistemas Financeiros",
    description:
      "Tenha informações confiáveis para análise de crédito e gestão de riscos.",
  },
  {
    icon: Users,
    title: "Cooperativas do Agro",
    description:
      "Monitore propriedades, acompanhe indicadores e tome decisões com mais segurança.",
  },
  {
    icon: BarChart3,
    title: "Traders",
    description:
      "Consulte dados estratégicos para operações agrícolas e negociações do setor.",
  },
];
const firstRow = audience.slice(0, 4);
const secondRow = audience.slice(4);

export default function Audience() {
  return (
    <section
  id="publico"
  className="scroll-mt-24 bg-slate-50 py-28">
      <Container>

        <div className="mx-auto max-w-3xl text-center">

          <span className="inline-flex rounded-full bg-cyan-100 px-4 py-2 text-xs font-semibold uppercase tracking-widest text-cyan-700">
            Para quem é
          </span>

          <h2 className="mt-6 text-4xl font-extrabold text-slate-900">
            Feito para quem trabalha com imóveis rurais e precisa de dados confiáveis de forma rápida.
          </h2>

          </div>

        <div className="mt-16 space-y-8">

  {/* Primeira linha */}
  <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-4">

    {firstRow.map((item) => {

      const Icon = item.icon;

      return (
        <div
          key={item.title}
          className="group rounded-3xl border border-slate-200 bg-white p-8 transition-all duration-300 hover:-translate-y-2 hover:border-cyan-400 hover:shadow-xl"
        >
          <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-cyan-50 text-cyan-600 transition group-hover:bg-cyan-500 group-hover:text-white">

            <Icon size={28} />

          </div>

          <h3 className="mt-6 text-xl font-bold text-slate-900">
            {item.title}
          </h3>

          <p className="mt-4 leading-7 text-slate-600">
            {item.description}
          </p>

        </div>
      );

    })}

  </div>

  {/* Segunda linha */}
  <div className="mx-auto grid max-w-5xl gap-8 md:grid-cols-2 xl:grid-cols-3">

    {secondRow.map((item) => {

      const Icon = item.icon;

      return (
        <div
          key={item.title}
          className="group rounded-3xl border border-slate-200 bg-white p-8 transition-all duration-300 hover:-translate-y-2 hover:border-cyan-400 hover:shadow-xl"
        >
          <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-cyan-50 text-cyan-600 transition group-hover:bg-cyan-500 group-hover:text-white">

            <Icon size={28} />

          </div>

          <h3 className="mt-6 text-xl font-bold text-slate-900">
            {item.title}
          </h3>

          <p className="mt-4 leading-7 text-slate-600">
            {item.description}
          </p>

        </div>
      );

    })}

  </div>

</div>

      </Container>
    </section>
  );
}