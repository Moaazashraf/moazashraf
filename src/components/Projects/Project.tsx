import React from "react";
import styles from "./styles/Project.module.scss";
import Image, { StaticImageData } from "next/image";
import github from "../../../public/github.svg";

interface projectProps {
  project: {
    id: number;
    name: string;
    tools: string[];
    imageFront: StaticImageData;
    imageBack: StaticImageData;
    link: string;
    gitHub?: string;
    backgroundStyle: string;
    buttonColor: string;
  };
}

function Project(props: projectProps) {
  return (
    <div className={styles.project_card}>
      <div className={styles.project_card__left}>
        {props.project.tools.join(", ")}
      </div>
      <div className={styles.project_card__middle}>
        <Image src={props.project.imageFront} alt="image back" loading="lazy" />
        <Image
          className={styles.first_img}
          src={props.project.imageBack}
          alt="image front"
          loading="lazy"
        />
      </div>
      <div className={styles.project_card__right}>
        <h2
          style={
            {
              "--background-gradient": props.project.backgroundStyle,
            } as React.CSSProperties
          }
          className={styles.project_name}
        >
          {props.project.name}
        </h2>
        <a
          style={
            {
              "--text-color": props.project.buttonColor,
            } as React.CSSProperties
          }
          className={styles.visit_btn}
          href={props.project.link}
          target="_blank"
        >
          VISIT THE WEBSITE
        </a>
        {props.project.gitHub && (
          <div>
            <a
              className={styles.github_link}
              href={props.project.gitHub}
              target="_blank"
            >
              <Image width={20} src={github} height={20} alt="github" />
            </a>
          </div>
        )}
      </div>
    </div>
  );
}

export default Project;
