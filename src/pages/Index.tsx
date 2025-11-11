import { useEffect, useRef } from "react";
import { useLocation } from "react-router-dom";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Stats from "@/components/Stats";
import HowItWorks from "@/components/HowItWorks";
import Team from "@/components/Team";
import Footer from "@/components/Footer";

const Index = () => {
  const heroRef = useRef<HTMLElement | null>(null);
  const statsRef = useRef<HTMLElement | null>(null);
  const howItWorksRef = useRef<HTMLElement | null>(null);
  const teamRef = useRef<HTMLElement | null>(null);
  const location = useLocation();

  const scrollToSection = (ref: React.RefObject<HTMLElement>) => {
    ref.current?.scrollIntoView({ behavior: "smooth" });
  };

  // 👇 scroll automatically if navigated with a state
  useEffect(() => {
    const section = location.state?.scrollTo;
    if (section === "hero") scrollToSection(heroRef);
    if (section === "stats") scrollToSection(statsRef);
    if (section === "howItWorks") scrollToSection(howItWorksRef);
    if (section === "team") scrollToSection(teamRef);
  }, [location]);

  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <section ref={heroRef}>
          <Hero />
        </section>
        <section ref={statsRef}>
          <Stats />
        </section>
        <section ref={howItWorksRef}>
          <HowItWorks />
        </section>
        <section ref={teamRef}>
          <Team />
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Index;
