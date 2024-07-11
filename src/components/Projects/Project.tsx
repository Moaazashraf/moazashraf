import React from "react";

interface projectProps {
  project: {
    id: number;
    name: string;
    tools: string[];
    imageFront: string;
    imageBack: string;
    link: string;
    gitHub: string;
  };
}

function Project(props: projectProps) {
  return <div>Project</div>;
}

export default Project;
