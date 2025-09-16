import React from "react";
import styles from "./Hero.module.css";
import HeroHeader from "./elements/HeroHeader";
import HeroDescription from "./elements/HeroDescription";
import HeroButton from "./elements/HeroButton";

const Hero = () => {
  return (
    <section className={`${styles.hero} flex flex-col pt-10`}>
      <HeroHeader />
      <HeroDescription />
      <HeroButton />
    </section>
  );
};

export default Hero;
