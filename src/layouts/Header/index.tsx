import Image from "next/image";
import logo from "../../../public/logo.svg";
import style from "./Header.module.scss";
import Link from "next/link";
export default function Header() {
  return (
    <header className={style.header}>
      <nav className={style.navigation + " container"}>
        <Link href="/products" className={style.navLink}>
          Products
        </Link>
        <Link href={"/"}>
          <Image
            src={logo}
            alt="you-have-meaning-productive-planner-and-journal-logo"
            width={50}
            height={50}
          />
        </Link>
        <Link href="/aboutus" className={style.navLink}>
          About Us
        </Link>
        <Link href="/blogs" className={style.navLink}>
          Blogs
        </Link>
      </nav>
    </header>
  );
}
