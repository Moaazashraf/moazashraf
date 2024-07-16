import { StaticImageData } from "next/image";
import omniFood from "../../../public/omnifood_logo.png";
import natours from "../../../public/natours_logo.jpg";
import zed from "../../../public/zed_logo.jpg";
import food from "../../../public/food.png";
import travel from "../../../public/travel.jpg";
import villa from "../../../public/villa.jpg";
import one from "../../../public/01.svg";
import two from "../../../public/02.svg";
import three from "../../../public/03.svg";
export interface Project {
  id: number;
  name: string;
  tools: string[];
  imageFront: StaticImageData;
  imageBack: StaticImageData;
  link: string;
  gitHub?: string;
  backgroundStyle: string;
  buttonColor: string;
  backgroundNumber: StaticImageData;
}

export const projects: Project[] = [
  {
    id: 1,
    name: "OmniFood",
    tools: ["HTML", "CSS", "JavaScript"],
    imageFront: omniFood,
    imageBack: food,
    link: "https://omnifood-ten-psi.vercel.app",
    gitHub: "https://github.com/Moaazashraf/omnifood",
    backgroundStyle: "linear-gradient(-45deg, #e68450, #f1a278, white, white)",
    buttonColor: "#e3753b",
    backgroundNumber: one,
  },
  {
    id: 2,
    name: "Natours",
    tools: ["next.ts", "scss", "framer motion"],
    imageFront: natours,
    imageBack: travel,
    link: "https://natours-gules-five.vercel.app",
    gitHub: "https://github.com/Moaazashraf/natours",
    backgroundStyle: "linear-gradient(-45deg, #308C09, #6CD93E, white, white)",
    buttonColor: "#308C09",
    backgroundNumber: two,
  },
  {
    id: 3,
    name: "ZED",
    tools: ["React.js", "CSS", "PHP"],
    imageFront: zed,
    imageBack: villa,
    link: "https://zed-beryl.vercel.app/",
    backgroundStyle: "linear-gradient(-45deg, #3777B4, #78B9F7, white, white)",
    buttonColor: "#3777B4",
    backgroundNumber: three,
  },
];
