import {
  Shield,
  Brain,
  Cpu,
  Wifi,
  Satellite,
  Calculator,
  Leaf,
  Layers3,
  DollarSign,
  Link2,
} from "lucide-react";

import Container from "@/components/ui/Container";

/* ===========================================================
   ECOSSISTEMA GPX

   Para alterar qualquer card basta editar este array.

   title  -> título do card

   icon   -> ícone

   items  -> lista de recursos
=========================================================== */

const ecosystemCards = [
  {
    title: "Blockchain Proprietária",
    icon: Shield,
    items: [
      "Garantia de imutabilidade",
      "Rastreabilidade de dados",
      "Transparência",
      "Auditabilidade",
      "Prova digital das informações",
    ],
  },

  {
    title: "Inteligência Artificial (IA)",
    icon: Brain,
    items: [
      "Uso de IA para análise preditiva",
      "Inteligência comercial",
      "Cenários econômicos",
      "Análise de riscos",
      "Tomada de decisão",
    ],
  },

  {
    title: "Machine Learning",
    icon: Cpu,
    items: [
      "Modelos inteligentes",
      "Previsão de emissões",
      "Comportamento produtivo",
      "Produção de risco",
      "Ganhos de eficiência",
    ],
  },

  {
    title: "IoT Integrada",
    icon: Wifi,
    items: [
      "Sensores em campo",
      "Solo",
      "Clima",
      "Biomassa",
      "Produção",
    ],
  },

  {
    title: "Monitoramento e Sensoriamento Remoto",
    icon: Satellite,
    items: [
      "Imagens de satélite",
      "Geoprocessamento",
      "Mapas multiespectrais",
      "Aplicações CAR",
      "Rastreabilidade climática",
    ],
  },

  {
    title: "Calculadora Automatizada de GEE",
    icon: Calculator,
    items: [
      "Mensuração automática",
      "ESCOPO 1, 2 e 3",
      "Redução de erros",
      "Padronização",
      "Conformidade",
    ],
  },

  {
    title: "Gestão de Biomassa e Resíduos",
    icon: Leaf,
    items: [
      "Transformação de passivos",
      "Monetização",
      "Controle",
      "Indicadores",
      "Relatórios",
    ],
  },

  {
    title: "Plataforma de Biochar",
    icon: Layers3,
    items: [
      "Integração",
      "Produção",
      "Mensuração",
      "MRV",
      "Comercialização",
    ],
  },

  {
    title: "Créditos de Carbono e Ativos Ambientais",
    icon: DollarSign,
    items: [
      "Estruturação",
      "MRV",
      "Certificação",
      "Tokenização",
      "Comercialização",
    ],
  },

  {
    title: "Tokenização via Blockchain",
    icon: Link2,
    items: [
      "Carbono",
      "Biomassa",
      "CPR Verde",
      "PSA",
      "Ativos Ambientais",
    ],
  },
];

export default function Ecosystem() {
  return (
    <section
      id="ecossistema"
      className="relative overflow-hidden bg-[#0D2943] py-28"
    >
      {/* Fundo */}

      <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_top,#38bdf8,transparent_55%)]" />

      <Container>

        <div className="mx-auto max-w-4xl text-center">

          <span className="text-xs font-semibold uppercase tracking-[0.35em] text-cyan-300">
            Um ecossistema integrado de inteligência ambiental e econômica
          </span>

          <h2 className="mt-5 text-5xl font-extrabold text-white">
            A GPX Conecta:
          </h2>

        </div>

        {/* Grid */}

        <div className="mt-16 grid gap-7 md:grid-cols-2 xl:grid-cols-5">

          {ecosystemCards.map((card) => {

            const Icon = card.icon;

            return (

              <div
                key={card.title}
                className="rounded-3xl border border-cyan-900/60 bg-white/5 p-7 backdrop-blur transition-all duration-300 hover:-translate-y-2 hover:border-cyan-400 hover:shadow-[0_20px_60px_rgba(6,182,212,.18)]"
              >

                <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-cyan-500/15">

                  <Icon
                    size={28}
                    className="text-cyan-300"
                  />

                </div>

                <h3 className="text-xl font-bold text-white">
                  {card.title}
                </h3>

                <div className="mt-6 space-y-3">

                  {card.items.map((item) => (

                    <div
                      key={item}
                      className="flex items-start gap-3"
                    >

                      <div className="mt-2 h-2 w-2 rounded-full bg-cyan-400" />

                      <span className="text-sm leading-6 text-slate-300">
                        {item}
                      </span>

                    </div>

                  ))}

                </div>

              </div>

            );

          })}

        </div>

      </Container>
    </section>
  );
}