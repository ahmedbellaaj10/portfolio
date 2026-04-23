import {
  SiPython, SiTypescript, SiJavascript, SiCplusplus, SiPostgresql, SiGnubash,
  SiPytorch, SiHuggingface, SiScikitlearn, SiPandas, SiNumpy, SiOpencv,
  SiNvidia, SiLangchain, SiFastapi, SiStreamlit, SiPydantic,
  SiDocker, SiKubernetes, SiGooglecloud, SiGithub, SiMlflow, SiGit,
} from 'react-icons/si';

export const skillsData = [
  {
    name: 'Languages',
    skills: [
      { name: 'Python',     Icon: SiPython },
      { name: 'TypeScript', Icon: SiTypescript },
      { name: 'JavaScript', Icon: SiJavascript },
      { name: 'C / C++',    Icon: SiCplusplus },
      { name: 'SQL',        Icon: SiPostgresql },
      { name: 'Bash',       Icon: SiGnubash },
    ],
  },
  {
    name: 'AI & Machine Learning',
    skills: [
      { name: 'PyTorch',      Icon: SiPytorch },
      { name: 'Hugging Face', Icon: SiHuggingface },
      { name: 'Scikit-learn', Icon: SiScikitlearn },
      { name: 'Pandas',       Icon: SiPandas },
      { name: 'NumPy',        Icon: SiNumpy },
      { name: 'OpenCV',       Icon: SiOpencv },
    ],
  },
  {
    name: 'LLMs & Generative AI',
    skills: [
      { name: 'vLLM',      Icon: SiNvidia },
      { name: 'LangChain', Icon: SiLangchain },
      { name: 'FastAPI',   Icon: SiFastapi },
      { name: 'Streamlit', Icon: SiStreamlit },
      { name: 'Pydantic',  Icon: SiPydantic },
    ],
  },
  {
    name: 'Cloud & DevOps',
    skills: [
      { name: 'Docker',         Icon: SiDocker },
      { name: 'Kubernetes',     Icon: SiKubernetes },
      { name: 'GCP',            Icon: SiGooglecloud },
      { name: 'GitHub Actions', Icon: SiGithub },
      { name: 'MLflow',         Icon: SiMlflow },
      { name: 'Git',            Icon: SiGit },
    ],
  },
];
