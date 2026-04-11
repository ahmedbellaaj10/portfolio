import { PATHS } from '../config/paths';

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
    year: "2023-2025",
    description: "Specialized in Artificial Intelligence and Deep Learning",
    logoUrl: PATHS.journey.education('telecom-paris.jpg')
  },
  {
    id: 2,
    degree: "Postgraduate Degree in AI",
    institution: "ENSTA Paris | Institut Polytechnique de Paris",
    year: "2023-2025",
    description: "Focused on robotics and Deep Learning",
    logoUrl: PATHS.journey.education('ENSTA-ip-paris.png')
  },
  {
    id: 3,
    degree: "Computer Science Engineering Degree",  
    institution: "National Institute of Applied Science and Technology (INSAT)",
    year: "2017-2022",
    description: "National Engineering Degree in Computer Science",
    logoUrl: PATHS.journey.education('insat.jpg')
  }
];

export const experience: Experience[] = [
  {
    id: 1,
    role: "Artificial Intelligence and Full-stack Engineer",
    company: "Headstarter",
    year: "Dec 2024 - May 2025",
    description: "I built and deployed around 10 AI and full-stack projects using LLMs, Computer Vision, and RAG pipelines so early-stage teams could accelerate product delivery with scalable, production-ready features",
    logoUrl: PATHS.journey.experience('headstarter.jpg')
  },
  {
    id: 2,
    role: "Machine Learning Intern",
    company: "EagleAI",
    year: "Jul 2024 - Dec2024",
    description: "I designed a 47M-parameter transformer model and built its full training pipeline so the R&D team could train on 200GB of retail data 6× faster and deploy at scale on Vertex AI",
    logoUrl: PATHS.journey.experience('eagle-ai.jpg')
  },
  {
    id: 3,
    role: "Artificial Intelligence Intern",
    company: "Polytechnique Montréal",
    year: "Mar 2022 - Sep 2022",
    description: "I developed an RL-based framework to expose blind spots in task-oriented dialogue models so AI researchers could detect failures other tools missed, with 95% input validity and improved attack efficiency on the MultiWOZ 2.0 dataset",
    logoUrl: PATHS.journey.experience('poly-mtl.png')
  },
  {
    id: 4,
    role: "Machine Learning Intern",
    company: "Professional Management Consulting (PMC)",
    year: "Jul 2021 - Aug 2021",
    description: "I Built and fine-tuned XGBoost models to predict motor bearing faults with ~95% accuracy, enabling predictive maintenance and helping industrial teams reduce downtime and improve reliability",
      logoUrl: PATHS.journey.experience('pmc.jpg')
  }
];