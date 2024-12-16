interface JourneyItemProps {
  title: string;
  organization: string;
  year: string;
  description: string;
  logoUrl: string;
}

export default function JourneyItem({ title, organization, year, description, logoUrl }: JourneyItemProps) {
  return (
    <div className="relative pl-8 border-l-2 border-accent-primary/30 group">
      <div className="absolute -left-2 top-0 w-4 h-4 rounded-full bg-accent-primary 
        group-hover:scale-125 transition-transform" />
      <div className="flex items-start gap-4">
        <div className="w-12 h-12 rounded-full overflow-hidden flex-shrink-0 border-2 border-accent-primary/20 group-hover:border-accent-primary transition-colors">
          <img 
            src={logoUrl} 
            alt={organization}
            className="w-full h-full object-cover"
          />
        </div>
        <div className="flex-grow">
          <div className="mb-1 text-sm text-accent-primary font-semibold">{year}</div>
          <h4 className="text-lg font-semibold text-white group-hover:text-accent-primary 
            transition-colors">{title}</h4>
          <div className="text-gray-300">{organization}</div>
          <p className="text-gray-400 mt-1">{description}</p>
        </div>
      </div>
    </div>
  );
}