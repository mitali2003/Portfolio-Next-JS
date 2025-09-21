import Title from "@/app/Shared Component/Title";
import AboutInfo from "./elements/AboutInfo";

const About = () => (
  <section className="py-10">
    <Title
      title="About Me"
      subTitle="Get to know more about my journey, skills, and what drives my passion for
    technology"
    />
    <AboutInfo />
  </section>
);

export default About;
