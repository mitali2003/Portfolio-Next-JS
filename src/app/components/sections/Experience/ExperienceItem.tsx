import { ExperinceItemTypes } from "@/Types/sharedElementTypes";
import Chips from "@/app/Shared Component/Chips";
import Image from "next/image";

const ExperienceItem = ({ data }: ExperinceItemTypes) => (
  <div className="relative bg-[#111827] p-3 md:p-6 rounded-xl shadow-lg max-w-md w-full ml-6 md:ml-0">
    <div
      className="
          absolute 
          -left-15 top-4 md:top-[-24px] 
          md:left-1/2 md:transform md:-translate-x-1/2 
          w-10 h-10 md:w-12 md:h-12 rounded-full bg-[#1f2937] flex items-center justify-center shadow-md
        "
    >
      <Image
        src="/Logo.png"
        alt="Company Logo"
        width={36}
        height={36}
        className="object-contain"
      />
    </div>

    <h3 className="text-lg font-bold text-[#E3E9F1]">{data.company}</h3>
    <p className="text-sm text-[#BCC4D6] font-medium">{data.position}</p>
    <p className="text-sm text-[#BCC4D6] mt-1">{data.date}</p>

    {data.responsibilities && (
      <ul className="list-disc list-inside text-[#BCC4D6] text-sm space-y-1 mt-3">
        {data.responsibilities.map((item: string, i: number) => (
          <li key={i}>{item}</li>
        ))}
      </ul>
    )}

    {data.techStack && (
      <div className="flex flex-wrap gap-2 mt-3">
        {data.techStack.map((tech: string, i: number) => (
          <Chips
            key={i}
            text={tech}
            color="white"
            backgroundColor="transparent"
            className="border border-[#2e3548] text-xs font-medium"
          />
        ))}
      </div>
    )}
  </div>
);

export default ExperienceItem;
