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
      className="scroll-mt-24 relative overflow-hidden bg-white pt-10 pb-12 sm:pt-14 sm:pb-16 lg:pt-20 lg:pb-24"
    >
      <Container>
        <div className="flex flex-col-reverse items-center gap-12 lg:gap-16 xl:flex-row">

          {/* Texto */}
          <div className="w-full text-center xl:w-[42%] xl:text-left">

            <span className="inline-flex rounded-full bg-cyan-100 px-4 py-2 text-[10px] font-semibold uppercase tracking-widest text-cyan-700 sm:text-xs">
              TECNOLOGIA QUE GERA RESULTADOS
            </span>

            <h1 className="mt-6 text-3xl font-black leading-[1.08] tracking-[-0.04em] text-slate-900 sm:text-5xl lg:text-6xl">
              Inteligência e tecnologia para facilitar{" "}
              <span className="text-cyan-500">
                suas decisões
              </span>{" "}
              no agronegócio.
            </h1>

            <p className="mx-auto mt-6 max-w-xl text-base leading-7 text-slate-600 sm:text-lg sm:leading-8 xl:mx-0">
              Dados precisos, análises inteligentes com monitoramento contínuo para uma gestão rural mais eficiente, segura e rastreável.
            </p>

            <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:justify-center xl:justify-start">

              <Button className="w-full sm:w-auto">
                Começar agora
              </Button>

              <a
                href="#solucoes"
                className="group flex w-full items-center justify-center gap-2 rounded-full border border-slate-300 px-6 py-3 font-medium text-slate-700 transition hover:border-cyan-500 hover:text-cyan-600 sm:w-auto sm:justify-start"
              >
                Conhecer soluções

                <ArrowRight
                  size={18}
                  className="transition group-hover:translate-x-1"
                />

              </a>

            </div>

            <div className="mt-10 flex flex-col gap-4 text-sm text-slate-600 sm:flex-row sm:flex-wrap sm:justify-center xl:justify-start xl:gap-8">

              <div className="flex items-center justify-center gap-2 xl:justify-start">

                <ShieldCheck
                  size={18}
                  className="text-cyan-500"
                />

                Dados seguros

              </div>

              <div className="flex items-center justify-center gap-2 xl:justify-start">

                <RefreshCcw
                  size={18}
                  className="text-cyan-500"
                />

                Atualização contínua

              </div>

              <div className="flex items-center justify-center gap-2 xl:justify-start">

                <Satellite
                  size={18}
                  className="text-cyan-500"
                />

                Tempo real

              </div>

            </div>

          </div>

          {/* Imagem */}
          <div className="relative mt-4 flex w-full justify-center xl:mt-0 xl:w-[63%] xl:justify-end">

            <Image
              src="/images/hero/hero--image.jpg"
              alt="Monitoramento por satélite"
              width={1300}
              height={1000}
              className="h-[360px] w-full rounded-3xl object-cover shadow-2xl sm:h-[500px] lg:h-auto"
              priority
            />

            {/* Card superior */}
            <div className="absolute right-3 top-3 w-36 rounded-3xl border border-slate-200 bg-white/95 p-3 sm:p-4 shadow-xl backdrop-blur sm:right-6 sm:top-6 sm:w-48 lg:right-10 lg:top-10 lg:w-60 xl:right-20 xl:top-11 xl:w-70">

              <p className="text-xs font-semibold text-slate-500 sm:text-sm">
                Área Monitorada
              </p>

              <h3 className="mt-2 text-xl font-bold text-slate-900 sm:text-2xl">
                12.450 ha
              </h3>

              <div className="mt-4 h-2 rounded-full bg-slate-200">

                <div className="h-2 w-3/4 rounded-full bg-cyan-500" />

              </div>

              <p className="mt-3 text-xs font-medium text-green-600 sm:text-sm">
                +18% este mês
              </p>

            </div>

            {/* Card inferior */}
            <div className="absolute left-3 bottom-3 w-32 rounded-2xl border border-slate-100 bg-white/95 p-3 sm:p-4 shadow-xl backdrop-blur sm:left-6 sm:bottom-6 sm:w-44 lg:left-8 lg:bottom-8 lg:w-52 xl:left-5 xl:bottom-8 xl:w-60">

              <h3 className="text-base font-bold text-slate-900 sm:text-lg">
                Score Ambiental
              </h3>

              <p className="mt-2 text-3xl font-extrabold text-cyan-500 sm:text-4xl">
                0,87
              </p>

              <div className="mt-5 space-y-2 text-sm text-slate-600">

              </div>

            </div>

            {/* Satélite */}
            <div className="absolute bottom-3 right-3 rounded-full bg-white/90 px-3 py-2 text-[10px] font-medium text-slate-700 shadow-lg backdrop-blur sm:bottom-5 sm:right-5 sm:px-4 sm:py-2 sm:text-xs lg:bottom-6 lg:right-6">

              🛰 Satélite ativo • 7/24/365

            </div>

          </div>

        </div>
      </Container>
    </section>
  );
}