"use client";
import "@/styles/index.scss";
import { useState, useEffect } from "react";
import type { Metadata } from "next";
import Header from "@/layouts/Header";
import localFont from "next/font/local";
const TTRegular = localFont({ src: "../lib/TTNorms-Regular.otf" });
import Footer from "@/layouts/Footer";
import Preloader from "@/components/Preloader";
import { AnimatePresence } from "framer-motion";
import { GoogleAnalytics } from "@next/third-parties/google";

// export const metadata: Metadata = {
//   title: "YHM | Best Planners & journals",
//   description:
//     "You have meaning: We help top 3% of population helping them to achieve their maximum potiential with best productivity tools",
//   metadataBase: new URL("https://youhavemeaning.com"),
//   alternates: {
//     canonical: "/",
//     languages: {
//       "en-US": "/en-US",
//     },
//   },
//   openGraph: {
//     images: "../assets/logo.png",
//   },
// };

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);
  return (
    <html lang="en">
      <AnimatePresence>{loading && <Preloader />}</AnimatePresence>

      <body className={`${TTRegular.className}`}>
        <Header />
        {children}
        <Footer />
        <GoogleAnalytics gaId="G-XMBVK5SBJV" />
      </body>
    </html>
  );
}
