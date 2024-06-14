import React from "react";
import Preloader from "./Preloader/Preloader";
import { Navbar } from "./Navbar/Navbar";
import Header from "./Header/Header";

function HomeComponent() {
  return (
    <div>
      {/* <Preloader /> */}
      <Navbar />
      <Header />
    </div>
  );
}

export default HomeComponent;
