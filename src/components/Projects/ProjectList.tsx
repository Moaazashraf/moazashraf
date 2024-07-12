import React from "react";
import Project from "./Project";
import { projects } from "./ProjectsData";

function ProjectList() {
  return (
    <div>
      {projects?.map((project) => (
        <Project key={project.id} project={project} />
      ))}
    </div>
  );
}

export default ProjectList;
