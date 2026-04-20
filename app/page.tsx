import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import Explainer from "@/components/Explainer";
import RankingSystem from "@/components/RankingSystem";
import Features from "@/components/Features";
import Screenshots from "@/components/Screenshots";
import Personas from "@/components/Personas";
import TopHundred from "@/components/TopHundred";
import FAQ from "@/components/FAQ";
import Download from "@/components/Download";
import Footer from "@/components/Footer";
import SplashScreen from "@/components/SplashScreen";
import Testimonials from "@/components/Testimonials";

export default function Home() {
  return (
    <SplashScreen>
      <Nav />
      <main>
        <Hero />
        <Explainer />
        <RankingSystem />
        <Features />
        <Screenshots />
        <Personas />
        <TopHundred />
        <Testimonials />
        <FAQ />
        <Download />
      </main>
      <Footer />
    </SplashScreen>
  );
}
