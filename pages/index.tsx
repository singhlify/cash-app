import { Work_Sans } from "next/font/google";
import {
  BankingSection,
  CashCardSection,
  InvestingSection,
  Navbar,
  PaymentsSection,
} from "@/components";
import { HeroSection } from "@/components/HeroSection";
import Head from "next/head";
import { homePageContent } from "@/constants";

const workSans = Work_Sans({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Head>
        <title>{homePageContent.meta.title}</title>
        <meta name="description" content={homePageContent.meta.description} />

        <meta itemProp="name" content={homePageContent.meta.title} />
        <meta
          itemProp="description"
          content={homePageContent.meta.description}
        />
        <meta
          itemProp="image"
          content="https://cash-app-lp.vercel.app/assets/images/cash-app.png"
        />

        <meta property="og:url" content="https://cash-app-lp.vercel.app" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content={homePageContent.meta.title} />
        <meta
          property="og:description"
          content={homePageContent.meta.description}
        />
        <meta
          property="og:image"
          content="https://cash-app-lp.vercel.app/assets/images/cash-app.png"
        />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={homePageContent.meta.title} />
        <meta
          name="twitter:description"
          content={homePageContent.meta.description}
        />
        <meta
          name="twitter:image"
          content="https://cash-app-lp.vercel.app/assets/images/cash-app.png"
        />
      </Head>

      <main className={`${workSans.className}`}>
        <Navbar />
        <HeroSection />
        <PaymentsSection />
        <BankingSection />
        <CashCardSection />
        <InvestingSection />
      </main>
    </>
  );
}
