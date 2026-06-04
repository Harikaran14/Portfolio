export const profile = {
  name: 'Harikaran C',
  title: 'B.Tech Information Technology · Full-Stack & ML Engineer',
  tagline:
    'Building real-time systems, deep learning pipelines, and production-grade web apps — from ambulance dispatch system to multimodal biosignal models.',
  location: 'Chennai, India',
  education: 'SSN College of Engineering · B.Tech IT ',
  email: 'harikaran2310104@ssn.edu.in',
  phone: '+91 9444008385',
  avatar: 'https://avatars.githubusercontent.com/u/184724406?v=4',
  resumeUrl: '/Harikaran_C_Resume.pdf',
  currentlyWorking: 'OctoMail — AI-powered semantic email intelligence',
  currentlyLearning: 'System Design',
  stats: [
    { label: 'CGPA', value: '8.50', max: '10', color: 'green' },
    { label: 'CODEFORCES', value: '1450', suffix: 'Specialist', color: 'red' },
    { label: 'JEE MAINS', value: '96', suffix: 'Percentile', color: 'white' },
  ],
  bio: `Fourth-year B.Tech Information Technology student at SSN College of Engineering (CGPA 8.50/10). I specialize in full-stack development with Flask and MERN, competitive programming on Codeforces (max rating 1450, Specialist), and applied ML. Ive worked on projects from CNN–LSTM sleep stage classification to real-time ambulance dispatch systems.`,
  social: {
    github: 'https://github.com/Harikaran14',
    linkedin: 'https://www.linkedin.com/in/harikaran-c-42205b306',
    leetcode: 'https://leetcode.com/u/h1rik1r1n/',
    codeforces: 'https://codeforces.com/profile/Harikaran14',
    codolio: 'https://codolio.com/profile/Harikaran14',
  },
};

export const education = [
  {
    school: 'SSN College of Engineering',
    location: 'Chennai, India',
    degree: 'B.Tech. Information Technology',
    detail: 'CGPA: 8.50 / 10',
    period: 'Aug 2023 — May 2027',
  },
  {
    school: 'Alwin International Public School (CBSE)',
    location: 'Chennai, India',
    degree: '10th Grade: 474/500 · 12th Grade: 482/500',
    detail: 'JEE Mains (April 2023): 96 Percentile',
    period: 'Jun 2019 — Aug 2022',
  },
];

export const skills = [
  {
    category: 'Languages',
    items: ['Python', 'Java', 'C++','C','JavaScript','Dart','Ruby'],
  },
  {
    category: 'Frameworks & Tools',
    items: ['Flask', 'MySQL', 'Node.js','Express.js', 'REST API', 'React', 'MongoDB', 'TensorFlow/Keras','Postman','Flutter'],
  },
  {
    category: 'Coursework',
    items: [
      'Data Structures & Algorithms',
      'Competitive Programming',
      'Object Oriented Programming',
      'Computer Networks',
      'Database Management',
      'Operating Systems','Machine Learning',
    ],
  },
  {
    category: 'Soft Skills',
    items: ['Problem-Solving', 'Adaptability', 'Collaboration', 'Time Management'],
  },
];

export const projects = [
{
  id: 'octomail',
  title: 'OctoMail',
  subtitle: 'AI-Powered Email Productivity Assistant',
  period: 'May 2026 — Present',
  description:
    'Full-stack AI email productivity platform integrating Gmail API, Google OAuth, LLM-powered email intelligence, semantic search, automated task extraction,asynchronous processing using BullMQ and productivity analytics.',
  highlights: [
    'Integrated Gmail API and Google OAuth 2.0 for secure inbox access and email synchronization',
    'Implemented LLM-powered email summarization, priority classification, task extraction, deadline detection, and smart reply generation',
    'Built semantic inbox search using embeddings and MongoDB Atlas Vector Search for meaning-based retrieval',
    'Developed analytics dashboards, email clustering, and automated daily digest generation using scheduled background jobs',
  ],
  tech: [
    'React',
    'Node.js',
    'Express.js',
    'MongoDB Atlas',
    'Gemini API',
    'Google OAuth',
    'Gmail API',
  ],
  github: 'https://github.com/Harikaran14/OctoMail',
  featured: true,
  status: 'ACTIVE',
},
 {
  id: 'ambulance',
  title: 'Real-Time Ambulance Dispatch System',
  subtitle: 'Emergency Response Automation',
  period: 'Jan 2025 — Apr 2025',
  description:
    'Full-stack emergency response platform enabling real-time ambulance dispatch, live tracking, dynamic route selection, and hospital recommendation using WebSockets and TomTom APIs.',
  highlights: [
    'Implemented WebSocket-based communication for live ambulance tracking, driver standby management, emergency task assignment, and patient updates',
    'Built a dynamic route-selection engine that continuously evaluated TomTom route alternatives using traffic, distance, and ETA metrics',
    'Developed a hospital matching system based on specialty requirements, bed availability, ambulance location, and estimated arrival time',
    'Created an operations dashboard for monitoring fleet availability, dispatch history, hospital capacity, and response-time analytics',
  ],
  tech: [
    'Flask',
    'React',
    'MongoDB',
    'Socket.IO',
    'Leaflet',
    'TomTom API',
  ],
  github: 'https://github.com/Harikaran14/Ambulance-Route-Optimization-Problem',
  live: 'https://ambulancerouting.netlify.app/',
  featured: true,
},{
  id: 'sleep',
  title: 'Multimodal Sleep Stage Classification',
  subtitle: 'Attention-Based Deep Learning',
  period: 'Sep 2025 — April 2026',
  description:
    'End-to-end deep learning pipeline for automated sleep stage classification using EEG, EOG, and EMG signals from the PhysioNet Sleep-EDF dataset.',
  highlights: [
    'Designed a multi-branch CNN-LSTM architecture for learning spatial and temporal sleep patterns from multimodal biosignals',
    'Implemented channel attention and cross-modal attention mechanisms to improve feature fusion across EEG, EOG, and EMG streams',
    'Built a complete preprocessing pipeline using MNE including filtering, resampling, epoch generation, and subject-wise normalization',
    'Evaluated performance using subject-wise train-test splits, class balancing, Cohen’s Kappa, confusion matrices, and classification reports',
  ],
  tech: [
    'Python',
    'TensorFlow',
    'Keras',
    'MNE',
    'Scikit-Learn',
    'NumPy',
  ],
  github: 'https://github.com/Harikaran14/MultiModal-Sleep-Stage-Classification',
  featured: true,
},
  {
    id: 'complexity',
    title: 'Time Complexity Analyzer',
    subtitle: 'Machine Learning',
    period: '2025',
    description:
      'ML system predicting algorithm time complexity from source code using TF-IDF + SVM (~94% accuracy) on 2500+ samples.',
    tech: ['Python', 'scikit-learn'],
    github: 'https://github.com/Harikaran14/Time-Complexity-Analyzer',
    featured: false,
  },
  {
    id: 'digital-twin',
    title: 'Digital Twin for Capacity Planning',
    subtitle: 'Simulation',
    period: '2025',
    description: 'Python-based digital twin for infrastructure capacity planning and resource optimization.',
    tech: ['Python'],
    github: 'https://github.com/Harikaran14/Digital-Twin-for-Capacity-Planning',
    featured: false,
  },
  {
    id: 'algomart',
    title: 'AlgoMart',
    subtitle: 'Small Business E-Commerce',
    period: 'Mar 2024 — Jun 2024',
    description:
      'Dynamic shopping site with secure login, cart, delivery estimation, and owner dashboard for a local vendor.',
    highlights: [
      'BST for optimized product search',
      'PL/SQL triggers for orders, inventory, and customer emails',
      'Real-time inventory updates via owner dashboard',
    ],
    tech: ['Python', 'Flask', 'MySQL', 'JavaScript', 'HTML/CSS'],
    github: 'https://github.com/Harikaran14/AlgoMart_E-commerce-Website-Development',
    featured: false,
  },
];

export const leadership = [
  {
    role: 'Deputy Lead, CP Vertical',
    org: 'SSN Coding Club',
    period: 'Aug 2025 — Present',
    points: [
      'Organized and mentored coding competitions',
      'Fostered peer learning and problem-solving culture within the club',
    ],
  },
  {
    role: 'Core Committee Member',
    org: 'SSN Photography Club',
    period: 'Jan 2024 — Present',
    points: [
      'Coordinated events and workshops',
      'Mentored peers to enhance creative collaboration and technical skills',
    ],
  },
];

export const achievements = [
  {
    title: 'Codeforces',
    value: 'Max Rating 1450',
    badge: 'Specialist',
    link: 'https://codeforces.com/profile/Harikaran14',
    languages: 'Python, C++',
  },
];

export const certifications = [
  {
    name: 'Programming in Java',
    issuer: 'NPTEL Elite Silver · IIT Kharagpur',
    duration: '12-week',
  },
  {
    name: 'Getting Started with Competitive Programming',
    issuer: 'NPTEL Elite Silver · IIT Gandhinagar',
    duration: '12-week',
  },
];

export const navLinks = [
  { id: 'home', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'skills', label: 'Skills' },
  { id: 'projects', label: 'Projects' },
  { id: 'education', label: 'Education' },
  { id: 'quests', label: 'Quests' },
  { id: 'contact', label: 'Contact' },
];
