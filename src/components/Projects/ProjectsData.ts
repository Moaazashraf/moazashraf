export interface Project {
  id: number;
  name: string;
  tools: string[];
  imageFront: string;
  imageBack: string;
  link: string;
  gitHub: string;
}

export const projects: Project[] = [
  {
    id: 1,
    name: "Project One",
    tools: ["React", "Node.js"],
    imageFront: "front1.jpg",
    imageBack: "back1.jpg",
    link: "http://example.com",
    gitHub: "http://github.com/example1",
  },
  {
    id: 2,
    name: "Project Two",
    tools: ["Angular", "Express"],
    imageFront: "front2.jpg",
    imageBack: "back2.jpg",
    link: "http://example.com",
    gitHub: "http://github.com/example2",
  },
];
