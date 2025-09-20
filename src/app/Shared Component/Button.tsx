import { ButtonTypes } from "@/Types/sharedElementTypes";

const Button = ({ text, color, backgroundColor }: ButtonTypes) => (
  <button
    style={{ color: color, backgroundColor: backgroundColor }}
    className="px-2.5 py-0.5 text-xs  rounded-full font-semibold text-center"
  >
    {text}
  </button>
);

export default Button;
