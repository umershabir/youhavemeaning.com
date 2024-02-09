import Image from "next/image";
import logo from "@/assets/logo.png";
import style from "./Header.module.scss";
import Link from "next/link";
// import { BsBag } from "react-icons/bs";

export default function Header() {
  return (
    <header className={style.header}>
      <nav className={style.navigation}>
        <Link href="/blogs" className={style.navLink}>
          Blogs
        </Link>
        <Link href={"/"} className={style.logoLink}>
          <Image
            src={logo}
            alt="you-have-meaning-productive-planner-and-journal-logo"
            width={30}
            height={30}
          />
          {/* You Have Meaning */}
        </Link>
        {/* <Link href="/aboutus" className={style.navLink}>
          About Us
        </Link> */}
        <Link href="/products" className={style.navLink}>
          Products
        </Link>
      </nav>
    </header>
  );
}
