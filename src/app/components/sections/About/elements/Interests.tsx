import { Heart } from "lucide-react";
import Card from "@/app/Shared Component/Card";
import Button from "@/app/Shared Component/Button";
import { All_Intrested_Technology } from "@/app/constants/Constant";

const Interests = () => {
  return (
    <Card icon={<Heart />} name="Interests">
      <div className="space-x-2">
        {All_Intrested_Technology.map(({ name }) => (
          <Button
            key={name}
            text={name}
            color={"#E1E7EF"}
            backgroundColor={"#8B3BED"}
          />
        ))}
      </div>
    </Card>
  );
};

export default Interests;
