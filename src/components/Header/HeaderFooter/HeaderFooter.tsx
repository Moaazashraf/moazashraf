import React from "react";
import styles from "./HeaderFooter.module.scss";
function HeaderFooter() {
  return (
    <div className={styles.header_footer_wrapper}>
      <div className={styles.links}>
        <a href="https://github.com/Moaazashraf" rel="noopener" target="_blank">
          👾 GH
        </a>
        <a
          href="https://www.linkedin.com/in/moaaz-ashraf"
          rel="noopener"
          target="_blank"
        >
          💼 LD
        </a>
        <a href="" rel="noopener" target="_blank">
          📸 IN
        </a>
      </div>
    </div>
  );
}

export default HeaderFooter;
