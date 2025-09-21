import { Mail, MapPin, Github, Linkedin } from "lucide-react";

export const PERSONAL_DATA = [
  {
    key: "Name",
    value: "Mitali Gohel",
  },
  {
    key: "Location",
    value: "Bilimora,Gujrat",
  },
  {
    key: "email",
    value: "mitaligohel95@gmail.com",
  },
  {
    key: "Languages",
    value: "English,Hindi,Gujrati",
  },
];

export const All_Intrested_Technology = [
  { name: "Frontend Architecture" },
  { name: "Web Performance" },
  { name: "Open Source Contribution" },
  {
    name: "Progressive Web Apps",
  },
  { name: "Responsive Design" },
  { name: "Web Animation & Design" },
];

export const ALL_SKILLS = [
  { name: "React", icon: "⚛️", category: "framework" },
  { name: "Next.js", icon: "▲", category: "framework" },
  { name: "TypeScript", icon: "📘", category: "language" },
  { name: "JavaScript", icon: "💛", category: "language" },
  { name: "HTML5", icon: "🌐", category: "markup" },
  { name: "CSS3", icon: "🎨", category: "styling" },
  { name: "Tailwind CSS", icon: "💨", category: "styling" },
  { name: "Redux", icon: "🔄", category: "state" },
  { name: "Git", icon: "📦", category: "tool" },
  { name: "Vite", icon: "⚡", category: "build" },
];

export const EDUCATION_INFO = [
  {
    degree: "B.E. (Computer Engineering)",
    name: "Sardar Vallabhbhai Patel Institute of Technology",
    address: "Vasad, Gujarat",
    year: "2020 - 2024",
    marks: "9.56 / 10",
    borderLeft: "bg-gradient-to-b from-purple-500 to-pink-500",
    key_achievements: [
      { text: "Secured a Silver Medal." },
      { text: "Ranked in the Top 10 at MECIA HACS Hackathon." },
      {
        text: "Achieved 4th Position in the Rural Development Project 'Pizzo Electric Road'.",
      },
    ],
  },
  {
    degree: "Higher Secondary School Certificate (HSC)",
    name: "MCZ Shah Higher Secondary School",
    address: "Bilimora, Gujarat",
    year: "2018 - 2020",
    borderLeft: "bg-gradient-to-b from-cyan-500 to-blue-500",
    marks: "80.61%",
    key_achievements: [{ text: "Secured 4th Rank." }],
  },
  {
    degree: "Secondary School Certificate (SSC)",
    name: "MCZ Shah Higher Secondary School",
    borderLeft: "bg-gradient-to-b from-green-500 to-teal-500",
    address: "Bilimora, Gujarat",
    year: "2018",
    marks: "92.66%",
    key_achievements: [
      { text: "Secured A1 Grade." },
      {
        text: "Achieved 1st Position in Science (98/100), Sanskrit (96/100) and Mathematics (92/100).",
      },
    ],
  },
];

export const Get_In_Touch_Info = [
  {
    icon: <Mail size={24} color="#00FFFF" />,
    text: "Email",
    subText: "mitaligohel95@gmail.com",
    link: "mailto:mitaligohel95@gmail.com",
  },
  {
    icon: <MapPin size={24} color="#00FFFF" />,
    text: "Location",
    subText: "Bilimora,Gujrat",
    link: "https://share.google/3xz9MWt2hYpJON1aV",
  },
];

export const Social_Links = [
  {
    icon: <Github size={20} />,
    link: "https://github.com/mitali2003",
  },
  {
    icon: <Linkedin size={20} />,
    link: "https://www.linkedin.com/in/gohelmitali/",
  },
];
