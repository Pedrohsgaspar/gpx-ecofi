import Image from "next/image";
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
  return (
    <header className="sticky top-0 z-50 border-b border-slate-100 bg-white/95 backdrop-blur">
      <Container>
        <div className="flex h-[78px] items-center justify-between">

          {/* Logo */}
          <Image
            src="/images/logos/logo.png"
            alt="GPX Ecofi"
            width={57}
            height={57}
            priority
          />

          {/* Menu */}
          <nav className="hidden items-center gap-10 lg:flex">
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

          {/* Botão */}
          <div className="hidden lg:block">
            <Button>
              Entrar na Plataforma
            </Button>
          </div>

        </div>
      </Container>
    </header>
  );
}