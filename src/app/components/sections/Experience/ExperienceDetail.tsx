import { experience } from "@/app/constants/Constant";
import ExperienceItem from "./ExperienceItem";

const ExperienceDetail = () => (
  <div className="relative min-h-screen flex flex-col items-center px-4">
    <div
      className="absolute top-0 bottom-0 w-[2px] bg-gradient-to-b from-blue-500 to-purple-500 
      left-4 md:left-1/2 transform md:-translate-x-1/2"
    ></div>

    <div className="space-y-8 max-w-4xl w-full px-6 md:px-8">
      {experience.map((item, index) => (
        <div
          key={index}
          className={`flex w-full justify-end ${
            index % 2 === 0 ? "md:justify-start" : "md:justify-end"
          }`}
        >
          <div
            className={`relative w-full md:w-[45%] text-left md:ml-10 ${
              index % 2 === 0 ? "md:pr-8" : "md:pl-0"
            }`}
          >
            <ExperienceItem data={item} index={index} />
          </div>
        </div>
      ))}
    </div>
  </div>
);

export default ExperienceDetail;
