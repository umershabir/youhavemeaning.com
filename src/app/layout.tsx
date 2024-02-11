import "@/styles/index.scss";
import type { Metadata } from "next";
import Header from "@/layouts/Header";
import localFont from "next/font/local";
const TTRegular = localFont({ src: "../lib/TTNorms-Regular.otf" });
import Footer from "@/layouts/Footer";

export const metadata: Metadata = {
  title: "YHM | Best Planners & journals",
  description:
    "You have meaning: We help top 3% of population helping them to achieve their maximum potiential with best productivity tools",
  metadataBase: new URL("https://youhavemeaning.com"),
  alternates: {
    canonical: "/",
    languages: {
      "en-US": "/en-US",
    },
  },
  openGraph: {
    images: "../assets/logo.png",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${TTRegular.className} $`}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
