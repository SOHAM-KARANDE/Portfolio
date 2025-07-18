import {
  Education,
  CoreCompetency,
  Project,
  ProfessionalExperience,
  JobType,
  Testimonial,
  AiService,
  AiTool,
  AiResource,
  Hobby,
  ImpactStat,
  Skill,
  Principle,
  MapHotspot,
  NavigationGroup
} from './types';

import { 
    BrainCircuitIcon, EyeIcon, ZapIcon, LayersIcon, CodeIcon, 
    LinkIcon, GitBranchIcon, CogIcon, PenToolIcon, DatabaseIcon,
    HomeIcon, BuildingLibraryIcon, SparklesIcon
} from './components/icons/Icons';

export const SECTIONS = ['About', 'Projects', 'Journey', 'AI Zone', 'Who Am I?'];

export const NAVIGATION_STRUCTURE: NavigationGroup[] = [
  {
    group: "Main",
    items: ['About', 'Projects', 'Journey']
  },
  {
    group: "Explore",
    items: ['AI Zone', 'Who Am I?']
  }
];

export const PERSONAL_INFO = {
  name: 'Soham',
  title: 'AI & ML Engineer',
  photoUrl: 'https://picsum.photos/seed/portrait/400/400',
  synopsis: 'I merge a formal education in computer science with hands-on freelance experience to build intelligent, scalable, and impactful AI solutions, guided by principles of clarity and design.',
  background: 'Hailing from a small town with big dreams, my fascination with patterns and problem-solving naturally led me to the world of computer science. My family instilled in me a persistent curiosity, which is the driving force behind my passion for artificial intelligence.'
};

export const IMPACT_STATS_DATA: ImpactStat[] = [
  { value: 3, label: "Years Freelance Experience", suffix: "+" },
  { value: 15, label: "Core AI Models Deployed", suffix: "+" },
  { value: 5, label: "Major Projects Launched", suffix: "" },
];

export const SKILLS_DATA: Skill[] = [
  { name: 'PyTorch' }, { name: 'TensorFlow' }, { name: 'Scikit-learn' },
  { name: 'NLP' }, { name: 'Computer Vision' }, { name: 'Predictive Analytics' },
  { name: 'FastAPI' }, { name: 'Docker' }, { name: 'Python' },
  { name: 'Data Structures & Algorithms' }, { name: 'Model Deployment' }
];

export const EDUCATION_DATA: Education[] = [
  {
    institution: 'University of Technology',
    degree: 'B.Sc. in Computer Science',
    dates: '2018 - 2022',
    skills: ['Data Structures & Algorithms', 'Predictive Analytics', 'Software Engineering Principles'],
    credentialUrl: '#'
  },
  {
    institution: 'AI Academy',
    degree: 'AI Programming Nanodegree',
    dates: '2023',
    skills: ['Python', 'PyTorch', 'Scikit-learn', 'Model Deployment', 'NLP'],
    credentialUrl: '#'
  }
];

export const CORE_COMPETENCIES: CoreCompetency[] = [
  { name: 'NLP', description: 'Building models that understand and generate human language.', Icon: BrainCircuitIcon },
  { name: 'Computer Vision', description: 'Developing systems that can interpret and analyze visual information.', Icon: EyeIcon },
  { name: 'Predictive Analytics', description: 'Using statistical models to forecast future outcomes.', Icon: ZapIcon },
  { name: 'Full-Stack AI', description: 'Integrating AI models into robust, user-facing applications.', Icon: LayersIcon }
];

export const PROJECTS_DATA: Project[] = [
  {
    id: 1,
    title: 'Sentiment Analysis API',
    tagline: 'Real-time emotion detection for customer feedback.',
    imageUrl: 'https://picsum.photos/seed/project1/600/400',
    problem: 'A major e-commerce client was struggling to manually process thousands of daily customer reviews, leading to slow response times and missed insights.',
    role: 'Lead ML Engineer & Backend Developer',
    solution: 'I developed a containerized NLP model using PyTorch and built a scalable REST API with FastAPI. The system analyzes incoming text feedback in real-time, categorizing it by sentiment (positive, negative, neutral) and key topics.',
    techStack: ['Python', 'PyTorch', 'FastAPI', 'Docker', 'PostgreSQL'],
    challenges: 'One key challenge was handling idiomatic expressions and sarcasm, which required fine-tuning a pre-trained BERT model on a custom, domain-specific dataset.',
    impact: 'Automated over 500 hours of manual work per month and increased customer issue resolution speed by 40%.',
    liveUrl: '#',
    githubUrl: '#',
    year: 2023,
    skills: ['PyTorch', 'FastAPI', 'Docker', 'NLP', 'Model Deployment']
  },
  {
    id: 2,
    title: 'Retail Inventory Optimizer',
    tagline: 'AI-powered demand forecasting to reduce waste.',
    imageUrl: 'https://picsum.photos/seed/project2/600/400',
    problem: 'A grocery chain faced significant losses due to overstocking perishable goods and understocking high-demand items.',
    role: 'Machine Learning Specialist',
    solution: 'I designed and trained a time-series forecasting model using Prophet and Scikit-learn to predict product demand on a store-by-store basis. The model considered seasonality, holidays, and promotional events.',
    techStack: ['Python', 'Pandas', 'Prophet', 'Scikit-learn', 'Jupyter'],
    challenges: 'Cleaning and consolidating sales data from disparate, legacy systems was a major hurdle that required extensive data engineering work.',
    impact: 'Reduced perishable food waste by 15% and cut stock-out incidents by 25%, directly improving the bottom line.',
    githubUrl: '#',
    year: 2022,
    skills: ['Python', 'Scikit-learn', 'Predictive Analytics']
  },
  {
    id: 3,
    title: 'Medical Imaging Assistant',
    tagline: 'Deep learning for preliminary X-ray analysis.',
    imageUrl: 'https://picsum.photos/seed/project3/600/400',
    problem: 'Radiologists were spending a significant amount of time on routine screening, creating a bottleneck for diagnosing critical cases.',
    role: 'Computer Vision Engineer (Freelance)',
    solution: 'I built a Convolutional Neural Network (CNN) with TensorFlow/Keras to identify potential anomalies in chest X-rays. The tool serves as a "second pair of eyes" for radiologists, highlighting areas of interest for faster review.',
    techStack: ['Python', 'TensorFlow', 'Keras', 'OpenCV', 'DICOM'],
    challenges: 'Ensuring model explainability was critical for clinical trust. I implemented Grad-CAM visualizations to show which parts of an image the model focused on for its predictions.',
    impact: 'Achieved 94% accuracy in identifying key abnormalities, helping prioritize cases for expert review.',
    year: 2024,
    skills: ['TensorFlow', 'Computer Vision', 'Python']
  }
];

export const PRINCIPLES_DATA: Principle[] = [
    { title: "Clarity Over Complexity", description: "I prioritize building solutions that are not only powerful but also understandable and maintainable." },
    { title: "Build for the User First", description: "Technology serves people. The best AI is intuitive, helpful, and solves a real human problem." },
    { title: "AI as Augmentation", description: "My goal is to create systems that augment human intelligence, not replace it, empowering people to do their best work." }
];

export const MAP_HOTSPOTS_DATA: MapHotspot[] = [
  { 
    id: 'home', 
    position: { top: '55%', left: '40%' },
    Icon: HomeIcon,
    title: 'Hometown Roots',
    content: "Growing up here taught me the value of community and solving practical, everyday problems—a mindset I bring to every project."
  },
  {
    id: 'university',
    position: { top: '30%', left: '65%' },
    Icon: BuildingLibraryIcon,
    title: 'The Spark',
    content: "This is the library where I first discovered my passion for machine learning, spending countless hours devouring books on algorithms and data structures."
  },
  {
    id: 'inspiration',
    position: { top: '70%', left: '75%' },
    Icon: SparklesIcon,
    title: 'A Source of Inspiration',
    content: "A local museum that sparked my interest in how technology and art can intersect, inspiring me to focus on creative and human-centric AI applications."
  }
];

export const JOURNEY_DATA: ProfessionalExperience[] = [
  {
    type: JobType.EMPLOYMENT,
    role: 'Machine Learning Engineer',
    company: 'Global Solutions Inc.',
    dates: '2022 - Present',
    achievements: [
      'Led the development of the flagship Sentiment Analysis API, serving over 1 million requests per day.',
      'Mentored two junior engineers, fostering best practices in model development and MLOps.',
      'Published an internal whitepaper on productionizing large language models.'
    ]
  },
  {
    type: JobType.FREELANCE,
    role: 'AI Consultant',
    company: 'Upwork & Fiverr Clients',
    dates: '2021 - Present',
    achievements: [
      'Delivered over 20 successful AI/ML projects for clients in e-commerce, healthcare, and finance.',
      'Maintained a 100% Top-Rated status on Upwork through consistent, high-quality delivery.',
      'Specialized in rapid prototyping and building proof-of-concept models to secure client investment.'
    ]
  },
  {
    type: JobType.CERTIFICATION,
    role: 'TensorFlow Developer Certificate',
    company: 'Google',
    dates: '2023',
    achievements: ['Building and training neural networks using TensorFlow.', 'Image recognition, NLP, and time series modeling.', 'Strategies to prevent overfitting, including augmentation and dropouts.'],
    credentialUrl: '#'
  },
  {
    type: JobType.CERTIFICATION,
    role: 'AWS Certified Machine Learning - Specialty',
    company: 'Amazon Web Services',
    dates: '2024',
    achievements: ['Designing, implementing, deploying, and maintaining ML solutions.', 'Using Amazon SageMaker for model lifecycle.', 'Applying AWS security best practices.'],
    credentialUrl: '#'
  },
];

export const TESTIMONIALS_DATA: Testimonial[] = [
    {
        quote: "A true professional who delivered beyond our expectations. The AI model has become an indispensable part of our workflow.",
        author: "E-commerce Client, Africa"
    },
    {
        quote: "Incredibly talented and communicative. They took a complex problem and delivered a simple, elegant solution.",
        author: "Healthcare Startup, Europe"
    }
];

export const AI_SERVICES_DATA: AiService[] = [
    { title: 'Custom Model Training', description: 'Bespoke models for your unique data.', Icon: CogIcon },
    { title: 'AI Consulting', description: 'Strategic guidance to maximize impact.', Icon: BrainCircuitIcon },
    { title: 'API Development', description: 'Deploying models as scalable services.', Icon: GitBranchIcon },
    { title: 'MLOps Implementation', description: 'Automated pipelines for ML models.', Icon: LayersIcon }
];

export const AI_TOOLS_DATA: AiTool[] = [
    { name: 'QuickCSV Analyzer', description: 'An open-source script to quickly profile any CSV file.', toolUrl: '#', sourceUrl: '#'},
    { name: 'Image Caption Generator', description: 'A web app that generates captions for uploaded images.', toolUrl: '#', sourceUrl: '#'}
];

export const AI_RESOURCES_DATA: { [key: string]: AiResource[] } = {
    'Courses': [
        { title: 'DeepLearning.AI', description: 'Fundamental and advanced courses by Andrew Ng.', url: '#' },
        { title: 'fast.ai', description: 'A top-down, practical approach to deep learning.', url: '#' }
    ],
    'Datasets': [
        { title: 'Kaggle Datasets', description: 'A vast repository of datasets for any type of ML project.', url: '#' },
        { title: 'Google Dataset Search', description: 'A search engine for datasets across the web.', url: '#' }
    ],
    'Libraries': [
        { title: 'Hugging Face Transformers', description: 'The go-to library for state-of-the-art NLP models.', url: '#' },
        { title: 'PyTorch Lightning', description: 'A lightweight wrapper for PyTorch that simplifies training code.', url: '#' }
    ],
    'Papers': [
        { title: 'arXiv.org (cs.AI)', description: 'The primary repository for pre-print research papers in AI.', url: '#' },
        { title: 'Papers with Code', description: 'The latest research papers with linked code implementations.', url: '#' }
    ]
};

export const HOBBIES_DATA: Hobby[] = [
  { name: 'Poster Design', description: 'Creating minimalist graphic posters.', imageUrl: 'https://picsum.photos/seed/hobby1/400/500' },
  { name: 'Cinematography', description: 'Exploring stories through film.', imageUrl: 'https://picsum.photos/seed/hobby2/400/500' },
  { name: 'Reading Sci-Fi', description: 'Diving into futures imagined by great authors.', imageUrl: 'https://picsum.photos/seed/hobby3/400/500' }
];

export const ASPIRATIONS_DATA = [
    'Pursue higher studies in AI ethics and safety.',
    'Contribute to a major open-source AI project.',
    'Believe that "AI is the new electricity."',
    'Travel and learn from tech hubs around the world.'
];


// New constant for AI context
const contextData = {
  personalInfo: PERSONAL_INFO,
  sections: SECTIONS,
  skills: SKILLS_DATA.map(s => s.name),
  principles: PRINCIPLES_DATA,
  education: EDUCATION_DATA.map(({ skills, credentialUrl, ...rest }) => rest), // Remove less useful fields for AI
  experience: JOURNEY_DATA.map(({ achievements, credentialUrl, ...rest }) => ({...rest, summary: achievements.join(' ')})),
  projects: PROJECTS_DATA.map(({ id, imageUrl, liveUrl, githubUrl, challenges, ...rest }) => rest)
};

export const AI_CONTEXT_DATA = JSON.stringify(contextData, null, 2);