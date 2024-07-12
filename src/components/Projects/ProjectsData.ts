import { StaticImageData } from "next/image";
import omniFood from "../../../public/omnifood_logo.png";
import food from "../../../public/food.png";
export interface Project {
  id: number;
  name: string;
  tools: string[];
  imageFront: StaticImageData;
  imageBack: StaticImageData;
  link: string;
  gitHub: string;
}

export const projects: Project[] = [
  {
    id: 1,
    name: "Project One",
    tools: ["HTML", "CSS", "JavaScript"],
    imageFront: omniFood,
    imageBack: food,
    link: "http://example.com",
    gitHub: "http://github.com/example1",
  },
  {
    id: 2,
    name: "Project Two",
    tools: ["Angular", "Express"],
    imageFront: omniFood,
    imageBack: food,
    link: "http://example.com",
    gitHub: "http://github.com/example2",
  },
  {
    id: 3,
    name: "Project Three",
    tools: ["Angular", "Express"],
    imageFront: omniFood,
    imageBack: food,
    link: "http://example.com",
    gitHub: "http://github.com/example2",
  },
];
