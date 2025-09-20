import { User } from "lucide-react";
import Card from "@/app/Shared Component/Card";
import { PERSONAL_DATA } from "@/app/constants/Constant";

const PersonalInfo = () => (
  <Card icon={<User />} name={"Personal Information"}>
    {PERSONAL_DATA.map(({ key, value }) => (
      <div className="flex gap-1 space-y-3" key={key}>
        <span className="text-[#E1E7EF] font-bold">{`${key}:`}</span>
        <span className="text-[#94A3B8]">{value}</span>
      </div>
    ))}
  </Card>
);

export default PersonalInfo;
