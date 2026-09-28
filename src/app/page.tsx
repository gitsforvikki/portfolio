import { Header } from "@/components/header";
import { HeroSection } from "@/components/sections/hero";

export default function Home() {
  return (
    <>
      <Header />
      <main id="main-content">
        <HeroSection />
        {/* Future sections will be added here */}
      </main>
    </>
  );
}
