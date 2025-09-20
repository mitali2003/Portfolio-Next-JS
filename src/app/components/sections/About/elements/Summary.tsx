import { Briefcase } from "lucide-react";
import Card from "@/app/Shared Component/Card";

const Summary = () => {
  return (
    <Card
      icon={<Briefcase />}
      name="Professional Summary"
      color={"#94A3B8"}
      className={"leading-relaxed"}
    >
      I have 2 years of experience in React development, including 6 months
      focused on building interactive and dynamic user interfaces. With strong
      mastery in JavaScript, React, and core front-end technologies, I
      specialize in creating responsive, high-performance, and user-friendly web
      applications. My focus is on delivering intuitive front-end solutions that
      enhance user experience and align with modern design principles.
    </Card>
  );
};

export default Summary;
