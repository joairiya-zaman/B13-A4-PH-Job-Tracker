

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


// tab switching
function setupTabListeners() {

    tabButtons.forEach(btn => {
        btn.addEventListener('click', () => {
            tabButtons.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            currentTab = btn.dataset.tab
            renderJobs();
        });
    });
}


function renderJobs() {

    const filteredJobs = filterJobsByTab();
    jobsContainer.innerHTML = '';
    const emptyStateEl = document.getElementById('emptyState');


    if (filteredJobs.length === 0) {
        jobsContainer.style.display = 'none';
        emptyStateEl.classList.remove('hidden');
    } 
    
    
    else {
        jobsContainer.style.display = 'block';
        emptyStateEl.classList.add('hidden');
        filteredJobs.forEach(job => {
            jobsContainer.appendChild(createJobCard(job));
        });
    }
    updateDisplayCount();
}



function filterJobsByTab() {
    if (currentTab === 'all') {
        return jobs;
    }
    return jobs.filter(job => job.status === currentTab);
}



// Create Job Card

function createJobCard(job) {
    const card = document.createElement('div');
    card.className = 'bg-white border border-gray-200 rounded-lg p-5 hover:shadow-lg hover:-translate-y-0.5 transition flex flex-col';
    card.dataset.jobId = job.id;

    const statusClass = job.status !== 'all' ? job.status : '';
    let statusDisplay = '';
    
    if (job.status === 'interview') {
        statusDisplay = '<span class="inline-block px-3 py-1 bg-green-100 text-green-600 text-xs font-semibold rounded mb-3 uppercase">Interview</span>';

    } else if (job.status === 'rejected') {
        statusDisplay = '<span class="inline-block px-3 py-1 bg-red-100 text-red-600 text-xs font-semibold rounded mb-3 uppercase">Rejected</span>';
    }

    const isInterviewSelected = job.status === 'interview';
    const isRejectedSelected = job.status === 'rejected';

    card.innerHTML = `
        <div class="flex justify-between items-start mb-2">
            <h3 class="text-base font-bold text-blue-900">${job.companyName}</h3>
            <button class="delete-btn text-gray-400 hover:text-red-600 transition" onclick="deleteJob(${job.id})">
                <img src="trash.png" alt="Delete" class="w-5 h-5">
            </button>
        </div>
        <p class="text-sm text-gray-600 mb-2">${job.position}</p>
        <div class="text-xs text-gray-500 mb-3">
            <p>${job.location} • ${job.type} • ${job.salary}</p>
        </div>
        ${statusDisplay}
        <p class="text-sm text-gray-700 mb-4 flex-grow">${job.description}</p>
        <div class="flex gap-2">
            <button class="action-btn px-4 py-2 border-2 border-green-500 text-green-600 rounded text-xs font-semibold uppercase hover:bg-green-500 hover:text-white transition min-w-max ${isInterviewSelected ? 'bg-green-500 text-white' : ''}" 
                    onclick="updateJobStatus(${job.id}, 'interview')">
                Interview
            </button>
            <button class="action-btn px-4 py-2 border-2 border-red-600 text-red-600 rounded text-xs font-semibold uppercase hover:bg-red-600 hover:text-white transition min-w-max ${isRejectedSelected ? 'bg-red-600 text-white' : ''}" 
                    onclick="updateJobStatus(${job.id}, 'rejected')">
                Rejected
            </button>
        </div>
    `;

    return card;
}

