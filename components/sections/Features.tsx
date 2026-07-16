import {
  LayoutGrid,
  Database,
  Cpu,
  Lock,
} from "lucide-react";

import Container from "@/components/ui/Container";

/* ===========================================================
   DIFERENCIAIS

   Para alterar os textos,
   basta editar o array abaixo.
=========================================================== */

const features = [
  {
    title: "Interface intuitiva",
    description:
      "Design limpo e moderno que facilita a navegação e a análise dos dados sem curva de aprendizado.",
    icon: LayoutGrid,
  },
  {
    title: "Dados confiáveis",
    description:
      "Fontes oficiais como INCRA, IBAMA e órgãos governamentais para máxima precisão e credibilidade.",
    icon: Database,
  },
  {
    title: "Tecnologia moderna",
    description:
      "IA, blockchain, IoT e processamento em nuvem AWS para análises em tempo real.",
    icon: Cpu,
  },
  {
    title: "Segurança total",
    description:
      "Conformidade com LGPD e infraestrutura segura para proteger seus dados.",
    icon: Lock,
  },
];

export default function Features() {
  return (
    <section id="diferenciais" className="bg-white py-28">
      <Container>
        <div className="mx-auto max-w-3xl text-center">

          <h2 className="text-4xl font-extrabold text-slate-900">
            Diferenciais que geram confiança
          </h2>

          <p className="mt-5 text-lg leading-8 text-slate-600">
            Construído sobre fundamentos sólidos para entregas de alta precisão.
          </p>

        </div>

        <div className="mx-auto mt-16 grid max-w-6xl gap-6 md:grid-cols-2 xl:grid-cols-4">

          {features.map((feature) => {

            const Icon = feature.icon;

            return (

              <div
                key={feature.title}
                className="rounded-[28px] border border-slate-200 bg-white p-8 text-center transition-all duration-300 hover:-translate-y-2 hover:border-cyan-300 hover:shadow-xl"
              >

                <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-cyan-100">

                  <Icon
                    size={28}
                    className="text-cyan-700"
                  />

                </div>

                <h3 className="mt-6 text-2xl font-bold text-slate-900">
                  {feature.title}
                </h3>

                <p className="mt-5 leading-8 text-slate-600">
                  {feature.description}
                </p>

              </div>

            );

          })}

        </div>
      </Container>
    </section>
  );
}