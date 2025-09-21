import Hero from "./components/sections/Hero/Hero";
import About from "./components/sections/About/About";
import Education from "./components/sections/Education/Education";
import Experience from "./components/sections/Experience/Experience";
import GetInTouch from "./components/sections/GetInTouch/GetInTouch";

const page = () => (
  <section>
    <Hero />
    <section className="bg-background">
      <About />
      <Education />
      <Experience />
      <GetInTouch />
    </section>
  </section>
);

export default page;
