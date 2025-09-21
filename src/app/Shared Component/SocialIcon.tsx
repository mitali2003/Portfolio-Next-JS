import { socialIconTypes } from "@/Types/sharedElementTypes";

const SocialIcon = ({ icon, link }: socialIconTypes) => (
  <div className="p-3 bg-gray-800 hover:bg-primary/20 rounded-full transition-transform transform hover:scale-110">
    <a href={link} target="_blank">
      {icon}
    </a>
  </div>
);

export default SocialIcon;
