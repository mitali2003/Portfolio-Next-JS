import { SkillTypes } from "@/Types/sharedElementTypes";

const SkillCard = ({ icon, name }: SkillTypes) => {
  return (
    <div className="group relative overflow-hidden bg-gray-900 hover:bg-primary/10 rounded-lg p-3 text-center transition-all duration-300 hover:scale-105 cursor-pointer">
      <div className="text-2xl mb-1">{icon}</div>
      <div className="text-sm font-medium">{name}</div>
      <div className="absolute inset-0 bg-gradient-to-t from-primary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
    </div>
  );
};

export default SkillCard;
