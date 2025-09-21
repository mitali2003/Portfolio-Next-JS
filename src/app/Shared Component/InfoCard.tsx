import { InfoCardTypes } from "@/Types/sharedElementTypes";

const InfoCard = ({ icon, text, subText, link }: InfoCardTypes) => (
  <a
    href={link}
    target="_blank"
    className="space-y-2 overflow-hidden bg-gray-900 hover:bg-primary/10 rounded-lg p-3 text-center transition-all duration-300 hover:scale-105 cursor-pointer flex flex-col items-center justify-center"
  >
    <div className="text-2xl mb-1 bg-[#00f2ff1a] p-3 rounded-lg">{icon}</div>
    <div className="text-sm ">{text}</div>
    <div className="text-[#E1E7EF] font-medium">{subText}</div>
    <div className="absolute inset-0 bg-gradient-to-t from-primary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
  </a>
);

export default InfoCard;
