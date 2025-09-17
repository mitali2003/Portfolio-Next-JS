import React from "react";
import { Mail, FileText, FolderOpen, Linkedin, Github } from "lucide-react";

const HeroButton = () => {
  const buttons = [
    { icon: <FileText size={20} />, key: "file" },
    { icon: <FolderOpen size={20} />, key: "folder" },
    { icon: <Linkedin size={20} />, key: "linkedin" },
    { icon: <Github size={20} />, key: "github" },
    { icon: <Mail size={20} />, key: "mail" },
  ];

  return (
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
};

export default HeroButton;
