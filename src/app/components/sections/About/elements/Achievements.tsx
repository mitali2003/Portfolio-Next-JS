import Card from "@/app/Shared Component/Card";
import ListItem from "@/app/Shared Component/ListItem";

const Achievements = () => (
  <Card name="Achievements">
    <ul className="space-y-1 text-[#94A3B8]">
      <ListItem icon="🥈" text="Secured Silver Medal in GTU (2020 – 2024)." />
      <ListItem icon="🎓" text="Achieved A1 Grade (93%) in 10th Standard." />
      <ListItem
        icon="💻"
        text="Ranked in the Top 10 at MECIA HACS Hackathon."
      />
      <ListItem
        icon="🌱"
        text="Secured 4th Position in the Rural Development Project “Pizzo Electric Road”."
      />
    </ul>
  </Card>
);

export default Achievements;
