import { Brain, ChevronDown, FileDown } from 'lucide-react';

export default function Hero() {
  const scrollToNextSection = () => {
    const aboutSection = document.getElementById('about');
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-dark-300 via-dark-200 to-dark-100">
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 text-center">
        <div className="animate-float">
          {/* <Brain className="h-20 w-20 text-accent-primary mx-auto mb-8" />*/}
          <center>
            <img src="./media/logo-header.png" alt="Logo" className="h-32 w-160" />
          </center>  
        </div>
        <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 bg-gradient-to-r from-accent-primary to-accent-secondary bg-clip-text text-transparent animate-gradient">
          Data Science & AI Engineering
        </h1>
        <p className="text-xl md:text-2xl text-gray-300 mb-12 max-w-3xl mx-auto">
          Transforming complex data into actionable insights through machine learning and artificial intelligence
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <a href="#projects" className="btn bg-accent-primary hover:bg-accent-secondary transition-all duration-300">
            View Projects
          </a>
          <a href="#contact" className="btn bg-transparent border-2 border-accent-primary hover:bg-accent-primary/10 transition-all duration-300">
            Get in Touch
          </a>
          <a 
            href="./media/ahmed-belaaj-cv.pdf" 
            download
            className="btn bg-dark-100 border-2 border-accent-primary hover:bg-accent-primary/10 transition-all duration-300 group"
          >
            <FileDown className="h-5 w-5 mr-2 group-hover:animate-bounce" />
            Download CV
          </a>
        </div>
      </div>
      <button 
        onClick={scrollToNextSection}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce cursor-pointer z-10"
        aria-label="Scroll to next section"
      >
        <ChevronDown className="h-8 w-8 text-gray-400 hover:text-accent-primary transition-colors" />
      </button>
    </section>
  );
}