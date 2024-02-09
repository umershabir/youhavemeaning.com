import "@/styles/index.scss";
import type { Metadata } from "next";
// import { Inter, Noto_Serif } from "next/font/google";
import Header from "@/layouts/Header";
import localFont from "next/font/local";
const TTRegular = localFont({ src: "../lib/TTNorms-Regular.otf" });
// const TTMedium = localFont({ src: "../lib/TTNorms-Medium.otf" });
// const TTThin = localFont({ src: "../lib/TTNorms-Thin.otf" });
// import Header from "@/layouts/Header";
import Footer from "@/layouts/Footer";

export const metadata: Metadata = {
  title: "YHM | Best Planners & journals",
  description:
    "You have meaning: We help top 3% of population helping them to achieve their maximum potiential with best productivity tools",
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
