export interface ButtonTypes {
  text: string;
  color: string;
  backgroundColor: string;
}

export interface CardTypes {
  icon?: React.ReactNode;
  name: string;
  children: React.ReactNode;
  color?: string;
  className?: string;
}

export interface SkillTypes {
  icon: React.ReactNode;
  name: string;
  subTitle?: string;
  iconClassName?: string;
}

export interface ChipTypes {
  icon?: React.ReactNode;
  text: string;
  color: string;
  backgroundColor?: string;
  className?: string;
}

export interface EducationCardTypes {
  degreeName: string;
  univercityName: string;
  address: string;
  children: React.ReactNode;
  marks: string;
  year: string;
  borderLeft: string;
}

export interface InfoCardTypes {
  icon: React.ReactNode;
  text: string;
  subText: string;
  link: string;
}

export interface socialIconTypes {
  icon: React.ReactNode;
  link: string;
}

type ExperienceProject = {
  type: string;
  responsibilities: string[];
  techStack: string[];
  description?: string;
};

export type ExperienceData = {
  company: string;
  position: string;
  date: string;
  location: string;
  projects?: ExperienceProject[];
  responsibilities?: string[];
  techStack?: string[];
};

export interface ExperinceItemTypes {
  data: ExperienceData;
}
