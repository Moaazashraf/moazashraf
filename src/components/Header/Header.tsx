import React from "react";
import styles from "./Header.module.scss";
function Header() {
  return (
    <main className={styles.header_wrapper}>
      <div className={styles.container}>
        <div className={styles.heading}>
          <span>turning ideas into</span>
          <br />
          <span>real life </span>
          <span className={styles.heading_gradient}>products</span>
          <br />
          <span>is my calling.</span>
        </div>
      </div>
    </main>
  );
}

export default Header;
