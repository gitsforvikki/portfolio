import { Header } from "@/components/header";
import { HeroSection } from "@/components/sections/hero";
import { AboutSection } from "@/components/sections/about";
import { SkillsSection } from "@/components/sections/skills";
import { Footer } from "@/components/footer";

export default function Home() {
  return (
    <>
      <Header />
      <main id="main-content">
        <HeroSection />
        <AboutSection />
        <SkillsSection />
        {/* Future sections will be added here */}
      </main>
      <Footer />
    </>
  );
}
