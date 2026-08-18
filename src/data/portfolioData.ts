import { PersonalInfo, SkillItem, Project, Service, EducationItem, ExperienceItem, StatItem } from '../types';

/**
 * =====================================================================
 * MUTSINZI EMMANUEL - PORTFOLIO DATA CONFIGURATION
 * =====================================================================
 * Edit this file to customize your portfolio content, links, projects,
 * skills, education, and contact details in one central place!
 */

export const personalInfo: PersonalInfo = {
  name: 'Mutsinzi Emmanuel',
  tagline: "Hi, I'm Mutsinzi Emmanuel",
  roleTitles: [
    'Software Developer',
    'Full-Stack Developer',
    'Problem Solver',
    'Backend & API Specialist',
    'Blockchain Enthusiast'
  ],
  location: 'Kigali, Rwanda',
  country: 'Rwanda',
  phone: '0792417527',
  phoneRaw: '0792417527',
  email: 'mutsinzie333@gmail.com',
  instagram: 'w.i.n.n.e.r_25',
  instagramUrl: 'https://instagram.com/w.i.n.n.e.r_25',
  // Placeholders for GitHub & LinkedIn - easily editable
  githubUrl: 'https://github.com/mutsinzi-emmanuel',
  linkedinUrl: 'https://linkedin.com/in/mutsinzi-emmanuel',
  shortBio:
    'I am a passionate software developer focused on building modern, responsive, scalable, and user-friendly applications. I enjoy turning ideas into practical digital solutions using modern technologies.',
  aboutStatement:
    'My goal is to continuously improve my technical skills and create software solutions that solve real-world problems.',
  aboutDetails: [
    'Passionate about writing clean, maintainable, and efficient code that powers modern web platforms and robust backend architectures.',
    'Constantly exploring cutting-edge paradigms including decentralized finance, smart contract security, and distributed database engineering.',
    'Dedicated to delivering exceptional user experiences backed by resilient server-side services and intuitive APIs.'
  ],
  interests: [
    'Frontend Development',
    'Backend Development',
    'Full-Stack Development',
    'Database Development',
    'API Development',
    'Blockchain Technology',
    'Smart Contracts',
    'Software Architecture'
  ],
  profilePhotoPath: '/src/assets/profile.jpg',
  cvPath: '/src/assets/Mutsinzi_Emmanuel_CV.pdf',
  availability: 'Available for Full-time, Freelance & Collaborations'
};

export const stats: StatItem[] = [
  {
    id: 'projects',
    label: 'Projects Completed',
    value: 12,
    suffix: '+',
    description: 'Web applications, backend APIs, and decentralized tools built',
    iconName: 'FolderGit2'
  },
  {
    id: 'technologies',
    label: 'Technologies Learned',
    value: 18,
    suffix: '+',
    description: 'Languages, frameworks, database systems, and modern dev tools',
    iconName: 'Cpu'
  },
  {
    id: 'experience',
    label: 'Continuous Dev Practice',
    value: 3,
    suffix: ' Yrs',
    description: 'Hands-on coding, architecture design, and academic engineering',
    iconName: 'Clock'
  },
  {
    id: 'active',
    label: 'Current Projects',
    value: 4,
    suffix: ' Active',
    description: 'Active production systems and Web3 dApps in development',
    iconName: 'Flame'
  }
];

export const skillsData: SkillItem[] = [
  // Frontend
  { name: 'HTML5', level: 95, category: 'frontend', highlight: true },
  { name: 'CSS3', level: 90, category: 'frontend' },
  { name: 'JavaScript (ES6+)', level: 92, category: 'frontend', highlight: true },
  { name: 'React.js', level: 90, category: 'frontend', highlight: true },
  { name: 'Tailwind CSS', level: 94, category: 'frontend', highlight: true },

  // Backend
  { name: 'Node.js', level: 88, category: 'backend', highlight: true },
  { name: 'Express.js', level: 88, category: 'backend', highlight: true },
  { name: 'Python', level: 82, category: 'backend', highlight: true },
  { name: 'Django', level: 78, category: 'backend' },
  { name: 'REST APIs', level: 92, category: 'backend', highlight: true },

  // Database
  { name: 'MySQL', level: 88, category: 'database', highlight: true },
  { name: 'MongoDB', level: 85, category: 'database', highlight: true },
  { name: 'NoSQL Databases', level: 84, category: 'database' },

  // Blockchain
  { name: 'Solidity', level: 80, category: 'blockchain', highlight: true },
  { name: 'Ethereum', level: 82, category: 'blockchain', highlight: true },
  { name: 'Smart Contracts', level: 83, category: 'blockchain', highlight: true },
  { name: 'Web3 & dApps', level: 79, category: 'blockchain' },
  { name: 'Blockchain Fundamentals', level: 88, category: 'blockchain' },

  // Tools
  { name: 'Git', level: 90, category: 'tools', highlight: true },
  { name: 'GitHub', level: 92, category: 'tools', highlight: true },
  { name: 'VS Code', level: 95, category: 'tools' },
  { name: 'Postman', level: 88, category: 'tools', highlight: true },
  { name: 'Docker', level: 75, category: 'tools' }
];

export const projectsData: Project[] = [
  {
    id: 'store-management',
    title: 'Mutsinzi Store Management System',
    category: 'Full-Stack',
    description:
      'A comprehensive inventory, sales, and point-of-sale platform featuring real-time dashboard analytics, role-based access, and secure data handling.',
    detailedDescription:
      'Engineered a complete enterprise inventory and retail store management solution. Supports real-time stock notifications, supplier tracking, daily revenue graphs, role-based access control (Admin/Cashier), and automated invoicing with instant PDF export.',
    technologies: ['React', 'Tailwind CSS', 'Node.js', 'MySQL', 'Express', 'JWT Auth', 'Chart.js'],
    features: [
      'Interactive financial dashboard with real-time sales reporting',
      'Secure Authentication with JWT tokens and salted bcrypt passwords',
      'Complete CRUD operations for products, categories, suppliers, and transactions',
      'Low-stock threshold automated warnings and alerts',
      'Responsive interface optimized for POS tablets and desktop screens'
    ],
    image: 'https://images.unsplash.com/photo-1556740738-b6a63e27c4df?auto=format&fit=crop&q=80&w=1000',
    githubUrl: 'https://github.com/mutsinzi-emmanuel/store-management-system',
    liveUrl: 'https://mutsinzi-store-management.demo.app',
    isFeatured: true
  },
  {
    id: 'auth-system',
    title: 'User Authentication System',
    category: 'Backend & Auth',
    description:
      'A rock-solid security infrastructure handling user registration, encrypted credential validation, JWT session issuance, and token refresh workflows.',
    detailedDescription:
      'Built a production-grade authentication microservice demonstrating backend security best practices. Features parameterized database queries to prevent SQL injections, password strength validation, rate limiting, and HTTP-only cookie integration.',
    technologies: ['React', 'Node.js', 'Express.js', 'MySQL', 'JWT', 'bcrypt', 'Tailwind CSS'],
    features: [
      'Bcrypt password hashing with optimal salt rounds',
      'JSON Web Tokens (JWT) access and refresh token lifecycle',
      'Role-based middleware guards protecting private API routes',
      'Form validation with intuitive inline feedback and error states',
      'Password reset workflow with timed verification tokens'
    ],
    image: 'https://images.unsplash.com/photo-1633265486064-086b219458ec?auto=format&fit=crop&q=80&w=1000',
    githubUrl: 'https://github.com/mutsinzi-emmanuel/user-auth-system',
    liveUrl: 'https://mutsinzi-auth-system.demo.app',
    isFeatured: true
  },
  {
    id: 'swiftwheels',
    title: 'SwiftWheels Vehicle Rental System',
    category: 'Management Systems',
    description:
      'An end-to-end car and fleet rental web portal allowing clients to browse vehicles, filter by category, check availability, and manage booking itineraries.',
    detailedDescription:
      'SwiftWheels simplifies automobile leasing operations. Customers can effortlessly browse available fleets, select pickup/drop-off dates, calculate rental costs dynamically, and manage their reservations from a user dashboard.',
    technologies: ['React', 'Node.js', 'MySQL', 'Express', 'Tailwind CSS', 'REST API'],
    features: [
      'Comprehensive vehicle fleet management with status indicators (Available, Rented, Maintenance)',
      'Customer profile and booking history management',
      'Dynamic pricing engine factoring rental duration and vehicle tier',
      'Date conflict validation to prevent double bookings',
      'Administrative console for managing fleet operations and maintenance schedules'
    ],
    image: 'https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?auto=format&fit=crop&q=80&w=1000',
    githubUrl: 'https://github.com/mutsinzi-emmanuel/swiftwheels-rental-system',
    liveUrl: 'https://swiftwheels-rental.demo.app',
    isFeatured: true
  },
  {
    id: 'blockchain-smart-contracts',
    title: 'Blockchain & Smart Contract Projects',
    category: 'Blockchain & Web3',
    description:
      'Decentralized applications (dApps) and Solidity smart contracts deployed on Ethereum testnets, featuring escrow, token transfers, and immutable ledgers.',
    detailedDescription:
      'Designed and deployed audited Solidity smart contracts for Ethereum and EVM-compatible networks. Integrated with Web3.js and Ethers.js to allow non-custodial crypto wallet connectivity (MetaMask) and automated state verification.',
    technologies: ['Solidity', 'Ethereum', 'Smart Contracts', 'Web3.js', 'Hardhat', 'React'],
    features: [
      'Gas-optimized Solidity contracts implementing ERC standards',
      'Secure escrow and decentralized multi-signature agreements',
      'MetaMask wallet connection and blockchain event listeners',
      'Immutable state record storage for transparent audits',
      'Comprehensive automated contract test suites'
    ],
    image: 'https://images.unsplash.com/photo-1639762681485-074b7f938ba0?auto=format&fit=crop&q=80&w=1000',
    githubUrl: 'https://github.com/mutsinzi-emmanuel/blockchain-smart-contracts',
    liveUrl: 'https://mutsinzi-web3-contracts.demo.app',
    isFeatured: true
  }
];

export const servicesData: Service[] = [
  {
    id: 'web-development',
    title: 'Web Development',
    description:
      'Building modern, fast, responsive, and cross-browser compatible websites using modern web standards and clean code.',
    iconName: 'Globe',
    highlights: ['Responsive UI/UX', 'Cross-browser compatibility', 'Fast performance & SEO', 'Mobile-first design']
  },
  {
    id: 'full-stack-dev',
    title: 'Full-Stack Development',
    description:
      'Developing complete end-to-end applications from intuitive client interfaces to scalable server engines and robust databases.',
    iconName: 'Layers',
    highlights: ['React & Node.js architecture', 'State management', 'Integrated deployment', 'End-to-end security']
  },
  {
    id: 'backend-dev',
    title: 'Backend Development',
    description:
      'Building high-performance server-side architectures, business logic processing, authentication systems, and microservices.',
    iconName: 'Server',
    highlights: ['Express & Django backends', 'JWT authentication', 'High concurrency & caching', 'Clean architecture']
  },
  {
    id: 'database-design',
    title: 'Database Design & Management',
    description:
      'Architecting normalized relational schemas and scalable NoSQL data stores optimized for query speed and data integrity.',
    iconName: 'Database',
    highlights: ['MySQL schema design', 'MongoDB collections', 'Query indexing & optimization', 'Data backup strategies']
  },
  {
    id: 'api-development',
    title: 'API Development & Integration',
    description:
      'Creating secure, scalable, and well-documented RESTful APIs with structured payloads, rate limiting, and third-party webhooks.',
    iconName: 'CodeXml',
    highlights: ['RESTful standards', 'Postman API docs', 'JSON Web Token security', 'Third-party integrations']
  },
  {
    id: 'blockchain-dev',
    title: 'Blockchain & Smart Contracts',
    description:
      'Developing and deploying verified Solidity smart contracts, decentralized applications (dApps), and Web3 integrations.',
    iconName: 'ShieldCheck',
    highlights: ['Solidity programming', 'Ethereum & EVM compatibility', 'Web3 client integration', 'Contract security']
  },
  {
    id: 'website-maintenance',
    title: 'Website Maintenance & Optimization',
    description:
      'Continuous upgrades, security audits, performance tuning, bug fixing, and feature additions for existing web platforms.',
    iconName: 'Wrench',
    highlights: ['Speed & performance audits', 'Security vulnerability patches', 'Content & UI updates', 'Uptime monitoring']
  }
];

export const educationData: EducationItem[] = [
  {
    id: 'edu-1',
    institution: 'University / Institute of Technology (Rwanda)',
    program: 'Computer Science / Software Engineering',
    certificate: "Bachelor of Science / Diploma in Software Engineering",
    startDate: '2022',
    graduationDate: '2026 (Expected / Current)',
    description:
      'Comprehensive study of computer systems, data structures and algorithms, object-oriented programming, relational database systems, web development, and software engineering methodologies.',
    status: 'In Progress',
    skillsGained: ['Algorithms & Data Structures', 'Relational Database Management', 'Software Architecture', 'Web Engineering', 'Team Collaboration']
  },
  {
    id: 'edu-2',
    institution: 'Advanced Professional Certifications & Online Programs',
    program: 'Full-Stack Web Development & Blockchain Specialization',
    certificate: 'Certified Full-Stack & Smart Contract Developer',
    startDate: '2023',
    graduationDate: 'Present',
    description:
      'Hands-on masterclasses covering modern React architecture, asynchronous Node.js backend pipelines, Solidity smart contract deployment, and distributed system engineering.',
    status: 'Completed',
    skillsGained: ['React.js', 'Node.js', 'Express', 'Solidity', 'REST APIs', 'MySQL']
  }
];

export const experienceData: ExperienceItem[] = [
  {
    id: 'exp-1',
    title: 'Full-Stack Software Developer',
    organization: 'Freelance & Independent Client Solutions',
    type: 'Freelance',
    period: '2024 - Present',
    description:
      'Designing and developing custom web platforms, store management dashboards, and backend services for local enterprises and clients.',
    responsibilities: [
      'Constructed responsive client interfaces using React, Tailwind CSS, and modern JavaScript',
      'Developed and maintained RESTful backend APIs in Node.js and Express connected to MySQL databases',
      'Configured authentication mechanisms using JSON Web Tokens (JWT) and bcrypt encryption',
      'Collaborated closely with clients to translate business workflows into seamless digital systems'
    ],
    technologies: ['React', 'Tailwind CSS', 'Node.js', 'MySQL', 'Git', 'Postman']
  },
  {
    id: 'exp-2',
    title: 'Software Development & Academic Projects',
    organization: 'Core Technical Portfolio Projects',
    type: 'Academic',
    period: '2023 - 2024',
    description:
      'Led the architecture and implementation of core software systems including Store Management, SwiftWheels Rental, and secure auth modules.',
    responsibilities: [
      'Architected database schemas, entity relationships, and constraints in MySQL and MongoDB',
      'Implemented front-end state management and asynchronous data fetching pipelines',
      'Performed API testing, error debugging, and response payload optimizations using Postman',
      'Wrote modular, reusable, and thoroughly documented code adhering to industry standards'
    ],
    technologies: ['JavaScript', 'React', 'Python', 'Solidity', 'Express', 'MySQL']
  },
  {
    id: 'exp-3',
    title: 'Continuous Software Development & Learning',
    organization: 'Self-Directed Engineering & Open Source',
    type: 'Continuous Learning',
    period: 'Ongoing',
    description:
      'Currently building professional experience through academic work, personal projects, freelance opportunities, and continuous software development learning.',
    responsibilities: [
      'Studying Ethereum blockchain protocols and smart contract vulnerability mitigations',
      'Building responsive frontend micro-interactions and accessibility-focused interfaces',
      'Exploring Docker containerization and continuous integration workflows for rapid deployment'
    ],
    technologies: ['Solidity', 'Web3.js', 'Docker', 'REST APIs', 'Tailwind CSS']
  }
];

export const experienceFallbackQuote =
  'Currently building professional experience through academic work, personal projects, freelance opportunities, and continuous software development learning.';
