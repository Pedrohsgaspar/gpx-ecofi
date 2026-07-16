import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

import Hero from "@/components/sections/Hero";
import Audience from "@/components/sections/Audience";
import Solutions from "@/components/sections/Solutions";
import Ecosystem from "@/components/sections/Ecosystem";
import HowItWorks from "@/components/sections/HowItWorks";
import Pricing from "@/components/sections/Pricing";
import FAQ from "@/components/sections/FAQ";
import CTA from "@/components/sections/CTA";

export default function Home() {
  return (
    <>
      <Header />

      <main>
        <Hero />

        <Audience />

        <Solutions />

        <Ecosystem />

        <HowItWorks />

        <Pricing />

        <FAQ />

        <CTA />
      </main>

      <Footer />
    </>
  );
}