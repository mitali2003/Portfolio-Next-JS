import { CardTypes } from "@/Types/sharedElementTypes";

const Card = ({ icon, name, children, color, className }: CardTypes) => (
  <div className="p-6 bg-[#0E1525] border-1 border-[#162033] rounded-lg hover:border-[#0f1620]">
    <div className="flex gap-3 pb-3">
      <span className="text-[#00FFFF]">{icon}</span>
      <span className="text-[#E1E7EF] text-xl font-semibold">{name}</span>
    </div>
    <div className={`text-[${color}] ${className}`}>{children}</div>
  </div>
);

export default Card;
