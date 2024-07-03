import React from "react";
import Preloader from "./Preloader/Preloader";
import { Navbar } from "./Navbar/Navbar";
import Header from "./Header/Header";
import Projects from "./Projects/Projects";

function HomeComponent() {
  return (
    <div>
      {/* <Preloader /> */}
      <Navbar />
      <Header />
      <Projects />
    </div>
  );
}

export default HomeComponent;
