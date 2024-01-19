import type { Metadata } from "next";
import { Inter, Noto_Serif } from "next/font/google";
import "@/styles/index.scss";
import Header from "@/layouts/Header";
import Footer from "@/layouts/Footer";
const inter = Inter({ subsets: ["latin"] });
const notoSerif = Noto_Serif({ subsets: ["latin"] });

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
      <body className={inter.className + " " + notoSerif.className}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
