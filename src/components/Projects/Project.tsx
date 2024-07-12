import React from "react";
import styles from "./styles/Project.module.scss";
import Image, { StaticImageData } from "next/image";

interface projectProps {
  project: {
    id: number;
    name: string;
    tools: string[];
    imageFront: StaticImageData;
    imageBack: StaticImageData;
    link: string;
    gitHub: string;
  };
}

function Project(props: projectProps) {
  return (
    <div className={styles.project_card}>
      <div className={styles.project_card__left}>
        {props.project.tools.join(", ")}
      </div>
      <div className={styles.project_card__middle}>
        <Image src={props.project.imageFront} alt="image back" />
        <Image
          className={styles.first_img}
          src={props.project.imageBack}
          alt="image front"
        />
      </div>
      <div className={styles.project_card__right}>
        <h2>{props.project.name}</h2>
        <a href={props.project.link}>VISIT THE WEBSITE</a>
        <div>
          <a href={props.project.gitHub}></a>
        </div>
      </div>
    </div>
  );
}

export default Project;
