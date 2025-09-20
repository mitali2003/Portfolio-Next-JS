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
}
