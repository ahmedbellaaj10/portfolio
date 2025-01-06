interface Testimonial {
  content: string;
  author: string;
  role: string;
  company: string;
  avatarUrl: string;
}

export const testimonials: Testimonial[] = [
  {
    content: "Ahmed demonstrated exceptional interest in the project topic and quickly acquired the theoretical knowledge necessary to excel. Throughout his internship at EagleAI, he consistently displayed passion, a strong willingness to learn, and an eagerness to contribute to every aspect of the project. His dedication and enthusiasm were evident as he significantly enhanced both his coding skills and research capabilities. Ahmed's commitment to personal and professional growth has been truly commendable, making him a valuable asset to the team.",
    author: "Andrei Plekhanov",
    role: "Senior Data Scientist",
    company: "EagleAI",
    avatarUrl: "./media/apl.jpg"
  }
  // {
  //   content: "Working with Ahmed was an exceptional experience. His deep understanding of AI and dedication to delivering high-quality solutions made him an invaluable asset to our research team.",
  //   author: "Michael Chen",
  //   role: "Research Director",
  //   company: "AI Innovation Lab",
  //   avatarUrl: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=100&h=100"
  // },
  // {
  //   content: "Ahmed's contributions to our machine learning infrastructure were outstanding. His innovative approaches and attention to detail helped us achieve remarkable improvements in model performance.",
  //   author: "Emily Rodriguez",
  //   role: "Lead Data Scientist",
  //   company: "DataTech Industries",
  //   avatarUrl: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80&w=100&h=100"
  // }
];