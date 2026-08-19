import avatarImg from '../assets/images/avatar.png';
import slidesImg from '../assets/images/project_slides.png';
import mocktestImg from '../assets/images/project_mocktest.png';
import pdfstudyImg from '../assets/images/project_pdfstudy.png';
import rajrasoiImg from '../assets/images/project_rajrasoi.png';
import badesahabImg from '../assets/images/project_badesahab.png';
import tandoorchowkImg from '../assets/images/project_tandoorchowk.png';

export const personalDetails = {
  name: "Akash Kumar",
  title: "B.Tech Computer Science Student & Full Stack Developer",
  resume: "https://drive.google.com/uc?export=download&id=1oSgv1q291AZ0UyW4mWjWs17e5dVaPOnV",
  bio: "Passionate Computer Science student with a strong foundation in Full Stack Engineering, Algorithms, and Machine Learning. Experienced in building scalable web applications with MERN Stack, Python automation, and RESTful microservices.",
  taglines: [
    "MERN Stack Specialist",
    "Machine Learning & Python Enthusiast",
    "B.Tech CS Undergrad @ AKTU",
    "Full Stack & Systems Developer"
  ],
  education: {
    degree: "Bachelor of Technology in Computer Science & Engineering",
    university: "Dr. A.P.J. Abdul Kalam Technical University (AKTU)",
    grade: "Grade 7+",
    location: "India",
    origin: "Indian"
  },
  contact: {
    email: "akashkumar60907@gmail.com",
    github: "https://github.com/npmakash",
    githubUser: "@npmakash",
    linkedin: "https://linkedin.com/in/npmakash",
    linkedinUser: "@npmakash",
    fiverr: "https://www.fiverr.com/sellers/theakashkumarr/",
    fiverrUser: "@theakashkumarr",
    resume: "https://drive.google.com/file/d/1fL8-PuBjqvVaGdMlLTG9YE0pcpSwfO3m/view?usp=sharing",
    location: "India"
  },
  avatar: avatarImg
};

export const skillsData = [
  {
    category: "Full Stack & Web",
    skills: [
      { name: "React", level: 90, icon: "React", desc: "Hooks, Context API, Redux Toolkit, Component Architecture" },
      { name: "Node.js", level: 85, icon: "Server", desc: "Express.js, REST APIs, Middleware, NPM ecosystem" },
      { name: "JavaScript", level: 92, icon: "Code2", desc: "ES6+, Async/Await, Closures, Functional Programming" },
      { name: "MERN Stack", level: 88, icon: "Layers", desc: "End-to-end full stack app development & deployment" },
      { name: "FastAPI", level: 80, icon: "Zap", desc: "High-performance Python APIs, Pydantic, Swagger documentation" }
    ]
  },
  {
    category: "Core Languages & Systems",
    skills: [
      { name: "Python", level: 88, icon: "FileCode", desc: "Scripting, Automation, ML concepts, Data structures" },
      { name: "C++", level: 85, icon: "Terminal", desc: "Standard Template Library (STL), Memory management, DSA" },
      { name: "DSA", level: 84, icon: "Cpu", desc: "Data Structures & Algorithms, Problem Solving, Optimization" },
      { name: "OOP", level: 90, icon: "Box", desc: "Inheritance, Polymorphism, Abstraction, Design Patterns" }
    ]
  },
  {
    category: "Databases & Tools",
    skills: [
      { name: "Database & Data Mining", level: 82, icon: "Database", desc: "SQL/NoSQL databases, Data querying, Mining fundamentals" },
      { name: "Git & GitHub", level: 88, icon: "GitBranch", desc: "Version control, Branching strategies, PRs, Open source" },
      { name: "Linux", level: 80, icon: "TerminalSquare", desc: "Command line, Shell scripting, System basics (Alison Certified)" }
    ]
  }
];

export const experienceData = [
  {
    id: "infosys-springboard",
    role: "Embedded IoT Intern",
    company: "Infosys Springboard",
    type: "4-Week Internship",
    period: "Internship Program",
    badge: "IoT & Hardware Interfacing",
    description: "Completed an intensive 4-week Embedded IoT internship program focused on smart sensor integration, hardware-software communications, and internet-of-things architecture.",
    highlights: [
      "Worked with microcontroller logic, sensor data ingestion, and embedded programming fundamentals.",
      "Gained hands-on experience in IoT protocols and edge-to-cloud data transmission pipelines.",
      "Collaborated with mentors to simulate real-world IoT smart ecosystem scenarios."
    ],
    skillsUsed: ["Embedded Systems", "IoT Protocols", "Hardware Interfacing", "C++", "Sensors"]
  },
  {
    id: "code-alpha",
    role: "Full Stack Developer Intern",
    company: "Code Alpha",
    type: "Internship",
    period: "Virtual Internship",
    badge: "MERN Stack Development",
    description: "Built and deployed interactive full-stack web applications using the MERN stack (MongoDB, Express, React, Node.js) with responsive UI/UX and RESTful backend APIs.",
    highlights: [
      "Architected clean, modular React frontend interfaces with modern state management.",
      "Developed backend REST API endpoints for user authentication and data processing.",
      "Optimized frontend bundle size, load speeds, and cross-browser accessibility."
    ],
    skillsUsed: ["React", "Node.js", "Express", "JavaScript", "REST APIs", "CSS3"]
  }
];

export const freelanceProjectsData = [
  {
    id: "raj-rasoi",
    title: "Raj Rasoi - Royal Fine Dining & Lounge",
    category: "Freelance Restaurant Web App",
    featured: true,
    image: rajrasoiImg,
    shortDescription: "Functional website for a fine dining restaurant & heritage Indian lounge with menu showcases and reservation UI.",
    fullDescription: "A luxury client web application built for Raj Rasoi Royal Fine Dining & Family Lounge. Features an elegant heritage aesthetic, interactive multi-course menu sections, table booking contact UI, and seamless mobile responsiveness.",
    techStack: ["React", "JavaScript", "Modern CSS3", "Responsive UI", "UI/UX"],
    liveDemo: "https://npmakash.github.io/raj-rasoi/",
    github: "https://npmakash.github.io/raj-rasoi/",
    keyFeatures: [
      "Royal heritage aesthetic with smooth scroll animations.",
      "Interactive food & beverage menu catalog.",
      "Table & family lounge booking reservation UI.",
      "Full cross-browser and mobile viewport optimization."
    ]
  },
  {
    id: "bade-sahab",
    title: "Bade Sahab Ka Family Dhaba",
    category: "Freelance Web App",
    featured: true,
    image: badesahabImg,
    shortDescription: "Restaurant & dhaba website with one-click direct 'Order on WhatsApp' feature integration.",
    fullDescription: "A client freelance web application built for Bade Sahab Ka Family Dhaba. Designed for fast food ordering by incorporating a direct 'Order on WhatsApp' feature that pre-formats customer food orders directly into WhatsApp messages.",
    techStack: ["React", "JavaScript", "WhatsApp API Integration", "CSS3", "Mobile UI"],
    liveDemo: "https://npmakash.github.io/bade-sahab/",
    github: "https://npmakash.github.io/bade-sahab/",
    keyFeatures: [
      "One-click 'Order on WhatsApp' feature for instant customer orders.",
      "Interactive food menu with price & category filters.",
      "Direct phone & map location contact integration.",
      "Optimized for fast mobile loading and instant ordering."
    ]
  },
  {
    id: "tandoor-chowk",
    title: "Tandoor Chowk - Authentic Kulhad Chai & Snacks",
    category: "Freelance Web App",
    featured: true,
    image: tandoorchowkImg,
    shortDescription: "Authentic Kulhad Chai & Tandoori snacks web application with interactive menu and WhatsApp ordering.",
    fullDescription: "A client freelance web application built for Tandoor Chowk in Chandauli, UP. Highlights authentic earthen Kulhad Chai and tandoori delicacies with interactive menu showcases, location information, and direct WhatsApp ordering integration.",
    techStack: ["React", "JavaScript", "WhatsApp API Integration", "CSS3", "Responsive UI"],
    liveDemo: "https://npmakash.github.io/tandoor-chowk/",
    github: "https://github.com/npmakash/tandoor-chowk",
    keyFeatures: [
      "Authentic earthen Kulhad Chai & tandoori snacks showcase.",
      "One-click 'Order on WhatsApp' direct customer ordering integration.",
      "Interactive food menu with price & category breakdown.",
      "Mobile-first responsive design optimized for fast access."
    ]
  }
];

export const projectsData = [
  {
    id: "bulk-slide-generator",
    title: "Bulk Google Slide Generator",
    category: "Node JS & React",
    featured: true,
    image: slidesImg,
    shortDescription: "AI-powered bulk Google Slides presentation generator web application built with Node.js and React.",
    fullDescription: "Slide Wave AI is a web application engineered using Node.js, React, and Google Slides API to automate the batch creation of custom Google Slides presentations. Eliminates manual presentation design repetitive tasks by dynamically injecting datasets, tables, and AI content into slide templates.",
    techStack: ["Node.js", "React", "Google Slides API", "Express", "REST API"],
    liveDemo: "https://slide-wave-ai.onrender.com/",
    github: "https://github.com/npmakash/Slide-Wave-AI",
    keyFeatures: [
      "Automated template mapping for instant presentation generation.",
      "Supports CSV and JSON payload data sources.",
      "Custom layout formatting and text replacement engines.",
      "Deployed on Render cloud with full Google Slides API integration."
    ]
  },
  {
    id: "mock-test-app",
    title: "Mock Test Web App",
    category: "MERN Stack",
    featured: true,
    image: mocktestImg,
    shortDescription: "Interactive online examination platform with timed quiz modules, instant score analytics, and progress tracking.",
    fullDescription: "A comprehensive e-learning and testing web application designed for students to take timed practice exams. Includes real-time countdown timers, interactive question navigation, subject-wise score analytics, and review modes.",
    techStack: ["React", "Node.js", "Express", "JavaScript", "CSS3", "REST API"],
    liveDemo: "#",
    github: "https://github.com/npmakash",
    keyFeatures: [
      "Dynamic test engine with multiple choice questions (MCQs).",
      "Countdown timer with auto-submission upon time expiry.",
      "Detailed score breakdown charts and performance analytics.",
      "Question flagging, review panel, and category filters."
    ]
  },
  {
    id: "pdf-study",
    title: "PDF Study - Online Drawing & Annotation App",
    category: "Frontend Web Application",
    featured: true,
    image: pdfstudyImg,
    shortDescription: "Feature-rich web app for viewing, drawing, highlighting, and annotating PDF documents online directly in the browser.",
    fullDescription: "An online interactive PDF workspace built for students and researchers. Enables users to render PDF files in the browser, draw freehand diagrams, highlight key textbook lines, insert sticky notes, and save annotated study guides.",
    techStack: ["JavaScript", "React", "HTML5 Canvas", "PDF Rendering Engine", "Modern CSS"],
    liveDemo: "#",
    github: "https://github.com/npmakash",
    keyFeatures: [
      "Seamless online PDF rendering with page thumbnail navigation.",
      "Freehand drawing tools (pen, highlighter, eraser, line thickness).",
      "Sticky note insertions and color-coded text annotations.",
      "Client-side canvas rendering for ultra-fast, smooth performance."
    ]
  }
];

export const certificationsData = [
  {
    id: "linux-alison",
    title: "Linux For Beginner",
    issuer: "Alison",
    icon: "Terminal",
    date: "Certified",
    badge: "Alison Verified",
    color: "#22c55e",
    description: "Certification covering fundamental Linux system operations, shell commands, file hierarchy, permission management, and system administration basics.",
    skillsVerified: ["Linux Kernel Basics", "Bash Commands", "File System Hierarchy", "Permissions & Security"]
  },
  {
    id: "ml-udemy",
    title: "Machine Learning With Python",
    issuer: "Udemy",
    icon: "BrainCircuit",
    date: "Certified",
    badge: "Udemy Certified",
    color: "#8b5cf6",
    description: "Comprehensive training on supervised and unsupervised machine learning algorithms, model training, feature engineering, and predictive analytics using Python.",
    skillsVerified: ["Python ML Libraries", "Supervised Learning", "Regression & Classification", "Model Evaluation"]
  },
  {
    id: "db-mining-alison",
    title: "Database and Data Mining Certification",
    issuer: "Alison",
    icon: "Database",
    date: "Certified",
    badge: "Alison Verified",
    color: "#3b82f6",
    description: "In-depth certification covering relational database principles, SQL querying, data warehousing concepts, and data mining pattern extraction.",
    skillsVerified: ["Relational Databases", "SQL Optimization", "Data Warehousing", "Pattern Extraction"]
  }
];
