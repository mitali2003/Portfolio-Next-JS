import { buttons } from "@/app/constants/Constant";

const HeroButton = () => (
  <div className="flex justify-center gap-3 md:gap-5">
    {buttons.map(({ key, link, icon }) => (
      <a
        key={key}
        href={link}
        target="_blank"
        className="p-2 md:p-4 rounded-full bg-[#36456b80] backdrop-blur-md text-white 
           hover:bg-indigo-600/80 active:bg-indigo-600/80
           transition-all duration-300 shadow-lg 
           hover:shadow-indigo-500/40 active:shadow-indigo-500/40 
           hover:scale-110 active:scale-110"
      >
        {icon}
      </a>
    ))}
  </div>
);

export default HeroButton;
