import { ChipTypes } from "@/Types/sharedElementTypes";

const Chips = ({
  icon,
  text,
  color,
  backgroundColor,
  className,
}: ChipTypes) => (
  <div
    style={{ backgroundColor: backgroundColor, color: color }}
    className={`rounded-2xl px-3 py-1 gap-2 font-medium items-center text-center flex ${className}`}
  >
    {icon && <span>{icon}</span>}
    <span>{text}</span>
  </div>
);

export default Chips;
