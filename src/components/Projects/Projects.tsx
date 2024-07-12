import React from "react";
import ProjectsHeader from "./ProjectsHeader";
import styles from "./styles/Projects.module.scss";
import ProjectList from "./ProjectList";

function Projects() {
  return (
    <div id="sectionProjects" className={styles.wrapper}>
      <div className={styles.main}>
        <ProjectsHeader />
        <ProjectList />
      </div>
    </div>
  );
}

export default Projects;
