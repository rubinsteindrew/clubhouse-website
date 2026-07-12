import type { Metadata } from "next";
import Nav from "@/components/Nav";
import Explainer from "@/components/Explainer";
import RankingSystem from "@/components/RankingSystem";
import Features from "@/components/Features";
import TopHundred from "@/components/TopHundred";
import Download from "@/components/Download";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Features — Your Clubhouse",
  description:
    "How Your Clubhouse works: head-to-head course ranking, two Top 100 lists, a friends feed, group chats, a map of every course you've played, and more.",
};

export default function FeaturesPage() {
  return (
    <>
      <Nav />
      <main>
        <Explainer />
        <RankingSystem />
        <Features />
        <TopHundred />
        <Download />
      </main>
      <Footer />
    </>
  );
}
