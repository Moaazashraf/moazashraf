import React from "react";
import styles from "./Navbar.module.scss";
import { BurgerIcon, Logo, LogoText } from "../icons";

export const Navbar = () => {
  return (
    <div className={styles.container}>
      <div className={styles.logo_container}>
        <span className={styles.logo_img}>
          <Logo />
        </span>
        <span className={styles.logo_text}>
          <LogoText />
        </span>
      </div>
      <div className={styles.menu_btn}>
        <button>MENU</button>
        <BurgerIcon />
      </div>
    </div>
  );
};
