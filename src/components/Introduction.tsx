import { Brain, Award, BookOpen } from 'lucide-react';
import { useScrollReveal } from '../hooks/useScrollReveal';

export default function Introduction() {
  const sectionRef = useScrollReveal();

  return (
    <section id="about" className="py-24 bg-dark-200">
      <div ref={sectionRef} className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h2 className="text-4xl font-bold text-white">About Me</h2>
            <p className="text-xl text-gray-300 leading-relaxed">
              As a passionate Data Scientist and AI Engineer, I blend cutting-edge technology with analytical thinking to solve complex problems. My journey in artificial intelligence and machine learning has led me to develop innovative solutions that transform raw data into actionable insights.
            </p>
            <div className="flex flex-col gap-4 stagger">
              <div className="flex items-center gap-3 p-2 rounded-lg hover:bg-dark-100 transition-colors">
                <Brain className="h-6 w-6 text-accent-primary" />
                <span className="text-gray-300">Specialized in AI/ML Solutions</span>
              </div>
              <div className="flex items-center gap-3 p-2 rounded-lg hover:bg-dark-100 transition-colors">
                <BookOpen className="h-6 w-6 text-accent-primary" />
                <span className="text-gray-300">Continuous Learner & Tech Enthusiast</span>
              </div>
            </div>
          </div>
          <div className="relative flex justify-center">
            <div className="w-64 h-64 rounded-full overflow-hidden shadow-xl ring-4 ring-accent-primary/20 hover:ring-accent-primary transition-all duration-300 transform hover:scale-105">
              <img 
                src="./media/ahmed-belaaj.jpeg" 
                alt="Ahmed BELAAJ"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}