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
        name: "Loan Approval Prediction System",
        desc: "Built a machine learning model to predict loan approval using applicant data. Deployed via Flask for real-time web interface.",
        link: "https://github.com/SaqibAK001/loan_approval"
    },
    {
        name: "Blood Disease Prediction System",
        desc: "Built a machine learning model to predict whether the user had any diseases using data from a blood report.",
        link: "https://github.com/SaqibAK001/comparison_of_sorting_algorithms"
    },
    {
        name: "Dairy Farm Management System",
        desc: "Full-stack web application to manage dairy operations including cow medical records, milk production, and sales tracking.",
        link: "https://github.com/SaqibAK001/dairy_database"
    },
    {
        name: "A* Pathfinding on Hexagonal Grid",
        desc: "Implemented A* algorithm on a hex grid using Python and Matplotlib, demonstrating optimal pathfinding and visualization.",
        link: "https://github.com/SaqibAK001/A_star_pathfinding_in_hexagonal_grid"
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

const container = document.getElementById('projects-container');
projects.forEach(proj => {
    const card = document.createElement('div');
    card.className = 'project-card';
    card.innerHTML = `<h3>${proj.name}</h3><p>${proj.desc}</p><a href="${proj.link}" target="_blank">View Project</a>`;
    container.appendChild(card);
});
