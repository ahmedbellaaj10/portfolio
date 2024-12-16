import { IconType } from "react-icons";

interface SkillProps {
  name: string;
  Icon: IconType; // Use IconType for React Icons
}

export default function SkillCard({ name, Icon }: SkillProps) {
  return (
    <div className="px-3 py-2 bg-dark-200 rounded-lg text-gray-300 hover:text-white hover:bg-accent-primary/10 transition-all duration-300 flex items-center gap-2 group">
      <Icon className="h-4 w-4 text-accent-primary group-hover:scale-110 transition-transform" />
      <span>{name}</span>
    </div>
  );
}
