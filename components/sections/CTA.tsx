import Image from "next/image";
import { ArrowRight } from "lucide-react";

import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";

export default function CTA() {
  return (
    <section id="contato" className="relative overflow-hidden rounded-t-[36px]">

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

        <div className="relative flex min-h-[440px] flex-col items-center justify-center text-center">

          <h2 className="max-w-4xl text-5xl font-extrabold leading-tight text-white">

            Encontre a solução ideal para o seu negócio.

          </h2>

          <p className="mt-8 max-w-2xl text-xl leading-9 text-slate-200">

            Junte-se a milhares de profissionais do agronegócio que já
            tomam decisões mais inteligentes com a GPX.

          </p>

          <Button className="mt-12 flex items-center gap-3 px-10 py-4 text-lg shadow-2xl">

            Começar agora

            <ArrowRight size={20} />

          </Button>

        </div>

      </Container>

    </section>
  );
}