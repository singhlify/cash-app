import { Work_Sans } from "next/font/google";
import {
  BankingSection,
  CashCardSection,
  HeroSection,
  InvestingSection,
  Navbar,
  PaymentsSection,
} from "@/components";
import { homePageContent } from "@/constants";
import { Metadata } from "next";

const workSans = Work_Sans({ subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL(`${process.env.NEXT_PUBLIC_URL}`),
  title: homePageContent.meta.title,
  description: homePageContent.meta.description,
  applicationName: "Cash App by Gurjot Singh (@Singhlify)",
  authors: [
    {
      name: "Gurjot Singh (@Singhlify)",
      url: "https://singhlify.com/",
    },
  ],
  keywords: ["cash", "app", "nextjs", "landing page", "reactjs", "project"],
  referrer: "origin",
  viewport: {
    width: "device-width",
    initialScale: 1,
  },
  creator: "Gurjot Singh (@Singhlify)",
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: process.env.NEXT_PUBLIC_URL,
  },
  icons: {
    icon: "/favicon.ico",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: process.env.NEXT_PUBLIC_URL,
    title: homePageContent.meta.title,
    description: homePageContent.meta.description,
    siteName: "Cash App by Gurjot Singh (@Singhlify)",
    images: [
      {
        url: `${process.env.NEXT_PUBLIC_URL}/assets/images/cash-app.png`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@Singhlify",
    creator: "@Singhlify",
    title: homePageContent.meta.title,
    description: homePageContent.meta.description,
    images: `${process.env.NEXT_PUBLIC_URL}/assets/images/cash-app.png`,
  },
};

export default function HomePage() {
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
