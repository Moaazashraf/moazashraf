import React from "react";
import styles from "./Header.module.scss";
import { ParticlesComponent } from "../Particles/Particles";
import HeaderFooter from "./HeaderFooter/HeaderFooter";
function Header() {
  return (
    <div className={styles.header_wrapper}>
      <div className={styles.container}>
        <header className={styles.heading}>
          <ParticlesComponent />
          <span>turning ideas into</span>
          <br />
          <span>real life </span>
          <span className={styles.heading_gradient}>products</span>
          <br />
          <span>is my calling.</span>
        </header>
        <a className={styles.view_projects_btn}>VIEW PROJECTS</a>
        <HeaderFooter />
        <p className={styles.header_footer_paragraph}>
          Hello stranger! 👋, my name is Moaz and I am a fullstack engineer,
          passionate <br /> about digital products that help people experience
          everyday life, not endure it.
        </p>
      </div>
    </div>
  );
}

export default Header;
