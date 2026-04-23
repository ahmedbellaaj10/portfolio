import { Brain, BookOpen, Rocket } from 'lucide-react';
import { useScrollReveal } from '../hooks/useScrollReveal';
import { PATHS } from '../config/paths';

export default function Introduction() {
  const sectionRef = useScrollReveal();

  return (
    <section id="about" className="py-24 bg-dark-200">
      <div ref={sectionRef} className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h2 className="text-4xl font-bold text-white">About Me</h2>
            <p className="text-xl text-gray-300 leading-relaxed">
              I am an AI Engineer and Data Scientist focused on bridging the gap between experimental models and real-world deployment. With a strong emphasis on modern Python development and software engineering best practices, I specialize in architecting, optimizing, and shipping machine learning, GenAI, and LLM-based solutions into production.
            </p>
            <div className="flex flex-col gap-4 stagger">
              <div className="flex items-center gap-3 p-2 rounded-lg hover:bg-dark-100 transition-colors">
                <Brain className="h-6 w-6 text-accent-primary" />
                <span className="text-gray-300">Specialized in AI/ML Solutions</span>
              </div>
              <div className="flex items-center gap-3 p-2 rounded-lg hover:bg-dark-100 transition-colors">
                <Rocket className="h-6 w-6 text-accent-primary" />
                <span className="text-gray-300">Production-Grade Engineering</span>
              </div>
              <div className="flex items-center gap-3 p-2 rounded-lg hover:bg-dark-100 transition-colors">
                <BookOpen className="h-6 w-6 text-accent-primary" />
                <span className="text-gray-300">Active Tech Radar</span>
              </div>
            </div>
          </div>
          <div className="relative flex justify-center">
            <div className="w-64 h-64 rounded-full overflow-hidden shadow-xl ring-4 ring-accent-primary/20 hover:ring-accent-primary transition-all duration-300 transform hover:scale-105">
              <img 
                src={PATHS.introduction('ahmed-belaaj.jpeg')} 
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