import React from "react";
import styles from "./styles/ProjectsHeader.module.scss";

function ProjectsHeader() {
  return (
    <div className={styles.projects_header}>
      <h2 className={styles.title}>
        <span> Yeah, I work hard</span> <small>💼</small>
      </h2>
      <p className={styles.description}>
        Each project is unique. Here are some of my works.
      </p>
    </div>
  );
}

export default ProjectsHeader;
