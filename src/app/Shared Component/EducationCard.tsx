import { EducationCardTypes } from "@/Types/sharedElementTypes";
import Chips from "./Chips";
import { Star } from "lucide-react";
import { MapPin } from "lucide-react";

const EducationCard = ({
  degreeName,
  univercityName,
  address,
  children,
  marks,
  year,
  borderLeft,
}: EducationCardTypes) => (
  <section
    key={marks}
    className={`relative p-6 bg-[#1D2636] border border-[#2A3A4B] rounded-lg hover:border-[#2A3A4B] transition-all`}
  >
    <div
      className={`absolute left-0 top-0 h-full w-1 rounded-l-lg ${borderLeft}`}
    ></div>

    <section className="flex flex-col gap-2 pl-4">
      <section className="flex items-center justify-between">
        <section className="font-extrabold text-xl md:text-2xl text-[#E3E9F1]">
          {degreeName}
        </section>
        <Chips
          text={year}
          color={"#00F2FF"}
          backgroundColor="rgba(0, 242, 255, 0.1)"
          className="text-xs font-semibold border-2 border-[#00F2FF] rounded-full items-center justify-center px-3 py-1"
        />
      </section>

      <section className="font-medium text-[#BCC4D6] text-lg">
        {univercityName}
      </section>
      <section className="text-[#BCC4D6] text-xs flex gap-1 items-center">
        <span>
          <MapPin size={16} />
        </span>
        <span>{address}</span>
      </section>
    </section>

    <Chips
      icon={<Star size={18} />}
      color={"#00F2FF"}
      text={marks}
      className="font-semibold text-sm mt-2"
    />

    <div className="mt-3">
      <span className="text-[#BCC4D6] uppercase text-sm font-semibold">
        Key Achievements
      </span>
      <span className="text-[#BCC4D6] text-xs flex flex-col gap-1 mt-1">
        {children}
      </span>
    </div>
  </section>
);

export default EducationCard;
