import type { Metadata } from "next";
import Nav from "@/components/Nav";
import FAQ from "@/components/FAQ";
import Download from "@/components/Download";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "FAQ — Your Clubhouse",
  description:
    "Answers to common questions about Your Clubhouse — how course ranking works, pricing, privacy, Android, and more.",
};

export default function FAQPage() {
  return (
    <>
      <Nav />
      <main>
        <FAQ />
        <Download />
      </main>
      <Footer />
    </>
  );
}
