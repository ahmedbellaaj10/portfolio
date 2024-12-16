import { useScrollReveal } from '../../hooks/useScrollReveal';
import SkillCategory from './SkillCategory';
import { skillsData } from '../../data/skillsData';

export default function Skills() {
  const sectionRef = useScrollReveal();

  return (
    <section id="skills" className="py-24 bg-dark-300">
      <div ref={sectionRef} className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">Technical Skills</h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Proficiency in cutting-edge technologies and tools
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 stagger">
          {skillsData.map((category) => (
            <SkillCategory
              key={category.name}
              name={category.name}
              skills={category.skills}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
