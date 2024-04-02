import { motion } from "framer-motion";
import React, { useEffect, useRef, useState } from "react";
import styles from "./Preloader.module.scss";
import Image from "next/image";

function Preloader() {
  const [containerHeight, setContainerHeight] = useState(0);
  const languagesRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (languagesRef.current) {
      const height = languagesRef.current.clientHeight;
      console.log(height);

      setContainerHeight(height);
    }
  }, []);

  const languageVariants = {
    hidden: {
      y: 0,
    },
    visible: {
      y: -containerHeight,
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
        <Image src="/logo.svg" alt="Main Logo" width={35} height={35} />
        <div className={styles.languages_container}>
          <motion.div
            variants={languageVariants}
            initial="hidden"
            animate="visible"
            className={styles.languages}
            ref={languagesRef}
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
