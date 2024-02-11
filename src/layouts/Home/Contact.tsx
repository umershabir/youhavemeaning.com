import style from "@/styles/Home.module.scss";

export default function Contact() {
  return (
    <section className="container sm-pt-0">
      <div className={style.contactContainer}>
        <div className={style.contactus}>
          <div className={style.contactType}>
            <p>Email</p>
            <a href="">youhavemeaning@gmail.com</a>
          </div>
          <div className={style.contactType}>
            <p>Visit</p>
            <a href="">Harbancepura Lahore, Pakistan</a>
          </div>
          <div className={style.contactType}>
            <p>Whatsapp</p>
            <a href="">+923024716222</a>
          </div>
          <div className={style.contactType}>
            <p>Social</p>
            <div className={style.socialLinks}>
              <a href="">Tw</a>
              <a href="">Li</a>
              {/* <a href="">Fb</a> */}
              <a
                href="https://www.instagram.com/youhavemeaning_/"
                target="_blank"
              >
                Ins
              </a>
            </div>
          </div>
        </div>
        <div className={style.aboutus}>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Perspiciatis beatae a atque ducimus in dolore alias eum iusto et,
            quis, dolor accusamus totam, aut repudiandae sit omnis aliquid. Qui,
            eligendi?
          </p>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Rem est
            nulla adipisci voluptatibus assumenda cumque at libero, veniam
            beatae fugiat modi quos saepe aspernatur, recusandae dignissimos
            tempore! Accusantium, nihil veniam!
          </p>
        </div>
      </div>
    </section>
  );
}
