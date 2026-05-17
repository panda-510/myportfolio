export const data = {
  personal: {
    name: 'Aditya Panda',
    title: 'Full-Stack Software Engineer',
    subtitle: 'Payment Infrastructure · AI/ML Systems · Scalable Architecture',
    email: 'aditya.panda.510@gmail.com',
    phone: '+91-9699924623',
    location: 'Mumbai, India',
    linkedin: 'https://linkedin.com/in/aditya-panda',
    github: 'https://github.com/aditya510',
    summary:
      'Full-Stack Software Engineer with experience in payment infrastructure, SDK integrations, and scalable backend systems. Analytically driven with a record of 40–60% efficiency gains through REST API development and AI/ML automation across 10+ enterprise clients.',
    taglines: [
      'Building payment infrastructure',
      'Shipping AI-powered systems',
      'Engineering scalable backends',
      'Crafting developer tooling',
    ],
  },

  stats: [
    { value: '40%', label: 'Onboarding time cut' },
    { value: '10+', label: 'Enterprise clients' },
    { value: '60%', label: 'Build effort reduction' },
    { value: '30%', label: 'Ticket volume drop' },
  ],

  skills: {
    languages: [
      { name: 'JavaScript', level: 92, color: 'cyan' },
      { name: 'Python', level: 88, color: 'cyan' },
      { name: 'Dart', level: 80, color: 'emerald' },
    ],
    frontend: [
      { name: 'React.js', level: 90, color: 'cyan' },
      { name: 'Flutter', level: 85, color: 'emerald' },
      { name: 'Next.js', level: 78, color: 'cyan' },
    ],
    backend: [
      { name: 'Node.js', level: 88, color: 'emerald' },
      { name: 'FastAPI', level: 82, color: 'cyan' },
      { name: 'LangChain', level: 78, color: 'amber' },
      { name: 'REST APIs', level: 92, color: 'cyan' },
    ],
    databases: [
      { name: 'MongoDB', level: 85, color: 'emerald' },
      { name: 'SQL', level: 80, color: 'cyan' },
      { name: 'ChromaDB', level: 75, color: 'amber' },
      { name: 'Firebase', level: 82, color: 'emerald' },
    ],
    tools: ['Git', 'Postman', 'Jira', 'Agile/Scrum', 'OpenAI API', 'Android SDK'],
  },

  experience: [
    {
      company: 'NTT DATA Payment Services',
      role: 'Software Engineer',
      period: 'Nov 2024 – Present',
      location: 'Mumbai, India',
      type: 'Full-time',
      color: 'cyan',
      highlights: [
        'Engineered SDK kits in Node.js, Flutter, and Go for payment gateway REST APIs, cutting onboarding time by 40% and support tickets by 20%',
        'Partnered with 10+ organizations across education, NGO, and government sectors to translate stakeholder needs into secure checkout solutions',
        'Delivered AI/ML-powered RAG chatbot reducing query volume by 30% and Configurable Form Builder slashing build effort by 60%',
        'Led code reviews and communicated technical decisions across Agile/Scrum sprints, owning SDK, AI, and form-builder workstreams within Q1',
      ],
      badge: 'Best Rookie 2024',
    },
    {
      company: 'Freelance',
      role: 'Full-Stack Mobile Developer',
      period: 'Jan 2024 – May 2024',
      location: 'Remote',
      type: 'Freelance',
      color: 'emerald',
      highlights: [
        'Designed and shipped Lucrente, a cross-platform rental app with Flutter featuring landlord/tenant modules and Razorpay payment integration',
        'Built MongoDB-backed REST APIs with efficient state management, a points-based reward system, and responsive UI',
        'Work directly led to a full-time role in enterprise payments',
      ],
    },
  ],

  projects: [
    {
      name: 'NISA — RAG Chatbot',
      description:
        'Production-grade Retrieval-Augmented Generation pipeline serving context-aware NLP responses via OpenAI APIs. Automated query resolution end-to-end, driving a 30% reduction in ticket volume and shortening new hire onboarding.',
      stack: ['LangChain', 'ChromaDB', 'OpenAI API', 'Python', 'FastAPI', 'Node.js'],
      impact: ['30% ticket volume reduction', 'Faster new hire onboarding', 'Production-grade RAG pipeline'],
      category: 'AI/ML',
      color: 'cyan',
      icon: '🤖',
      status: 'Production',
    },
    {
      name: 'Configurable Form Builder',
      description:
        'Reusable drag-and-drop form builder with dynamic field configuration, transaction status API hooks, Excel bulk upload, and customizable receipt generation. Eliminated per-merchant custom form work.',
      stack: ['React.js', 'Flutter', 'Node.js', 'REST APIs', 'Excel Integration'],
      impact: ['60% build effort reduction', '50% faster go-live', '10+ merchant deployments'],
      category: 'Internal Tool',
      color: 'emerald',
      icon: '🏗️',
      status: 'Production',
    },
    {
      name: 'Lucrente — Rental Platform',
      description:
        'Cross-platform rental application with landlord/tenant modules, property listings, booking workflows, and integrated Razorpay payments. Built as a freelance project that demonstrated full-stack mobile delivery.',
      stack: ['Flutter', 'MongoDB', 'REST APIs', 'Razorpay', 'Firebase'],
      impact: ['Full-stack delivery', 'Razorpay integration', 'Led to full-time offer'],
      category: 'Mobile App',
      color: 'amber',
      icon: '🏠',
      status: 'Shipped',
    },
    {
      name: 'Payment Gateway SDK Kits',
      description:
        'Multi-language SDK kits for payment gateway REST API integration across Node.js, Flutter, and Go. Enabled seamless merchant adoption through comprehensive documentation and example implementations.',
      stack: ['Node.js', 'Flutter', 'Go', 'REST APIs', 'Payment Gateway'],
      impact: ['40% faster onboarding', '20% fewer support tickets', '10+ enterprise clients'],
      category: 'SDK / Tooling',
      color: 'cyan',
      icon: '⚙️',
      status: 'Production',
    },
  ],

  education: {
    degree: 'Bachelor of Engineering in Cyber Security',
    university: 'Mumbai University',
    year: 'Jun 2024',
    cgpa: '8.5 / 10',
  },

  achievements: [
    {
      title: 'Best Rookie Award',
      org: 'NTT DATA Payment Services',
      year: '2024',
      description:
        'Recognized for rapid skill acquisition and quality delivery across multiple projects within the first quarter.',
      icon: '🏆',
    },
  ],

  nav: ['About', 'Experience', 'Projects', 'Skills', 'Education', 'Contact'],
}
