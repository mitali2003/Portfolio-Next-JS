import Hero from "./components/sections/Hero/Hero";
import About from "./components/sections/About/About";
import Education from "./components/sections/Education/Education";
import GetInTouch from "./components/sections/GetInTouch/GetInTouch";
import Experience from "./components/sections/Experience/Experience";

export default function Home() {
  return (
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
}
