import React from "react";
import styles from "./Header.module.scss";
import { Particiles } from "../Particiles/Particiles";
function Header() {
  return (
    <main className={styles.header_wrapper}>
      <div className={styles.container}>
        <Particiles />
        <header className={styles.heading}>
          <span>turning ideas into</span>
          <br />
          <span>real life </span>
          <span className={styles.heading_gradient}>products</span>
          <br />
          <span>is my calling.</span>
        </header>
        <a className={styles.view_projects_btn}>VIEW PROJECTS</a>
      </div>
    </main>
  );
}

export default Header;
