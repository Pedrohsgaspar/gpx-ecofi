"use client";

import { useState } from "react";
import Image from "next/image";
import { Menu, X } from "lucide-react";

import Container from "../ui/Container";
import Button from "../ui/Button";

const menuItems = [
  { label: "Home", href: "#home" },
  { label: "Soluções", href: "#solucoes" },
  { label: "Como Funciona", href: "#como-funciona" },
  { label: "Planos", href: "#planos" },
  { label: "FAQ", href: "#faq" },
  { label: "Contato", href: "#contato" },
];

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-slate-200 bg-white/95 backdrop-blur-md">
      <Container>

        <div className="flex h-20 items-center justify-between">

          {/* Logo */}
          <a href="#home">
            <Image
              src="/images/logos/logo.png"
              alt="GPX Ecofi"
              width={58}
              height={58}
              priority
              className="h-auto w-12 sm:w-14"
            />
          </a>

          {/* Menu Desktop */}
          <nav className="hidden items-center gap-8 xl:flex">

            {menuItems.map((item) => (

              <a
                key={item.href}
                href={item.href}
                className="text-sm font-medium text-slate-700 transition-colors duration-300 hover:text-cyan-500"
              >
                {item.label}
              </a>

            ))}

          </nav>

          {/* Botão Desktop */}
          <div className="hidden xl:block">

            <Button>
              Entrar na Plataforma
            </Button>

          </div>

          {/* Botão Mobile */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="rounded-xl p-2 text-slate-800 transition hover:bg-slate-100 xl:hidden"
            aria-label="Abrir Menu"
          >
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>

        </div>

      </Container>

      {/* Menu Mobile */}
      <div
        className={`overflow-hidden bg-white transition-all duration-300 xl:hidden ${
          isOpen
            ? "max-h-[500px] border-t border-slate-200"
            : "max-h-0"
        }`}
      >
        <Container>

          <nav className="flex flex-col py-5">

            {menuItems.map((item) => (

              <a
                key={item.href}
                href={item.href}
                onClick={() => setIsOpen(false)}
                className="border-b border-slate-100 py-4 text-base font-medium text-slate-700 transition hover:text-cyan-500"
              >
                {item.label}
              </a>

            ))}

            <Button className="mt-6 w-full">
              Entrar na Plataforma
            </Button>

          </nav>

        </Container>
      </div>

    </header>
  );
}