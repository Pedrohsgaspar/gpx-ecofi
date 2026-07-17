import Image from "next/image";
import { ArrowRight } from "lucide-react";

import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";

export default function CTA() {
  return (
    <section
      id="contato"
      className="relative overflow-hidden"
    >
      {/* Imagem de fundo */}

      <Image
        src="/images/cta/cta-bg.jpg"
        alt="Plantação"
        fill
        priority={false}
        className="object-cover"
      />

      {/* Overlay */}

      <div className="absolute inset-0 bg-slate-950/60" />

      <Container>
        <div className="relative flex min-h-[360px] flex-col items-center justify-center py-20 text-center sm:min-h-[420px] lg:min-h-[440px]">

          <h2 className="max-w-4xl text-3xl font-extrabold leading-tight text-white sm:text-4xl lg:text-5xl">

            Encontre a solução ideal para o seu negócio.

          </h2>

          <p className="mt-6 max-w-2xl text-base leading-8 text-slate-200 sm:mt-7 sm:text-lg sm:leading-8 lg:mt-8 lg:text-xl lg:leading-9">

            Junte-se a milhares de profissionais do agronegócio que já
            tomam decisões mais inteligentes com a GPX.

          </p>

          <Button className="mt-10 flex w-full max-w-xs items-center justify-center gap-3 px-8 py-4 text-base shadow-2xl sm:mt-12 sm:w-auto sm:px-10 sm:text-lg">

            Começar agora

            <ArrowRight size={20} />

          </Button>

        </div>
      </Container>
    </section>
  );
}