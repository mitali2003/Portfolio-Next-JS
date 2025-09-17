import React from "react";
import { ArrowDown } from "lucide-react";

const ScrollButton = () => {
  return (
    <div className="text-[#94a3b8] m-2 text-small flex flex-col items-center">
      Scroll to explore <ArrowDown size={20} />
    </div>
  );
};

export default ScrollButton;
