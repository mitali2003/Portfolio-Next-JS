import { Get_In_Touch_Info } from "@/app/constants/Constant";
import InfoCard from "@/app/Shared Component/InfoCard";

const GetInTouchInfo = () =>
  Get_In_Touch_Info.map(({ icon, text, subText, link }, i) => (
    <InfoCard icon={icon} text={text} subText={subText} key={i} link={link} />
  ));

export default GetInTouchInfo;
