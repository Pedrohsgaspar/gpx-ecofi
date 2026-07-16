import { Check, Star } from "lucide-react";
import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";

/* ===========================================================
   CONFIGURAÇÕES DOS PLANOS
   =========================================================== */

/*
  Caso o cliente altere os preços,
  modifique apenas estes valores.
*/

const BASIC_PRICE = "R$ 59,90";

const PREMIUM_PRICE = "R$ 89,90";

/* ===========================================================
   RECURSOS DO PLANO BÁSICO

   Para adicionar um recurso:
   basta adicionar uma nova linha.

   Para remover:
   basta apagar a linha.

   Não é necessário alterar o layout.
   =========================================================== */

const basicFeatures = [
  "INCRA / SIGEF",
  "Matrícula e CCIR",
  "Área e limites",
  "Embargos IBAMA",
  "Terras Indígenas",
  "Assentamentos",
  "ICMBio",
  "UCs Estaduais e Municipais",
  "Camada PRODES",
];

/* ===========================================================
   RECURSOS EXCLUSIVOS DO PREMIUM

   O Premium já possui TODOS
   os recursos do Básico.

   Aqui ficam somente os diferenciais.
   =========================================================== */

const premiumFeatures = [
  "Todos os recursos do Básico",
  "Protocolo PVS",
  "Módulo CAR",
  "Protocolo PVR",
  "Análise Preditiva",
  "Monitoramento contínuo 7/24/365",
  "Alertas no WhatsApp",
  "Farm Scan — relatório mensal em PDF ou NFT",
  "Área de Queimadas",
  "Temperatura",
  "Pressão Atmosférica",
  "Direção do Vento",
  "Histórico de Precipitação",
  "Histórico Hídrico",
  "Aptidão Agrícola",
  "Dados de Pedido junto a ANM",
  "Análise por Talhão ou por Hectare",
  "Blockchain",
  "Inteligência Artificial (IA)",
  "IoT integrada",
  "Monitoramento e sensoriamento remoto 7/24/365",
  "Tokenização via blockchain",
  "De Par",
  "MRV",
  "Dados CAR – Conformidade 22/07/2008",
  "Análise de trabalho escravo",
  "Conformidade EUDR",
  "Conformidade CBAM",
  "Conformidade SBCE",
  "Conformidade LGPD",
  "Análise por talhão ou hectare",
  "Pegada hídrica",
  "Pluviometria",
  "Evaporização",
  "Armazenamento AWS",
  "Superficiais e Subterrâneas",
  "Pivôs de Irrigação",
  "Aeródromos",
  "CONAB Safras",
  "Armazéns CONAB",
  "Mineração",
  "Florestas Públicas",
  "Sítios Arqueológicos",
];

export default function Pricing() {
  return (
    <section
      id="planos"
      className="scroll-mt-24 bg-slate-50 py-28"
    >
      <Container>

        {/* Cabeçalho */}

        <div className="mx-auto max-w-4xl text-center">

          <span className="inline-flex rounded-full bg-cyan-100 px-4 py-2 text-xs font-semibold uppercase tracking-widest text-cyan-700">
            Planos
          </span>

          <h2 className="mt-6 text-4xl font-extrabold text-slate-900">
            Escolha o plano ideal para você
          </h2>

          <p className="mt-5 text-lg leading-8 text-slate-600">
            Escolha a solução que melhor atende às suas necessidades.
            Você pode começar pelo Plano Básico ou utilizar todos os
            recursos avançados disponíveis no Premium.
          </p>

        </div>

        {/* Cards dos planos */}

        <div className="mx-auto mt-15 max-w-[1100px]">

           <div className="grid gap-8 lg:grid-cols-2">
          {/* Card Básico */}

          <div className="rounded-[25px] border border-slate-200 bg-white p-10 shadow-lg transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl">

  <span className="rounded-full bg-cyan-100 px-4 py-2 text-xs font-bold uppercase tracking-widest text-cyan-700">
    Plano Básico
  </span>

  <h3 className="mt-8 text-5xl font-extrabold text-slate-900">
    {BASIC_PRICE}
  </h3>

  <Button className="mt-8 w-full py-3 text-base">
    Começar agora
  </Button>

  <div className="my-10 h-px bg-slate-200" />

  <div className="mt-2 max-h-[700px] space-y-4 overflow-y-auto pr-2 scrollbar-thin scrollbar-thumb-cyan-300 scrollbar-track-transparent">

    {basicFeatures.map((feature) => (

      <div
        key={feature}
        className="flex items-start gap-3"
      >

        <div className="mt-1 flex h-6 w-6 items-center justify-center rounded-full bg-cyan-100">

          <Check
            size={15}
            className="text-cyan-600"
          />

        </div>

        <span className="leading-7 text-slate-700">
          {feature}
        </span>

      </div>

    ))}

  </div>

</div>

          {/* Card Premium */}

          <div className="relative rounded-[34px] border-2 border-cyan-500 bg-[#0E6673] p-10 text-white shadow-2xl transition-all duration-300 hover:-translate-y-1 hover:shadow-cyan-200">

  {/* Selo */}

 <div className="absolute right-8 top-8 flex items-center gap-2 rounded-full bg-amber-400 px-4 py-2 text-xs font-bold uppercase tracking-wider text-slate-900 shadow-lg">

    <Star
  size={14}
  fill="currentColor"
  className="text-slate-900"/>

    RECOMENDADO

  </div>

  <span className="rounded-full bg-cyan-500 px-4 py-2 text-xs font-bold uppercase tracking-widest text-white">
    Plano Premium
  </span>

  <h3 className="mt-8 text-5xl font-extrabold">
    {PREMIUM_PRICE}
  </h3>

  <Button
    className="mt-8 w-full bg-black py-3 text-base font-bold text-slate-900 hover:bg-slate-100"
  >
    Solicitar demonstração
  </Button>

  <div className="my-10 h-px bg-slate-700" />

  <div className="mt-2 max-h-[700px] space-y-4 overflow-y-auto pr-2 scrollbar-thin scrollbar-thumb-cyan-400 scrollbar-track-transparent">

    {premiumFeatures.map((feature) => (

      <div
        key={feature}
        className="flex items-start gap-3"
      >

        <div className="mt-1 flex h-6 w-6 items-center justify-center rounded-full bg-cyan-500">

          <Check
            size={15}
            className="text-white"
          />

        </div>

        <span className="leading-7 text-slate-200">
          {feature}
        </span>

      </div>

    ))}

  </div>

</div>

          </div> {/* Fecha Grid */}

        </div> {/* Fecha max-w-[930px] */}

        <div className="mt-14 text-center">

  <p className="text-sm text-slate-500">
    Todos os planos incluem atualizações constantes, infraestrutura segura na AWS e suporte especializado.
  </p>

</div>

      </Container>
    </section>
  );
}