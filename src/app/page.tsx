import About from "./components/sections/About/About";
import Education from "./components/sections/Education/Education";
import GetInTouch from "./components/sections/GetInTouch/GetInTouch";
import Hero from "./components/sections/Hero/Hero";

export default function Home() {
  return (
    <section>
      <Hero />
      <About />
      <Education />
      <GetInTouch />
    </section>
  );
}
