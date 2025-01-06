interface Education {
  id: number;
  degree: string;
  institution: string;
  year: string;
  description: string;
  logoUrl: string;
}

interface Experience {
  id: number;
  role: string;
  company: string;
  year: string;
  description: string;
  logoUrl: string;
}

export const education: Education[] = [
  {
    id: 1,
    degree: "Postgraduate Degree in AI",
    institution: "Télécom Paris | Institut Polytechnique de Paris",
    year: "2023-Expected graduation on February 2025",
    description: "Specialized in Artificial Intelligence and Deep Learning",
    logoUrl: "https://s3-eu-west-1.amazonaws.com/assets.atout-on-line.com/images/ingenieur/Fiches_Ecoles/telecom_paristech.jpg"
  },
  {
    id: 2,
    degree: "Postgraduate Degree in AI",
    institution: "ENSTA Paris | Institut Polytechnique de Paris",
    year: "2023-Expected graduation on February 2025",
    description: "Focused on robotics and Deep Learning",
    logoUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/45/Logo_ENSTA_Paris.jpg/90px-Logo_ENSTA_Paris.jpg"
  },
  {
    id: 3,
    degree: "Computer Science Engineering Degree",  
    institution: "National Institute of Applied Science and Technology (INSAT)",
    year: "2017-2022",
    description: "National Engineering Degree in Computer Science",
    logoUrl: "https://insat.rnu.tn/assets/images/insat_logo.png"
  }
];

export const experience: Experience[] = [
  {
    id: 1,
    role: "AI & Software Engineering Residant",
    company: "Headstarter",
    year: "2024-now",
    description: "Building 14+ machine learning, AI engineering and full-stack projects in fast-paced software team environments",
    logoUrl: "https://yt3.googleusercontent.com/yVrp0PYBekgWMRoUfQ5KLnQ5GuRj2rxQVeNNyZr_YaFPP82jK2vOJPKdWHWnvFcAoqn8iLFmrw=s900-c-k-c0x00ffffff-no-rj"
  },
  {
    id: 2,
    role: "Machine Learning Intern",
    company: "EagleAI",
    year: "2024-2024",
    description: "R&D team member, contributing to the development of cutting-edge Recommendation models",
    logoUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQPtTerBm_qlNTVA9CKz1e6cL5rTCiG68BNxg&s"
  },
  {
    id: 3,
    role: "Artificial Intelligence Intern",
    company: "Polytechnique Montréal",
    year: "2022-2022",
    description: "Implemented RL-based framework for Dialogue Systems robustness testing",
    logoUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTxxGIPUUydQd7KsbnzcIFOuYRkkV2VUk8k6Q&s"
  },
  {
    id: 4,
    role: "Machine Learning Intern",
    company: "Professional Management Consulting (PMC)",
    year: "2018-2020",
    description: "Trained and optimized ML models for predictive maintenance in the automotive industry",
    logoUrl: "data:image/png;base64,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"
  }
];