interface Testimonial {
  content: string;
  author: string;
  role: string;
  company: string;
  avatarUrl: string;
}

export const testimonials: Testimonial[] = [
  {
    content: "Ahmed's expertise in machine learning and data science helped us implement cutting-edge solutions that transformed our business processes. His ability to translate complex technical concepts into actionable insights is remarkable.",
    author: "Sarah Johnson",
    role: "CTO",
    company: "TechCorp Solutions",
    avatarUrl: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=100&h=100"
  },
  {
    content: "Working with Ahmed was an exceptional experience. His deep understanding of AI and dedication to delivering high-quality solutions made him an invaluable asset to our research team.",
    author: "Michael Chen",
    role: "Research Director",
    company: "AI Innovation Lab",
    avatarUrl: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=100&h=100"
  },
  {
    content: "Ahmed's contributions to our machine learning infrastructure were outstanding. His innovative approaches and attention to detail helped us achieve remarkable improvements in model performance.",
    author: "Emily Rodriguez",
    role: "Lead Data Scientist",
    company: "DataTech Industries",
    avatarUrl: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80&w=100&h=100"
  }
];