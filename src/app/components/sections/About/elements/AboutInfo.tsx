import PersonalInfo from "./PersonalInfo";
import Summary from "./Summary";
import Interests from "./Interests";
import Skills from "./Skills";
import Achievements from "./Achievements";

const AboutInfo = () => (
  <section className="grid grid-cols-1 space-y-4 md:space-y-0 md:grid-cols-2 px-5 gap-4">
    <section className="flex flex-col space-y-6">
      <Summary />
      <Achievements />
    </section>
    <section className="flex flex-col space-y-6">
      <Skills />
    </section>
  </section>
);

export default AboutInfo;
