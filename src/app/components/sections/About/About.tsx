import Achievements from "./elements/Achievements";
import Header from "./elements/Header";
import Interests from "./elements/Interests";
import PersonalInfo from "./elements/PersonalInfo";
import Skills from "./elements/Skills";
import Summary from "./elements/Summary";

const About = () => (
  <section className="py-10">
    <section className="mb-11 px-4">
      <h1 className="bg-gradient-to-r from-blue-500 font-bold to-purple-500 text-3xl md:text-4xl bg-clip-text text-transparent text-center mb-4 ">
        About Me
      </h1>
      <Header />
    </section>
    <section className="grid grid-cols-1 space-y-4 md:space-y-0 md:grid-cols-2 px-4 gap-4">
      <section className="flex flex-col space-y-6">
        <PersonalInfo />
        <Summary />
        <Interests />
      </section>
      <section className="flex flex-col space-y-6">
        <Skills />
        <Achievements />
      </section>
    </section>
  </section>
);

export default About;
