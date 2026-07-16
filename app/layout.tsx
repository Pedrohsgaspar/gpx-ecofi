import type { Metadata } from "next";
import { Manrope } from "next/font/google";
import "./globals.css";

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-manrope",
});

export const metadata: Metadata = {
  title: "GPX ECOFI | Inteligência Territorial para o Agronegócio",

  description:
    "Plataforma inteligente para monitoramento ambiental, análise fundiária, conformidade legal, monitoramento por satélite e inteligência territorial para o agronegócio.",

  keywords: [
    "agronegócio",
    "CAR",
    "SIGEF",
    "INCRA",
    "monitoramento ambiental",
    "monitoramento por satélite",
    "conformidade ambiental",
    "sensoriamento remoto",
    "geoprocessamento",
    "inteligência territorial",
    "blockchain",
    "inteligência artificial",
    "monitoramento rural",
    "propriedade rural",
  ],

  authors: [{ name: "GPX ECOFI" }],

  creator: "GPX ECOFI",

  publisher: "GPX ECOFI",
  openGraph: {
    title: "GPX ECOFI | Inteligência Territorial para o Agronegócio",

    description:
      "Plataforma inteligente para monitoramento ambiental, análise fundiária, conformidade legal, monitoramento por satélite e inteligência territorial para o agronegócio.",

    url: "https://gpxecofi.com",

    siteName: "GPX ECOFI",

    images: [
      {
        url: "/images/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "GPX ECOFI",
      },
    ],

    locale: "pt_BR",

    type: "website",
  },

  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="pt-BR"
      className={`${manrope.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col font-[var(--font-manrope)]">
        {children}
      </body>
    </html>
  );
}