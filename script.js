document.addEventListener('DOMContentLoaded', function () {
    // Cursor Effect
    const cursor = document.querySelector('.cursor');

    document.addEventListener('mousemove', (e) => {
        cursor.style.left = e.pageX + 'px';
        cursor.style.top = e.pageY + 'px';
    });

    document.addEventListener('mouseenter', () => {
        cursor.style.opacity = '1';
    });

    document.addEventListener('mouseleave', () => {
        cursor.style.opacity = '0';
    });

    // Theme Toggle
    const themeToggle = document.querySelector('.theme-toggle');
    const body = document.body;

    themeToggle.addEventListener('click', () => {
        body.setAttribute('data-theme',
            body.getAttribute('data-theme') === 'light' ? 'dark' : 'light');

        // Change icon
        const icon = themeToggle.querySelector('i');
        icon.classList.toggle('fa-moon');
        icon.classList.toggle('fa-sun');
    });

    // Mobile Menu
    const burger = document.querySelector('.burger');
    const navLinks = document.querySelector('.nav-links');

    burger.addEventListener('click', () => {
        burger.classList.toggle('active');
        navLinks.classList.toggle('active');
    });

    // Close mobile menu when clicking a link
    document.querySelectorAll('.nav-links a').forEach(link => {
        link.addEventListener('click', () => {
            burger.classList.remove('active');
            navLinks.classList.remove('active');
        });
    });

    // Smooth scrolling
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();

            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);

            window.scrollTo({
                top: targetElement.offsetTop - 80,
                behavior: 'smooth'
            });
        });
    });

    // Active link highlighting
    const sections = document.querySelectorAll('section');
    const navItems = document.querySelectorAll('.nav-links a');

    window.addEventListener('scroll', () => {
        let current = '';

        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;

            if (pageYOffset >= sectionTop - 200) {
                current = section.getAttribute('id');
            }
        });

        navItems.forEach(item => {
            item.classList.remove('active');
            if (item.getAttribute('href') === `#${current}`) {
                item.classList.add('active');
            }
        });
    });

    // Fresher Projects Data
    const projects = [
        {
            title: "Portfolio Website",
            category: "Personal Project",
            description: "This portfolio site showcases my skills, resume, and projects. Built using HTML, CSS, and JavaScript with responsive design.",
            links: [
                { icon: "fa-eye", text: "View", url: "#" },
                { icon: "fa-code", text: "Code", url: "#" }
            ]
        },
  
  
        {
            title: "Open to Work",
            category: "Learning in Progress",
            description: "Currently improving my development skills and exploring new technologies. Open to internships, freelance, and entry-level opportunities.",
            links: [
                { icon: "fa-linkedin", text: "LinkedIn", url: "#" },
                { icon: "fa-envelope", text: "Contact", url: "#contact" }
            ]
        }
    ];

    // Skills Data
    const skills = [
        { name: "HTML5", icon: "fa-html5" },
        { name: "CSS3", icon: "fa-css3-alt" },
        { name: "JavaScript", icon: "fa-js" },
        { name: "JAVA", icon: "fa-react" },
        { name: "PYTHON", icon: "fa-node" },
        { name: "MYSQL", icon: "fa-database" },
        { name: "PHP", icon: "fa-php" }
    ];

    // Render Projects
    const projectsContainer = document.querySelector('.projects');

    projects.forEach(project => {
        const projectCard = document.createElement('div');
        projectCard.className = 'project-card';

        projectCard.innerHTML = `
            <h3 class="project-title">${project.title}</h3>
            <div class="project-category">${project.category}</div>
            <p class="project-description">${project.description}</p>
            <div class="project-links">
                ${project.links.map(link => `
                    <a href="${link.url}" class="project-link" target="_blank">
                        <i class="fas ${link.icon}"></i>
                        <span>${link.text}</span>
                    </a>
                `).join('')}
            </div>
        `;

        projectsContainer.appendChild(projectCard);
    });

    // Render Skills
    const skillsContainer = document.querySelector('.skills-container');

    skills.forEach(skill => {
        const skillItem = document.createElement('div');
        skillItem.className = 'skill-item';

        skillItem.innerHTML = `
            <div class="skill-icon">
                <i class="fab ${skill.icon}"></i>
            </div>
            <div class="skill-name">${skill.name}</div>
        `;

        skillsContainer.appendChild(skillItem);
    });

    // Form Submission
    const contactForm = document.querySelector('.contact-form');

    contactForm.addEventListener('submit', function (e) {
        e.preventDefault();

        const formData = new FormData(this);
        const data = Object.fromEntries(formData);

        console.log('Form submitted:', data);

        alert('Thank you for your message! I will get back to you soon.');
        this.reset();
    });

    // Scroll Reveal Animation
    const revealElements = document.querySelectorAll('.project-card, .skill-item, .about-content, .contact-content');

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate');
            }
        });
    }, { threshold: 0.1 });

    revealElements.forEach(el => {
        observer.observe(el);
    });
});
