import { Social_Links } from "@/app/constants/Constant";
import SocialIcon from "@/app/Shared Component/SocialIcon";

const SocialInfo = () => (
  <section className="space-y-2 overflow-hidden bg-gray-900 hover:bg-primary/10 rounded-lg p-3 text-center transition-all duration-300 hover:scale-105 cursor-pointer flex flex-col items-center justify-center">
    <section className="text-[#E1E7EF] text-xl font-semibold">
      Connect With Me
    </section>
    <section className="text-[#94A3B8] text-sm">
      Find me on social media
    </section>

    <section className="flex gap-1">
      {Social_Links.map(({ icon, link }, idx) => (
        <SocialIcon icon={icon} key={idx} link={link} />
      ))}
    </section>
  </section>
);

export default SocialInfo;
