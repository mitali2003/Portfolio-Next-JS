import { EDUCATION_INFO } from "@/app/constants/Constant";
import EducationCard from "@/app/Shared Component/EducationCard";
import ListItem from "@/app/Shared Component/ListItem";

const EducationHistory = () => (
  <section className="grid sm:grid-cols-1 md:grid-cols-2 gap-3 px-4">
    {EDUCATION_INFO.map(
      ({
        name,
        degree,
        address,
        marks,
        year,
        borderLeft,
        key_achievements,
      }) => (
        <EducationCard
          key={name}
          degreeName={degree}
          univercityName={name}
          address={address}
          marks={marks}
          year={year}
          borderLeft={borderLeft}
        >
          {key_achievements.map(({ text }, index) => (
            <ul key={index}>
              <ListItem text={text} />
            </ul>
          ))}
        </EducationCard>
      )
    )}
  </section>
);

export default EducationHistory;
