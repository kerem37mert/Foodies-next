import Link from "next/link";
import Image from "next/image";

import logoImage from "@/assets/logo.png";
import classes from "./main-header.module.css";
import MainHeaderBackground from "./main-header-background";
import NavLink from "./nav-link";

export default function MainHeader() {
    return(
       <>
       <MainHeaderBackground />
        <header className={ classes.header }>
            <Link href="/" className={ classes.logo }>
                <Image src={ logoImage } alt="bla bla" priority />
                NextLevel Food

                <nav className={ classes.nav }>
                    <ul>
                        <li>
                           <NavLink href={"/meals"}>Browse Meals</NavLink>
                        </li>
                        <li>
                           <NavLink href="/community">Foodies Community</NavLink>
                        </li>
                    </ul>
                </nav>
            </Link>
        </header>
      </> 
    );
}