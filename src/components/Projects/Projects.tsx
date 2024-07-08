import React from "react";
import ProjectsHeader from "./ProjectsHeader";
import styles from "./styles/Projects.module.scss";

function Projects() {
  return (
    <div className={styles.wrapper}>
      <div className={styles.main}>
        <ProjectsHeader />
      </div>
    </div>
  );
}

export default Projects;
