import style from "@/styles/Home.module.scss";
import Image from "next/image";
import logo from "@/assets/logo.png";
import localFont from "next/font/local";
const TTThin = localFont({ src: "../../lib/TTNorms-Thin.otf" });
export default function HeroSection() {
  return (
    <section className={style.heroSection}>
      <div className="container">
        <div className={style.philosophyContainer}>
          <div className={style.logo}>
            <Image
              src={logo}
              alt="best-journal-best-planner-you-have-meaning-logo"
              width={50}
              height={50}
            />
          </div>
          <h1 className={style.philosophyMain}>
            <strong className={style.kstrongText}>you</strong>
            <span> have </span>

            <strong className={style.strongText}>Meaning</strong>
          </h1>
          <p className={style.description + " " + TTThin.className}>
            We create impactful digital experiences that attract and engage.
            Check out our work below or learn more about what we do
          </p>
        </div>
      </div>
    </section>
  );
}
