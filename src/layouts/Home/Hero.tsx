import style from "@/styles/Home.module.scss";
export default function HeroSection() {
  return (
    <section className={style.heroSection}>
      <div className="container">
        <div className={style.philosophyContainer}>
          <p className={style.philosophyText}>Our Philosophy</p>
          <p className={style.philosophyMain}>
            We create elevated, thoughtfully designed products
            <br /> to help you realize your potential and live a happier, <br />
            more fulfilling life.
          </p>
        </div>
      </div>
    </section>
  );
}
