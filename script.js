// Hamburger menu toggle
const hamburger = document.getElementById('hamburger');
const navLinks = document.getElementById('nav-links');

hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('show');
    hamburger.textContent = navLinks.classList.contains('show') ? '✕' : '☰';
});

// Close menu when clicking a link
document.querySelectorAll('#nav-links a').forEach(link => {
    link.addEventListener('click', () => {
        navLinks.classList.remove('show');
        hamburger.textContent = '☰';
    });
});

// Theme toggle
const themeToggle = document.getElementById('theme-toggle');

// Load saved theme
if (localStorage.getItem('theme') === 'dark') {
    document.body.classList.add('dark');
    themeToggle.textContent = '☀️ Light';
} else {
    themeToggle.textContent = '🌙 Dark';
}

themeToggle.addEventListener('click', () => {
    document.body.classList.toggle('dark');
    
    if (document.body.classList.contains('dark')) {
        themeToggle.textContent = '☀️ Light';
        localStorage.setItem('theme', 'dark');
    } else {
        themeToggle.textContent = '🌙 Dark';
        localStorage.setItem('theme', 'light');
    }
});

// Intersection Observer for fade-in animations
const faders = document.querySelectorAll('.fade-in');
const appearOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const appearOnScroll = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            appearOnScroll.unobserve(entry.target);
        }
    });
}, appearOptions);

faders.forEach(fader => appearOnScroll.observe(fader));

// Reports Data
const reports = [
    {
        name: "Blood Work Analysis and Disease Prediction using Random Forest Classifier",
        desc: "This project focuses on predicting diseases from blood work test results using a machine learning approach. A Random Forest Classifier is implemented to analyse various clinical parameters such as glucose levels, cholesterol, hemoglobin, platelet count, and other hematological and biochemical measures.",
        link: "https://zenodo.org/records/18515019"
    }
];

// Load Reports
const reportContainer = document.getElementById('reports-container');
reports.forEach(proj => {
    const card = document.createElement('div');
    card.className = 'project-card';
    card.innerHTML = `
        <h3>${proj.name}</h3>
        <p>${proj.desc}</p>
        <a href="${proj.link}" target="_blank">View Project →</a>
    `;
    reportContainer.appendChild(card);
});

// Projects Data
const projects = [
    {
        name: "EDITH - AI Document Analyzer",
        desc: "Created a chatbot which analyzes documents...",
        link: "https://github.com/SaqibAK001/EDITH"
    },
    {
        name: "Reinforcement Learning Snake Game",
        desc: "Automated snake game using Q-table.",
        link: "https://github.com/SaqibAK001/automated_snake_game"
    },
    {
        name: "Loan Approval System",
        desc: "ML model for loan approval using Flask.",
        link: "https://github.com/SaqibAK001/loan_approval"
    },
    {
        name: "Blood Disease Prediction",
        desc: "Predict diseases using blood report data.",
        link: "https://github.com/SaqibAK001/blood-work-disease-prediction"
    },
    {
        name: "Dairy Farm Management",
        desc: "Full-stack management system with MySQL.",
        link: "https://github.com/SaqibAK001/dairy_database"
    },
    {
        name: "A* Hex Grid Pathfinding",
        desc: "A* algorithm on hex grid using Python.",
        link: "https://github.com/SaqibAK001/A_star_pathfinder_in_hexagonal_grid"
    }
];

// Load Projects
const projectContainer = document.getElementById('projects-container');
projects.forEach(proj => {
    const card = document.createElement('div');
    card.className = 'project-card';
    card.innerHTML = `
        <h3>${proj.name}</h3>
        <p>${proj.desc}</p>
        <a href="${proj.link}" target="_blank">View Project →</a>
    `;
    projectContainer.appendChild(card);
});

// Load Extracurriculars
const extracurriculars = [
    {
        name: "Open Innovation Hackathon",
        desc: "B2B based product which helps companies figure out if posts being made are AI generated or not.",
        link: "https://github.com/SaqibAK001/reality-check"
    },
    {
        name: "NMIT x Odoo Hackathon",
        desc: "Ecofinds sustainable e-commerce project.",
        link: "https://github.com/f4zill/Ecofinds"
    },
    {
        name: "CodeCrusade Hackathon",
        desc: "A app which helps authorities manage wild animals facing extinction.",
        link: "https://github.com/SaqibAK001/wwwildlifeagent"
    },
    {
        name: "Top 15 - FOSS FEST 2025",
        desc: "Legal case management module for Odoo.",
        link: "https://github.com/SaqibAK001/legal-odoo"
    }
];

const extraContainer = document.getElementById('extracurricular-container');
extracurriculars.forEach(activity => {
    const card = document.createElement('div');
    card.className = 'project-card';
    card.innerHTML = `
        <h3>${activity.name}</h3>
        <p>${activity.desc}</p>
        <a href="${activity.link}" target="_blank">View More →</a>
    `;
    extraContainer.appendChild(card);
});

// Typewriter Effect
const text = "Third-year CSE Student";
let i = 0;

function typeWriter() {
    if (i < text.length) {
        document.getElementById('typing').innerHTML += text.charAt(i);
        i++;
        setTimeout(typeWriter, 70);
    }
}

// Initialize on load
window.addEventListener('load', () => {
    typeWriter();
});