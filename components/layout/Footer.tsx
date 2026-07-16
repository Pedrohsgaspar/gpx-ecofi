import Image from "next/image";
import Link from "next/link";

import {
  Mail,
  Phone,
  MapPin,
  ArrowUpRight,
} from "lucide-react";

import {
  FaInstagram,
  FaLinkedinIn,
  FaYoutube,
  FaWhatsapp,
} from "react-icons/fa";

import Container from "@/components/ui/Container";

export default function Footer() {
  return (
    <footer className="bg-[#071A2D] text-white">

      <Container>

        {/* ==========================================================
            PARTE SUPERIOR
        ========================================================== */}

        <div className="grid gap-16 py-20 lg:grid-cols-[1.6fr_1fr_1fr_1.2fr]">

          {/* =======================================================
              LOGO
          ======================================================= */}

          <div>

            <Image
                        src="/images/logos/logo.png"
                        alt="GPX Ecofi"
                        width={60}
                        height={60}
                      />

            <p className="mt-7 max-w-sm leading-8 text-slate-300">

              Plataforma inteligente para monitoramento ambiental,
              análise fundiária, conformidade e inteligência
              territorial para o agronegócio.

            </p>

            <div className="mt-8 flex gap-4">

              <a
  href="https://www.instagram.com/gpxecofi"
  target="_blank"
  rel="noopener noreferrer"
  aria-label="Instagram da GPX ECOFI"
  className="flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/5 transition-all duration-300 hover:border-cyan-400 hover:bg-cyan-500"
>
  <FaInstagram size={18} />
</a>

              <a
  href="https://www.youtube.com/@GPXTECINVEST"
  target="_blank"
  rel="noopener noreferrer"
  aria-label="YouTube da GPX ECOFI"
  className="flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/5 transition-all duration-300 hover:border-cyan-400 hover:bg-cyan-500"
>
  <FaYoutube size={18} />
</a>

            </div>

          </div>

          {/* =======================================================
              NAVEGAÇÃO
          ======================================================= */}

          <div>

            <h3 className="text-lg font-bold">
              Navegação
            </h3>

            <div className="mt-7 flex flex-col gap-4">

              <Link
  href="#home"
  className="group flex items-center justify-between text-slate-300 transition hover:text-cyan-400"
>
  Home

  <ArrowUpRight
    size={15}
    className="opacity-0 transition group-hover:opacity-100"
  />

</Link>

              <Link
                href="#publico"
                className="group flex items-center justify-between text-slate-300 transition hover:text-cyan-400"
              >
                Para quem é

                <ArrowUpRight
                  size={15}
                  className="opacity-0 transition group-hover:opacity-100"
                />

              </Link>

              <Link
                href="#solucoes"
                className="group flex items-center justify-between text-slate-300 transition hover:text-cyan-400"
              >
                Soluções

                <ArrowUpRight
                  size={15}
                  className="opacity-0 transition group-hover:opacity-100"
                />

              </Link>

              <Link
                href="#planos"
                className="group flex items-center justify-between text-slate-300 transition hover:text-cyan-400"
              >
                Planos

                <ArrowUpRight
                  size={15}
                  className="opacity-0 transition group-hover:opacity-100"
                />

              </Link>

              <Link
                href="#faq"
                className="group flex items-center justify-between text-slate-300 transition hover:text-cyan-400"
              >
                FAQ

                <ArrowUpRight
                  size={15}
                  className="opacity-0 transition group-hover:opacity-100"
                />

              </Link>

            </div>

          </div>

          {/* =======================================================
              SOLUÇÕES
          ======================================================= */}

          <div>

            <h3 className="text-lg font-bold">
              Soluções
            </h3>

            <div className="mt-7 flex flex-col gap-4 text-slate-300">

              <span>Monitoramento Ambiental</span>

              <span>Inteligência Artificial</span>

              <span>Blockchain</span>

              <span>Tokenização</span>

              <span>Monitoramento 7/24/365</span>

            </div>

          </div>

          {/* =======================================================
              CONTATO
          ======================================================= */}

          <div>

            <h3 className="text-lg font-bold">
              Contato
            </h3>

            <div className="mt-7 space-y-6">

              <div className="flex gap-4">

                <a
  href="mailto:contato@gpxecofi.com.br"
  className="flex h-11 w-11 items-center justify-center rounded-xl bg-cyan-500/15 transition hover:bg-cyan-500/25"
  aria-label="Enviar e-mail para GPX ECOFI"
>

  <Mail
    size={18}
    className="text-cyan-400"
  />

</a>

                <div>

                  <p className="text-sm text-slate-400">
                    Email
                  </p>

                  <a
                href="mailto:contato@gpxecofi.com.br"
                className="text-slate-200 transition hover:text-cyan-400">
                contato@gpxecofi.com.br
                </a>

                </div>

              </div>

              <div className="flex gap-4">

  <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-cyan-500/15 shrink-0">

    <FaWhatsapp
      size={20}
      className="text-cyan-400"
    />

  </div>

  <div>

    <p className="text-sm text-slate-400">
      WhatsApp
    </p>

    <a
  href="https://wa.me/5548988749454"
  target="_blank"
  rel="noopener noreferrer"
  className="text-slate-200 transition hover:text-cyan-400"
>
  (48) 98874-9454
</a>

  </div>

</div>

              <div className="flex gap-4">

                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-cyan-500/15 shrink-0">

                  <MapPin
                    size={18}
                    className="text-cyan-400"
                  />

                </div>

                <div>

                  <p className="text-sm text-slate-400">
                    Localização
                  </p>

                  <p className="text-slate-200">
                    Av Presidente Kennedy, 179 - Sala 408
                  </p>

                </div>

              </div>

            </div>

          </div>

        </div>
                {/* ==========================================================
            PARTE INFERIOR
        ========================================================== */}

        <div className="border-t border-white/10 py-8">

  <p className="text-center text-sm text-slate-400">
    © GPX Tecnologia e Investimento. Todos os direitos reservados.
  </p>

</div>

      </Container>

    </footer>
  );
}