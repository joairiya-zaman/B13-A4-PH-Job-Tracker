

const jobsData = [
    {
        id: 1,
        companyName: 'TechVision Solutions',
        position: 'Senior Frontend Developer',
        location: 'San Francisco, CA',
        type: 'Full-time',
        salary: '$120,000 - $160,000',
        description: 'Build scalable web applications using React and TypeScript. Work with a team of experienced developers to deliver innovative solutions for enterprise clients.',
        status: 'all'
    },
    {
        id: 2,
        companyName: 'Creative Digital Agency',
        position: 'UI/UX Designer',
        location: 'New York, NY',
        type: 'Full-time',
        salary: '$95,000 - $130,000',
        description: 'Design beautiful and functional user interfaces for mobile and web platforms. Collaborate with product managers and developers to create delightful user experiences.',
        status: 'all'
    },
    {
        id: 3,
        companyName: 'DataFlow Analytics',
        position: 'Backend Engineer',
        location: 'Austin, TX',
        type: 'Remote',
        salary: '$110,000 - $150,000',
        description: 'Develop robust backend systems using Node.js and PostgreSQL. Design microservices architecture for handling large-scale data processing and real-time analytics.',
        status: 'all'
    },
    {
        id: 4,
        companyName: 'Cloud Dynamics Inc',
        position: 'DevOps Engineer',
        location: 'Seattle, WA',
        type: 'Full-time',
        salary: '$130,000 - $170,000',
        description: 'Manage cloud infrastructure on AWS and GCP. Implement CI/CD pipelines and container orchestration using Docker and Kubernetes for multiple projects.',
        status: 'all'
    },
    {
        id: 5,
        companyName: 'Mobile Innovations Ltd',
        position: 'React Native Developer',
        location: 'Boston, MA',
        type: 'Full-time',
        salary: '$105,000 - $145,000',
        description: 'Create cross-platform mobile applications using React Native. Work on performance optimization and integration with backend APIs for iOS and Android platforms.',
        status: 'all'
    },
    {
        id: 6,
        companyName: 'Enterprise Solutions Group',
        position: 'Full Stack Developer',
        location: 'Chicago, IL',
        type: 'Hybrid',
        salary: '$100,000 - $140,000',
        description: 'Build full-stack web applications using MERN stack. Implement database design, API development, and frontend interfaces for enterprise clients.',
        status: 'all'
    },
    {
        id: 7,
        companyName: 'AI Research Lab',
        position: 'Machine Learning Engineer',
        location: 'Palo Alto, CA',
        type: 'Full-time',
        salary: '$140,000 - $180,000',
        description: 'Develop machine learning models and algorithms. Work with Python, TensorFlow, and PyTorch to solve complex problems in computer vision and NLP.',
        status: 'all'
    },
    {
        id: 8,
        companyName: 'Web Ventures Startup',
        position: 'JavaScript Developer',
        location: 'Remote',
        type: 'Full-time',
        salary: '$90,000 - $120,000',
        description: 'Build modern web applications and contribute to open-source projects. Focus on JavaScript/TypeScript development with emphasis on code quality and testing.',
        status: 'all'
    }
];




let currentTab = 'all';
let jobs = [...jobsData];

// dom elements
const jobsContainer = document.getElementById('jobsContainer');
const emptyState = document.getElementById('emptyState');
const tabButtons = document.querySelectorAll('.tab-btn');
const totalCountEl = document.getElementById('totalCount');
const interviewCountEl = document.getElementById('interviewCount');
const rejectedCountEl = document.getElementById('rejectedCount');
const displayCountEl = document.getElementById('displayCount');


document.addEventListener('DOMContentLoaded', () => {
    renderJobs();
    setupTabListeners();
    updateCounts();
});


