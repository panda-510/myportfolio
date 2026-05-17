export const data = {
  personal: {
    name: 'Aditya Panda',
    title: 'Software Engineer',
    subtitle: 'Payments, AI products, and full-stack systems',
    email: 'aditya.panda.510@gmail.com',
    phone: '+91-9699924623',
    location: 'Mumbai, India',
    linkedin: 'https://www.linkedin.com/in/aditya-panda-520841215/',
    github: 'https://github.com/Adi512',
    summary:
      'I build reliable product experiences across payment infrastructure, internal tooling, and AI-assisted systems. My work has focused on faster merchant onboarding, lower support load, and practical features that teams can actually ship.',
    taglines: [
      'Building secure payment experiences',
      'Shipping practical AI workflows',
      'Designing clean full-stack products',
    ],
  },

  stats: [
    { value: '40%', label: 'Faster onboarding' },
    { value: '10+', label: 'Enterprise clients' },
    { value: '60%', label: 'Lower build effort' },
    { value: '30%', label: 'Fewer support queries' },
  ],

  skills: {
    languages: [
      { name: 'JavaScript', level: 92, color: 'cyan' },
      { name: 'Python', level: 88, color: 'emerald' },
      { name: 'Dart', level: 80, color: 'amber' },
    ],
    frontend: [
      { name: 'React.js', level: 90, color: 'cyan' },
      { name: 'Flutter', level: 85, color: 'emerald' },
      { name: 'Next.js', level: 78, color: 'amber' },
    ],
    backend: [
      { name: 'Node.js', level: 88, color: 'cyan' },
      { name: 'FastAPI', level: 82, color: 'emerald' },
      { name: 'REST APIs', level: 92, color: 'amber' },
      { name: 'LangChain', level: 78, color: 'cyan' },
    ],
    databases: [
      { name: 'MongoDB', level: 85, color: 'emerald' },
      { name: 'SQL', level: 80, color: 'cyan' },
      { name: 'Firebase', level: 82, color: 'amber' },
      { name: 'ChromaDB', level: 75, color: 'cyan' },
    ],
    tools: ['Git', 'Postman', 'Jira', 'Agile/Scrum', 'OpenAI API', 'Android SDK'],
  },

  experience: [
    {
      company: 'NTT DATA Payment Services',
      role: 'Software Engineer',
      period: 'Nov 2024 - Present',
      location: 'Mumbai, India',
      type: 'Full-time',
      color: 'cyan',
      highlights: [
        'Built SDK kits in Node.js, Flutter, and Go for payment gateway integrations, reducing onboarding time by 40%.',
        'Worked with 10+ organizations across education, NGO, and government sectors to deliver secure checkout solutions.',
        'Delivered a RAG chatbot and a configurable form builder that reduced support queries and repetitive build work.',
        'Contributed across reviews, sprint delivery, and stakeholder communication for SDK and AI workstreams.',
      ],
      badge: 'Best Rookie 2024',
    },
    {
      company: 'Freelance',
      role: 'Full-Stack Mobile Developer',
      period: 'Jan 2024 - May 2024',
      location: 'Remote',
      type: 'Freelance',
      color: 'emerald',
      highlights: [
        'Designed and shipped Lucrente, a cross-platform rental app with landlord and tenant workflows.',
        'Integrated Razorpay payments, MongoDB-backed APIs, and responsive mobile UI flows.',
        'This project directly helped convert freelance work into a full-time engineering opportunity.',
      ],
    },
  ],

  projects: [
    {
      name: 'NISA RAG Chatbot',
      description:
        'A production-ready retrieval system that serves context-aware responses through OpenAI APIs and reduces repetitive support traffic.',
      stack: ['LangChain', 'ChromaDB', 'OpenAI API', 'Python', 'FastAPI'],
      impact: ['30% reduction in ticket volume', 'Faster internal onboarding', 'Production deployment'],
      category: 'AI Product',
      color: 'cyan',
      status: 'Production',
    },
    {
      name: 'Configurable Form Builder',
      description:
        'A reusable builder for dynamic forms, transaction workflows, bulk uploads, and receipt generation across merchants.',
      stack: ['React.js', 'Flutter', 'Node.js', 'REST APIs'],
      impact: ['60% less custom build effort', '50% faster go-live', '10+ merchant deployments'],
      category: 'Internal Tool',
      color: 'emerald',
      status: 'Production',
    },
    {
      name: 'Lucrente Rental Platform',
      description:
        'A full-stack rental application with listings, bookings, role-based flows, and integrated online payments.',
      stack: ['Flutter', 'MongoDB', 'REST APIs', 'Razorpay', 'Firebase'],
      impact: ['End-to-end product delivery', 'Payment integration', 'Freelance to full-time transition'],
      category: 'Mobile App',
      color: 'amber',
      status: 'Shipped',
    },
    {
      name: 'Payment Gateway SDK Kits',
      description:
        'Multi-language SDK packages and examples that simplified payment gateway adoption for partners and client teams.',
      stack: ['Node.js', 'Flutter', 'Go', 'REST APIs'],
      impact: ['40% faster onboarding', '20% fewer support tickets', '10+ enterprise clients'],
      category: 'Developer Tooling',
      color: 'cyan',
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
        'Recognized for rapid ramp-up and strong delivery across multiple product initiatives in the first quarter.',
    },
  ],

  nav: ['About', 'Experience', 'Projects', 'Skills', 'Education', 'Contact'],
}
