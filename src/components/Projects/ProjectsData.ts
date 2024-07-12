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
  backgroundStyle: string;
  buttonColor: string;
}

export const projects: Project[] = [
  {
    id: 1,
    name: "OmniFood",
    tools: ["HTML", "CSS", "JavaScript"],
    imageFront: omniFood,
    imageBack: food,
    link: "https://omnifood-ten-psi.vercel.app",
    gitHub: "http://github.com/example1",
    backgroundStyle: "linear-gradient(-45deg, #f9c0a2, #f5e0d4, white, white);",
    buttonColor: "#e3753b",
  },
  {
    id: 2,
    name: "Project Two",
    tools: ["Angular", "Express"],
    imageFront: omniFood,
    imageBack: food,
    link: "http://example.com",
    gitHub: "http://github.com/example2",
    backgroundStyle: "linear-gradient(-45deg, #e68450, #f1a278, white, white)",
    buttonColor: "#d15818",
  },
  {
    id: 3,
    name: "Project Three",
    tools: ["Angular", "Express"],
    imageFront: omniFood,
    imageBack: food,
    link: "http://example.com",
    gitHub: "http://github.com/example2",
    backgroundStyle: "linear-gradient(-45deg, #e68450, #f1a278, white, white)",
    buttonColor: "#d15818",
  },
];
