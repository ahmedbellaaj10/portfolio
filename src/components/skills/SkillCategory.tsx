import SkillCard from './SkillCard';
import { IconType } from "react-icons";

interface SkillCategoryProps {
  name: string;
  skills: {
    name: string;
    Icon: IconType;
  }[];
}

export default function SkillCategory({ name, skills }: SkillCategoryProps) {
  return (
    <div className="bg-dark-100 p-6 rounded-lg border border-accent-primary/20 hover:border-accent-primary transition-all duration-300 hover:shadow-lg hover:shadow-accent-primary/5">
      <h3 className="text-xl font-semibold text-white mb-6">{name}</h3>
      <div className="grid grid-cols-2 gap-4">
        {skills.map((skill) => (
          <SkillCard
            key={skill.name}
            name={skill.name}
            Icon={skill.Icon} // Pass the Icon component
          />
        ))}
      </div>
    </div>
  );
}
