import { Mail, MapPin, Phone, FileDown } from 'lucide-react';
import { useScrollReveal } from '../hooks/useScrollReveal';

export default function Contact() {
  const sectionRef = useScrollReveal();

  return (
    <section id="contact" className="py-24 bg-dark-200">
      <div ref={sectionRef} className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">Get in Touch</h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Let's discuss how we can work together on your next data science project!
          </p>
          <a 
            href="/media/ahmed-belaaj-cv.pdf" 
            download
            className="inline-flex items-center px-6 py-3 mt-8 bg-dark-100 border-2 border-accent-primary text-white rounded-lg hover:bg-accent-primary/10 transition-all duration-300 group"
          >
            <FileDown className="h-5 w-5 mr-2 group-hover:animate-bounce" />
            Download My CV
          </a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 stagger">
          <div className="bg-dark-100 p-8 rounded-lg border border-accent-primary/20">
            <form className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-300">Name</label>
                <input
                  type="text"
                  id="name"
                  className="mt-1 block w-full rounded-md bg-dark-300 border-accent-primary/20 text-white shadow-sm focus:border-accent-primary focus:ring focus:ring-accent-primary/50"
                  placeholder="Your name"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-300">Email</label>
                <input
                  type="email"
                  id="email"
                  className="mt-1 block w-full rounded-md bg-dark-300 border-accent-primary/20 text-white shadow-sm focus:border-accent-primary focus:ring focus:ring-accent-primary/50"
                  placeholder="your@email.com"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-300">Message</label>
                <textarea
                  id="message"
                  rows={4}
                  className="mt-1 block w-full rounded-md bg-dark-300 border-accent-primary/20 text-white shadow-sm focus:border-accent-primary focus:ring focus:ring-accent-primary/50"
                  placeholder="Your message"
                />
              </div>
              <button
                type="submit"
                className="w-full bg-accent-primary text-white py-2 px-4 rounded-md hover:bg-accent-secondary transition-colors"
              >
                Send Message
              </button>
            </form>
          </div>

          <div className="space-y-8 stagger">
            <div className="flex items-start space-x-4">
              <Mail className="h-6 w-6 text-accent-primary mt-1" />
              <div>
                <h3 className="text-lg font-medium text-white">Email</h3>
                <p className="text-gray-400">ahmed-bellaaj@outlook.com</p>
              </div>
            </div>
            <div className="flex items-start space-x-4">
              <Phone className="h-6 w-6 text-accent-primary mt-1" />
              <div>
                <h3 className="text-lg font-medium text-white">Phone</h3>
                <p className="text-gray-400">+33 7 44 40 45 07</p>
              </div>
            </div>
            <div className="flex items-start space-x-4">
              <MapPin className="h-6 w-6 text-accent-primary mt-1" />
              <div>
                <h3 className="text-lg font-medium text-white">Location</h3>
                <p className="text-gray-400">Paris, France</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}