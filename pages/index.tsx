import { Work_Sans } from "next/font/google";
import {
  BankingSection,
  CashCardSection,
  InvestingSection,
  Navbar,
  PaymentsSection,
} from "@/components";
import { HeroSection } from "@/components/HeroSection";

const workSans = Work_Sans({ subsets: ["latin"] });

export default function Home() {
  return (
    <main className={`${workSans.className}`}>
      <Navbar />
      <HeroSection />
      <PaymentsSection />
      <BankingSection />
      <CashCardSection />
      <InvestingSection />
    </main>
  );
}
