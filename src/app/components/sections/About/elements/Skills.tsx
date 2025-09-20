import { Award } from "lucide-react";
import Card from "@/app/Shared Component/Card";
import SkillCard from "@/app/Shared Component/SkillCard";
import { ALL_SKILLS } from "@/app/constants/Constant";

const Skills = () => (
  <Card icon={<Award />} name="Technical Skills">
    <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
      {ALL_SKILLS.map(({ icon, name }) => (
        <SkillCard icon={icon} name={name} key={name} />
      ))}
    </div>
  </Card>
);

export default Skills;
