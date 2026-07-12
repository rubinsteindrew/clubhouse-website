import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import Leaderboard from "@/components/Leaderboard";
import Screenshots from "@/components/Screenshots";
import Download from "@/components/Download";
import Footer from "@/components/Footer";
import SplashScreen from "@/components/SplashScreen";

export default function Home() {
  return (
    <SplashScreen>
      <Nav />
      <main>
        <Hero />
        <Leaderboard />
        <Screenshots />
        <Download />
      </main>
      <Footer />
    </SplashScreen>
  );
}
