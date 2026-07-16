"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import Container from "@/components/ui/Container";

/* ==========================================================
   PERGUNTAS FREQUENTES

   Para adicionar uma pergunta:

   {
      question: "...",
      answer: "..."
   },

   Basta adicionar um novo objeto abaixo.
========================================================== */

const faqs = [
  {
    question: "Como funciona a consulta?",
    answer:
      "Envie a localização ou código CAR pelo WhatsApp e receba um relatório completo com todos os dados da propriedade em minutos.",
  },
  {
    question: "Quais dados estão incluídos?",
    answer:
      "Dados do CAR, INCRA/SIGEF, matrícula, CCIR, área total, limites geográficos e alertas ambientais. Tudo em um único relatório.",
  },
  {
    question: "Posso monitorar minhas terras?",
    answer:
      "Sim! Cadastre suas fazendas e receba alertas automáticos no WhatsApp sobre embargos e situação ambiental, além de um arquivo atualizado todo mês com KML e PDF.",
  },
  {
    question: "Posso cancelar a qualquer momento?",
    answer:
      "Sim, sem multa e sem burocracia. Você pode cancelar sua assinatura quando quiser.",
  },
  {
    question: "Os dados são confiáveis?",
    answer:
      "Sim, todos os dados são extraídos de fontes oficiais como SICAR e SIGEF/INCRA.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  function toggle(index: number) {
    setOpenIndex(openIndex === index ? null : index);
  }

  return (
    <section id="faq" className="scroll-mt-24 bg-white py-28">
      <Container>

        {/* Cabeçalho */}

        <div className="mx-auto max-w-3xl text-center">

          <span className="inline-flex rounded-full bg-cyan-100 px-4 py-2 text-xs font-semibold uppercase tracking-widest text-cyan-700">
            FAQ
          </span>

          <h2 className="mt-6 text-4xl font-extrabold text-slate-900">
            Perguntas frequentes
          </h2>

          <p className="mt-5 text-lg leading-8 text-slate-600">
            Tire suas dúvidas sobre a nossa plataforma.
          </p>

        </div>

        {/* Accordion */}

        <div className="mx-auto mt-16 max-w-4xl space-y-5">

          {faqs.map((faq, index) => {

            const isOpen = openIndex === index;

            return (

              <div
                key={faq.question}
                className="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm transition hover:shadow-md"
              >

                <button
                  onClick={() => toggle(index)}
                  className="flex w-full items-center justify-between px-8 py-6 text-left"
                >

                  <span className="text-lg font-semibold text-slate-900">
                    {faq.question}
                  </span>

                  <ChevronDown
                    size={24}
                    className={`transition-transform duration-300 ${
                      isOpen ? "rotate-180 text-cyan-500" : "text-slate-400"
                    }`}
                  />

                </button>

                <div
                  className={`grid transition-all duration-300 ${
                    isOpen
                      ? "grid-rows-[1fr]"
                      : "grid-rows-[0fr]"
                  }`}
                >

                  <div className="overflow-hidden">

                    <p className="px-8 pb-8 leading-8 text-slate-600">
                      {faq.answer}
                    </p>

                  </div>

                </div>

              </div>

            );

          })}

        </div>

      </Container>
    </section>
  );
}