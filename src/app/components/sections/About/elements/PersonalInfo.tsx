import { User } from "lucide-react";
import Card from "@/app/Shared Component/Card";
import { PERSONAL_DATA } from "@/app/constants/Constant";

const PersonalInfo = () => {
  return (
    <Card icon={<User />} name={"Personal Information"}>
      {PERSONAL_DATA.map((el, idx) => (
        <div className="flex gap-1 space-y-3" key={idx}>
          <span className="text-[#E1E7EF] font-bold">{`${el.key}:`}</span>
          <span className="text-[#94A3B8]">{el.value}</span>
        </div>
      ))}
    </Card>
  );
};

export default PersonalInfo;
