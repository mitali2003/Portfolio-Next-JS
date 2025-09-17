import React from "react";
import styles from "./Hero.module.css";
import HeroHeader from "./elements/HeroHeader";
import HeroDescription from "./elements/HeroDescription";
import HeroButton from "./elements/HeroButton";
import ScrollButton from "./elements/ScrollButton";

const Hero = () => {
  return (
    <section
      className={`${styles.hero} relative flex flex-col items-center justify-center min-h-screen text-center p-4`}
    >
      <div className="z-10 flex flex-col items-center justify-evenly min-h-screen w-full">
        <HeroHeader />
        <HeroDescription />
        <HeroButton />
        <ScrollButton />
      </div>
    </section>
  );
};

export default Hero;
