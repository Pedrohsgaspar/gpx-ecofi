import Image from "next/image";
import {
  ArrowRight,
  ShieldCheck,
  RefreshCcw,
  Satellite,
} from "lucide-react";

import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";

export default function Hero() {
  return (
    <section
  id="home"
  className="scroll-mt-24 relative overflow-hidden bg-white pt-20 pb-24"
>
      <Container>
        <div className="flex flex-col-reverse items-center gap-16 lg:flex-row">
          {/* Texto */}
          <div className="w-full lg:w-[42%]">
            <span className="inline-flex rounded-full bg-cyan-100 px-4 py-2 text-xs font-semibold uppercase tracking-widest text-cyan-700">
              TECNOLOGIA QUE GERA RESULTADOS
            </span>

            <h1 className="mt-6 text-5xl font-black tracking-[-0.04em] leading-[1.05] text-slate-900 lg:text-6xl">
              Inteligência e tecnologia para facilitar{" "}
              <span className="text-cyan-500">
                suas decisões
              </span>{" "}
              no agronegócio.
            </h1>

            <p className="mt-6 max-w-xl text-lg leading-8 text-slate-600">
              Dados precisos, análises inteligentes com monitoramento contínuo para uma gestão rural mais eficiente, segura e rastreável. 
            </p>

            <div className="mt-10 flex flex-wrap gap-4">
              <Button>
                Começar agora
              </Button>

              <a
               href="#solucoes"
              className="group flex items-center gap-2 rounded-full border border-slate-300 px-6 py-3 font-medium text-slate-700 transition hover:border-cyan-500 hover:text-cyan-600">
                Conhecer soluções

              <ArrowRight
               size={18}
               className="transition group-hover:translate-x-1" />
              </a>
            </div>

            <div className="mt-10 flex flex-wrap gap-8 text-sm text-slate-600">

              <div className="flex items-center gap-2">
                <ShieldCheck
                  size={18}
                  className="text-cyan-500"
                />
                Dados seguros
              </div>

              <div className="flex items-center gap-2">
                <RefreshCcw
                  size={18}
                  className="text-cyan-500"
                />
                Atualização contínua
              </div>

              <div className="flex items-center gap-2">
                <Satellite
                  size={18}
                  className="text-cyan-500"
                />
                Tempo real
              </div>

            </div>
          </div>

          {/* Imagem */}
          <div className="relative flex w-full justify-end lg:w-[63%]">

            <Image
              src="/images/hero/hero-image.jpg"
              alt="Monitoramento por satélite"
              width={1300}
              height={1000}
              className="h-auto w-full rounded-[32px] object-cover shadow-2xl"
            />

            {/* Card superior */}

            <div className="absolute right-21 top-11 w-70 rounded-4xl border border-slate-250 bg-white/95 p-5 shadow-xl backdrop-blur">

              <p className="text-sm font-semibold text-slate-500">
                Área Monitorada
              </p>

              <h3 className="mt-2 text-3xl font-bold text-slate-900">
                12.450 ha
              </h3>

              <div className="mt-5 h-2 rounded-full bg-slate-200">

                <div className="h-2 w-3/4 rounded-full bg-cyan-500" />

              </div>

              <p className="mt-4 text-sm font-medium text-green-600">
                +18% este mês
              </p>

            </div>

            {/* Card inferior */}

            <div className="absolute left-5 bottom-8 w-60 rounded-3xl border border-slate-100 bg-white/95 p-5 shadow-xl backdrop-blur">

              <h3 className="text-xl font-bold text-slate-900">
                Score Ambiental
              </h3>

              <p className="mt-2 text-5xl font-extrabold text-cyan-500">
                0,87
              </p>

              <div className="mt-5 space-y-2 text-sm text-slate-600">

              </div>

            </div>

            {/* Satélite */}

            <div className="absolute bottom-6 right-6 rounded-full bg-white/90 px-5 py-3 text-sm font-medium text-slate-700 shadow-lg backdrop-blur">

              🛰 Satélite ativo • 7/24/365

            </div>

          </div>
        </div>
      </Container>
    </section>
  );
}