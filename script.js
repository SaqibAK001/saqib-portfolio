// Hamburger toggle
const hamburger = document.getElementById('hamburger');
const navLinks = document.getElementById('nav-links');

hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('show');
});

// Fade-in on scroll
const faders = document.querySelectorAll('.fade-in');
const appearOptions = { threshold: 0.1, rootMargin: "0px 0px -50px 0px" };

const appearOnScroll = new IntersectionObserver(function(entries, observer){
    entries.forEach(entry => {
        if (!entry.isIntersecting) return;
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
    });
}, appearOptions);

faders.forEach(fader => appearOnScroll.observe(fader));

// Projects Data
const projects = [
    {
        name: "EDITH - AI Document Analyzer",
        desc: "Created a chatbot which analyzes the provided documents and answers questions related to the documents",
        link: "https://github.com/SaqibAK001/EDITH"
    },
    {
        name: "Loan Approval Prediction System",
        desc: "Built a machine learning model to predict loan approval using applicant data. Deployed via Flask for real-time web interface.",
        link: "https://github.com/SaqibAK001/loan_approval"
    },
    {
        name: "Blood Disease Prediction System",
        desc: "Built a machine learning model to predict whether the user had any diseases using data from a blood report.",
        link: "https://github.com/SaqibAK001/blood-work-disease-prediction"
    },
    {
        name: "Dairy Farm Management System",
        desc: "Full-stack web application to manage dairy operations including cow medical records, milk production, and sales tracking.",
        link: "https://github.com/SaqibAK001/dairy_database"
    },
    {
        name: "A* Pathfinding on Hexagonal Grid",
        desc: "Implemented A* algorithm on a hex grid using Python and Matplotlib, demonstrating optimal pathfinding and visualization.",
        link: "https://github.com/SaqibAK001/A_star_pathfinder_in_hexagonal_grid"
    },
    {
        name: "Blood Bank Management System",
        desc: "Web-based blood bank portal supporting donor/recipient data management and blood stock tracking with Flask and MySQL.",
        link: "https://github.com/SaqibAK001/bloodbank_database"
    },
    {
        name: "Sorting Algorithm Analyzer",
        desc: "Implemented and compared Insertion Sort, Heap Sort, and Selection Sort in C. Analyzed performance and time complexity.",
        link: "https://github.com/SaqibAK001/comparison_of_sorting_algorithms"
    }
];

// Extracurricular Data
const extracurriculars = [
    {
        name: "Participated in NMIT x Odoo Hackathon",
        desc: "Ecofinds is a sustainable e-commerce web application built with Flask and MySQL that enables users to browse and purchase eco-friendly products.",
        link: "https://github.com/f4zill/Ecofinds"
    },
    {
        name: "Placed in the top 15 in FOSS FEST SEPTEMBER 2025 - NATIONAL HACKATHON",
        desc: "A minimal legal case management module for Odoo 18 Community, enabling management of lawyers, clients, legal cases, hearings, documents, fixed-fee invoicing, and case summaries.",
        link: "https://github.com/SaqibAK001/legal-odoo"
    }
];

const extraContainer = document.getElementById('extracurricular-container');
extracurriculars.forEach(activity => {
    const card = document.createElement('div');
    card.className = 'project-card'; // reuse same style as project cards
    card.innerHTML = `
        <h3>${activity.name}</h3>
        <p>${activity.desc}</p>
        <a href="${activity.link}" target="_blank">View More</a>
    `;
    extraContainer.appendChild(card);
});


const container = document.getElementById('projects-container');
projects.forEach(proj => {
    const card = document.createElement('div');
    card.className = 'project-card';
    card.innerHTML = `<h3>${proj.name}</h3><p>${proj.desc}</p><a href="${proj.link}" target="_blank">View Project</a>`;
    container.appendChild(card);
});
