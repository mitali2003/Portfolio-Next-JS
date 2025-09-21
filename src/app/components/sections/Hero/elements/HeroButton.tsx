import { buttons } from "@/app/constants/Constant";

const HeroButton = () => (
  <div className="flex justify-center gap-3 md:gap-5">
    {buttons.map((item) => (
      <button
        key={item.key}
        className="p-2 md:p-4 rounded-full bg-[#36456b80] backdrop-blur-md text-white 
           hover:bg-indigo-600/80 active:bg-indigo-600/80
           transition-all duration-300 shadow-lg 
           hover:shadow-indigo-500/40 active:shadow-indigo-500/40 
           hover:scale-110 active:scale-110"
      >
        {item.icon}
      </button>
    ))}
  </div>
);

export default HeroButton;
