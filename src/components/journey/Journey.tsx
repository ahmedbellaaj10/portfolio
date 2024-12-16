import { GraduationCap, Briefcase, Award } from 'lucide-react';
import { useScrollReveal } from '../../hooks/useScrollReveal';
import JourneyItem from './JourneyItem';
import { education, experience } from '../../data/journeyData';

export default function Journey() {
  const sectionRef = useScrollReveal();

  return (
    <section id="journey" className="py-24 bg-dark-300">
      <div ref={sectionRef} className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">My Journey</h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            A timeline of my academic and professional achievements
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <div>
            <div className="flex items-center gap-3 mb-8">
              <GraduationCap className="h-8 w-8 text-accent-primary" />
              <h3 className="text-2xl font-bold text-white">Education</h3>
            </div>
            <div className="space-y-8 stagger">
              {education.map((edu) => (
                <JourneyItem
                  key={edu.id}
                  title={edu.degree}
                  organization={edu.institution}
                  year={edu.year}
                  description={edu.description}
                  logoUrl={edu.logoUrl}
                />
              ))}
            </div>
          </div>

          <div>
            <div className="flex items-center gap-3 mb-8">
              <Briefcase className="h-8 w-8 text-accent-primary" />
              <h3 className="text-2xl font-bold text-white">Experience</h3>
            </div>
            <div className="space-y-8 stagger">
              {experience.map((exp) => (
                <JourneyItem
                  key={exp.id}
                  title={exp.role}
                  organization={exp.company}
                  year={exp.year}
                  description={exp.description}
                  logoUrl={exp.logoUrl}
                />
              ))}
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}