import { useScrollReveal } from '../../hooks/useScrollReveal';
import TestimonialCard from './TestimonialCard';
import { testimonials } from '../../data/testimonialsData';
import { MessageSquareQuote } from 'lucide-react';

export default function Testimonials() {
  const sectionRef = useScrollReveal();

  return (
    <section id="testimonials" className="py-24 bg-dark-200">
      <div ref={sectionRef} className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="flex justify-center mb-4">
            <MessageSquareQuote className="h-12 w-12 text-accent-primary" />
          </div>
          <h2 className="text-4xl font-bold text-white mb-4">What People Say</h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Feedback from colleagues and clients I've had the pleasure to work with
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 stagger">
          {testimonials.map((testimonial, index) => (
            <TestimonialCard
              key={index}
              content={testimonial.content}
              author={testimonial.author}
              role={testimonial.role}
              company={testimonial.company}
              avatarUrl={testimonial.avatarUrl}
            />
          ))}
        </div>
      </div>
    </section>
  );
}