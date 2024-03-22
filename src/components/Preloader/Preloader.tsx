import { motion } from "framer-motion";
import React from "react";
import styles from "./Preloader.module.scss";
function Preloader() {
  const languageVariants = {
    hidden: {
      y: 0,
    },
    visible: {
      y: "-27vh",
      transition: {
        ease: "linear",
        delay: 0.5,
        duration: 8,
      },
    },
  };
  return (
    <motion.div className={styles.background}>
      <div className={styles.preloader_container}>
        <div className={styles.logo}>logo</div>
        <div className={styles.languages_container}>
          <motion.div
            variants={languageVariants}
            initial="hidden"
            animate="visible"
            className={styles.languages}
          >
            <span>HTML</span>
            <span>CSS/SCSS</span>
            <span>JAVASCRIPT</span>
            <span>TYPESCRIPT</span>
            <span>NODE JS</span>
            <span>REACT JS</span>
            <span>NEXT JS</span>
            <span>FRAMER MOTION</span>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
}

export default Preloader;
