export const profile = {
  name: 'Harikaran C',
  title: 'B.Tech Information Technology · Full-Stack & ML Engineer',
  tagline:
    'Building real-time systems, deep learning pipelines, and production-grade web apps — from ambulance routing to multimodal biosignal models.',
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
    { label: 'CODEFORCES', value: '1381', suffix: 'Pupil', color: 'red' },
    { label: 'JEE MAINS', value: '96', suffix: 'Percentile', color: 'white' },
  ],
  bio: `Third-year B.Tech Information Technology student at SSN College of Engineering (CGPA 8.50/10). I specialize in full-stack development with Flask and MERN, competitive programming on Codeforces (max rating 1323, Pupil), and applied ML — from CNN–LSTM sleep classification to real-time ambulance routing systems.`,
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
    subtitle: 'AI Email Intelligence',
    period: '2026 — Present',
    description:
      'MERN + Gmail API platform with LLM summarization, semantic vector search, priority classification, task extraction, and analytics dashboard.',
    tech: ['React', 'Node.js', 'MongoDB', 'LLM', 'OAuth'],
    github: 'https://github.com/Harikaran14/OctoMail',
    featured: true,
    status: 'ACTIVE',
  },
  {
    id: 'ambulance',
    title: 'Ambulance Route Optimization',
    subtitle: 'Real-Time Emergency Navigation',
    period: 'Jan 2025 — Apr 2025',
    description:
      'Full-stack Flask–React app for real-time ambulance routing with dynamic re-routing via TomTom Traffic APIs, optimal hospital finder by live ETA, and MongoDB route tracking.',
    highlights: [
      'Deployed full-stack app with TomTom Traffic & Routing APIs',
      'Optimal Hospital Finder — nearest hospital by minimum ETA',
      'MongoDB for driver routes and history analytics',
      'Interactive React UI for live navigation updates',
    ],
    tech: ['Flask', 'React', 'MongoDB', 'TomTom API'],
    github: 'https://github.com/Harikaran14/Ambulance-Route-Optimization-Problem',
    live: 'https://ambulancerouting.netlify.app/',
    featured: true,
  },
  {
    id: 'sleep',
    title: 'Multimodal Sleep Stage Classification',
    subtitle: 'Deep Learning Pipeline',
    period: 'Sep 2025 — Dec 2025',
    description:
      'End-to-end DL pipeline for automated sleep stage classification from EEG, EOG, and EMG biosignals on PhysioNet Sleep-EDF.',
    highlights: [
      'Hybrid CNN–LSTM for spatial–temporal features',
      'MNE preprocessing: filtering, epoching, normalization',
      'Robust generalization across subjects',
    ],
    tech: ['Python', 'TensorFlow/Keras', 'MNE', 'Scikit-learn'],
    github: 'https://github.com/Harikaran14/MultiModal-Sleep-Stage-Classification',
    featured: true,
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
    period: '2026',
    description: 'Python-based digital twin for infrastructure capacity planning and resource optimization.',
    tech: ['Python'],
    github: 'https://github.com/Harikaran14/Digital-Twin-for-Capacity-Planning',
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
    value: 'Max Rating 1381',
    badge: 'Pupil',
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
