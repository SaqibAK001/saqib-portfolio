// Scroll fade-in effect
const faders = document.querySelectorAll('.fade-in');
const appearOptions = { threshold: 0.3 };

const appearOnScroll = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if(!entry.isIntersecting) return;
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
    });
}, appearOptions);

faders.forEach(fader => appearOnScroll.observe(fader));

// Projects
const projectsContainer = document.getElementById('projects-container');

const projects = [
    {
        name: "Loan Approval Prediction System",
        description: "Built a machine learning model using Python, Scikit-learn, and Flask to predict loan approvals. Deployed a web app for real-time predictions.",
        url: "https://github.com/SaqibAK001/loan_approval"
    },
    {
        name: "Dairy Farm Management System",
        description: "Full-stack web application using Python, Flask, and MySQL. Managed cow records, milk production, sales tracking, and database integration.",
        url: "https://github.com/SaqibAK001"
    },
    {
        name: "A* Pathfinding on Hexagonal Grid",
        description: "Implemented the A* algorithm on a hex grid using Python and Matplotlib. Visualized optimal pathfinding and grid traversal.",
        url: "https://github.com/SaqibAK001"
    },
    {
        name: "Blood Bank Management System",
        description: "Web-based portal using Python, Flask, and MySQL for donor/recipient data management, blood stock tracking, and CRUD operations.",
        url: "https://github.com/SaqibAK001"
    },
    {
        name: "Sorting Algorithm Analyzer",
        description: "Implemented and compared Insertion Sort, Heap Sort, and Selection Sort in C. Analyzed time complexity across various input sizes.",
        url: "https://github.com/SaqibAK001"
    }
];

// Render projects dynamically
projects.forEach(project => {
    const card = document.createElement('div');
    card.className = 'project-card';
    card.innerHTML = `
        <h3>${project.name}</h3>
        <p>${project.description}</p>
        <a href="${project.url}" target="_blank">View on GitHub</a>
    `;
    projectsContainer.appendChild(card);
});
