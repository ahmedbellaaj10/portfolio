interface TestimonialCardProps {
  content: string;
  author: string;
  role: string;
  company: string;
  avatarUrl: string;
}

export default function TestimonialCard({ content, author, role, company, avatarUrl }: TestimonialCardProps) {
  return (
    <div className="bg-dark-100 p-8 rounded-lg border border-accent-primary/20 hover:border-accent-primary transition-all duration-300 flex flex-col h-full group">
      <div className="flex-grow">
        <div className="relative mb-6">
          <div className="absolute -top-4 -left-2 text-6xl text-accent-primary opacity-20 font-serif">"</div>
          <p className="text-gray-300 relative z-10 italic">
            {content}
          </p>
        </div>
      </div>
      
      <div className="flex items-center mt-6 gap-4">
        <div className="w-12 h-12 rounded-full overflow-hidden border-2 border-accent-primary/20 group-hover:border-accent-primary transition-colors">
          <img 
            src={avatarUrl} 
            alt={author} 
            className="w-full h-full object-cover"
          />
        </div>
        <div>
          <h4 className="text-white font-semibold group-hover:text-accent-primary transition-colors">{author}</h4>
          <p className="text-gray-400 text-sm">{role}</p>
          <p className="text-accent-primary text-sm">{company}</p>
        </div>
      </div>
    </div>
  );
}