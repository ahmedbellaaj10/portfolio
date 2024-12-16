import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Introduction from './components/Introduction';
import Journey from './components/journey/Journey';
import Skills from './components/skills/Skills';
import Expertise from './components/Expertise';
import Projects from './components/Projects';
import Testimonials from './components/testimonials/Testimonials';
import Contact from './components/Contact';

function App() {
  return (
    <div className="min-h-screen bg-dark-300">
      <Navbar />
      <main>
        <Hero />
        <Introduction />
        <Journey />
        <Skills />
        <Expertise />
        <Projects />
        <Testimonials />
        <Contact />
      </main>
      <footer className="bg-dark-100 text-gray-400 py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p>© {new Date().getFullYear()} Ahmed Belaaj. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}

export default App;