import { Github, ExternalLink } from 'lucide-react';
import { useScrollReveal } from '../hooks/useScrollReveal';

const baseURL = import.meta.env.VITE_BASE_URL;

const projects = [
  {
    title: 'BrainScan - Brain Tumor MRI Classification',
    description: 'Deep learning model to detect brain tumors from MRI images.',
    image: 'https://images.unsplash.com/photo-1555949963-aa79dcee981c?auto=format&fit=crop&q=80&w=1000',
    tags: ['Pytorch', 'Computer Vision', 'Deep Learning', 'Streamlit'],
    github: 'https://github.com/ahmedbellaaj10/BrainScan',
    demo: `${baseURL}/#projects`
  },
  {
    title: 'Eval-IQ - LLM Evaluation Platform',
    description: 'End-to-end platefrom to test LLMs on different test cases and benchmark them based on IQ aspects.',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=1000',
    tags: ['NextJS', 'LLMs', 'PostgreSQL'],
    github: 'https://github.com/ahmedbellaaj10/eval-iq',
    demo: 'https://demo.com'
  },
  {
    title: 'Pentagram - Instagram like AI-generated images platform',
    description: 'Instagram clone that enable user to generate and post images based on a prompt.',
    image: 'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&q=80&w=1000',
    tags: ['Python', 'Modal', 'React', 'Vercel'],
    github: 'https://github.com/ahmedbellaaj10/pentagram-backend',
    demo: 'https://demo.com'
  }
];

export default function Projects() {
  const sectionRef = useScrollReveal();

  return (
    <section id="projects" className="py-24 bg-dark-300">
      <div ref={sectionRef} className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">Featured Projects</h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Showcasing innovative solutions in machine learning and data science
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 stagger">
          {projects.map((project, index) => (
            <div 
              key={index} 
              className="group bg-dark-100 rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 border border-accent-primary/20 hover:border-accent-primary hover:-translate-y-2"
            >
              <div className="relative h-48 overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-full object-cover transform transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-dark-100 to-transparent opacity-0 group-hover:opacity-60 transition-opacity duration-300" />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-white mb-2 group-hover:text-accent-primary transition-colors">{project.title}</h3>
                <p className="text-gray-400 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag, tagIndex) => (
                    <span 
                      key={tagIndex} 
                      className="px-3 py-1 bg-accent-primary/10 text-accent-primary rounded-full text-sm group-hover:bg-accent-primary group-hover:text-white transition-all duration-300"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="flex justify-between">
                  <a 
                    href={project.github} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="flex items-center text-gray-400 hover:text-accent-primary transition-colors"
                  >
                    <Github className="h-5 w-5 mr-1" />
                    <span>Code</span>
                  </a>
                  <a 
                    href={project.demo} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center text-gray-400 hover:text-accent-primary transition-colors"
                  >
                    {/* <ExternalLink className="h-5 w-5 mr-1" />
                    <span>Demo</span> */}
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}