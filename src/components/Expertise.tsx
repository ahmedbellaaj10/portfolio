import { Brain, Database, LineChart, Network, Code, Share2 } from 'lucide-react';
import { useScrollReveal } from '../hooks/useScrollReveal';

const expertiseAreas = [
  {
    icon: Brain,
    title: 'Machine Learning',
    description: 'Deep learning, neural networks, and advanced ML algorithms for complex problem-solving.'
  },
  {
    icon: Database,
    title: 'Big Data Analytics',
    description: 'Processing and analyzing large-scale datasets using modern big data technologies.'
  },
  {
    icon: LineChart,
    title: 'Statistical Analysis',
    description: 'Advanced statistical modeling and hypothesis testing for data-driven decisions.'
  },
  {
    icon: Network,
    title: 'Deep Learning',
    description: 'Designing and implementing neural networks for computer vision and NLP tasks.'
  },
  {
    icon: Code,
    title: 'MLOps',
    description: 'Building and deploying scalable ML pipelines and maintaining production systems.'
  },
  {
    icon: Share2,
    title: 'Data Visualization',
    description: 'Creating interactive dashboards and meaningful visual representations of data.'
  }
];

export default function Expertise() {
  const sectionRef = useScrollReveal();

  return (
    <section id="expertise" className="py-24 bg-dark-200">
      <div ref={sectionRef} className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">Areas of Expertise</h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Specialized in cutting-edge AI/ML technologies and data science methodologies
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 stagger">
          {expertiseAreas.map((area, index) => (
            <div 
              key={index} 
              className="group p-6 bg-dark-100 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 border border-accent-primary/20 hover:border-accent-primary hover:-translate-y-2"
            >
              <area.icon className="h-12 w-12 text-accent-primary mb-4 transform transition-transform duration-300 group-hover:scale-110" />
              <h3 className="text-xl font-semibold text-white mb-2 group-hover:text-accent-primary transition-colors">{area.title}</h3>
              <p className="text-gray-400 transition-colors duration-300 group-hover:text-gray-300">{area.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}