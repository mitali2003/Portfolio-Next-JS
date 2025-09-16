import React from "react";
import { Mail, FileText, FolderOpen, Linkedin, Github } from "lucide-react";

const HeroButton = () => {
  return (
    <div className="flex justify-center gap-4 mb-12">
      {/* Common classes for icon buttons */}
      {[
        { icon: <FileText size={20} />, key: "file" },
        { icon: <FolderOpen size={20} />, key: "folder" },
        { icon: <Linkedin size={20} />, key: "linkedin" },
        { icon: <Github size={20} />, key: "github" },
        { icon: <Mail size={20} />, key: "mail" },
      ].map((item) => (
        <button
          key={item.key}
          className="p-3 bg-gray-700 rounded-full text-white hover:bg-indigo-600 transition-colors duration-300 cursor-pointer shadow-lg"
        >
          {item.icon}
        </button>
      ))}
    </div>
  );
};

export default HeroButton;
