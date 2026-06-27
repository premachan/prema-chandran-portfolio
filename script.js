/* ============ Data ============ */
const SKILLS = [
  {
    icon: 'i-code', title: 'Languages',
    items: [
      { name: 'C#', icon: 'i-csharp' },
      { name: 'JavaScript', icon: 'i-js' },
      { name: 'Python', icon: 'i-code' },
      { name: 'SQL', icon: 'i-database' },
    ],
  },
  {
    icon: 'i-layers', title: 'Frontend',
    items: [
      { name: 'HTML', icon: 'i-html' },
      { name: 'CSS', icon: 'i-css' },
      { name: 'Responsive UI', icon: 'i-layers' },
      { name: 'UI/UX', icon: 'i-sparkles' },
    ],
  },
  {
    icon: 'i-dotnet', title: 'Frameworks',
    items: [
      { name: 'ASP.NET Core', icon: 'i-dotnet' },
      { name: 'ASP.NET MVC', icon: 'i-dotnet' },
      { name: 'Entity Framework Core', icon: 'i-cpu' },
    ],
  },
  {
    icon: 'i-database', title: 'Database',
    items: [
      { name: 'SQL Server', icon: 'i-database' },
      { name: 'LINQ', icon: 'i-code' },
    ],
  },
  {
    icon: 'i-signal', title: 'Industrial',
    items: [
      { name: 'MQTT Protocol', icon: 'i-signal' },
      { name: 'RS232', icon: 'i-cpu' },
      { name: 'CNC / Fanuc', icon: 'i-gear' },
    ],
  },
  {
    icon: 'i-award', title: 'Concepts',
    items: [
      { name: 'OOP', icon: 'i-code' },
      { name: 'MVC Architecture', icon: 'i-layers' },
      { name: 'Dependency Injection', icon: 'i-gear' },
      { name: 'SEO', icon: 'i-sparkles' },
    ],
  },
];

const PROJECTS = [
  {
    title: 'CNC Machine Data Acquisition & Production Automation',
    org: 'Veltech Auto Part India Pvt. Ltd.',
    tag: 'Industrial Automation',
    desc: 'Real-time data integration system that automates ERP production entry by collecting live machine-level data from CNC and Fanuc machines via Ethernet and RS232.',
    bullets: [
      'Built C# backend to collect, process and store machine data centrally',
      'Configured RS232 / Ethernet serial device servers and null-modem wiring',
      'Implemented M-Code based logging for accurate part count and cycle time',
      'Deployed on-site and stabilised data flow with robust error handling',
    ],
    stack: ['C#', 'ASP.NET', 'MQTT', 'RS232', 'SQL Server'],
    link: null,
  },
  {
    title: 'CNC Program Upload & Download System',
    org: 'Veltech Auto Part India Pvt. Ltd.',
    tag: 'Web + Hardware',
    desc: 'Web-based application to upload and download CNC/Fanuc programs directly from PC to machines, eliminating manual pen-drive transfers.',
    bullets: [
      'Seamless transfer for both Ethernet and RS232 enabled machines',
      'Backend logic for reliable file transfer with validation',
      'Resolved partial transfer issues with optimized communication logic',
      'Centralized program management via friendly web interface',
    ],
    stack: ['C#', 'ASP.NET MVC', 'IP Comms', 'RS232'],
    link: null,
  },
  {
    title: 'Zentroo ERP Website',
    org: 'Freedom Software Solution Pvt. Ltd.',
    tag: 'Web Development',
    desc: 'Modern, responsive ERP product website showcasing manufacturing ERP solutions, optimised for performance and SEO.',
    bullets: [
      'Designed Home, Features, Benefits, Industries, Pricing, Blog & Contact',
      'Responsive across mobile, tablet and desktop',
      'Integrated lead-generation and inquiry forms',
      'Performance and SEO optimisation for search visibility',
    ],
    stack: ['HTML', 'CSS', 'JavaScript', 'Responsive UI', 'SEO'],
    link: 'https://zentroo.com',
  },
];

const svgUse = (id) => `<svg><use href="#${id}"/></svg>`;

/* ============ Render skills ============ */
const skillsGrid = document.getElementById('skillsGrid');
SKILLS.forEach((s) => {
  const el = document.createElement('div');
  el.className = 'card skill-card reveal';
  el.innerHTML = `
    <div class="ic-icon">${svgUse(s.icon)}</div>
    <h3>${s.title}</h3>
    <div class="skill-tags">
      ${s.items.map((i) => `<span class="skill-tag">${svgUse(i.icon)} ${i.name}</span>`).join('')}
    </div>
  `;
  skillsGrid.appendChild(el);
});

/* ============ Render projects ============ */
const projectsGrid = document.getElementById('projectsGrid');
PROJECTS.forEach((p) => {
  const el = document.createElement('article');
  el.className = 'card project-card reveal';
  el.innerHTML = `
    <div class="pc-head">
      <span class="pc-tag">${p.tag}</span>
      ${p.link ? `<a href="${p.link}" target="_blank" rel="noopener" class="pc-link" aria-label="Visit project">${svgUse('i-arrow-ur')}</a>` : ''}
    </div>
    <h3>${p.title}</h3>
    <p class="pc-org">${p.org}</p>
    <p class="pc-desc">${p.desc}</p>
    <ul class="pc-list">
      ${p.bullets.map((b) => `<li>${b}</li>`).join('')}
    </ul>
    <div class="pc-stack">
      ${p.stack.map((s) => `<span>${s}</span>`).join('')}
    </div>
  `;
  projectsGrid.appendChild(el);
});

/* ============ Nav ============ */
const navbar = document.getElementById('navbar');
const menuBtn = document.getElementById('menuBtn');
const navLinks = document.getElementById('navLinks');
const links = document.querySelectorAll('.nav-link');

window.addEventListener('scroll', () => {
  navbar.classList.toggle('scrolled', window.scrollY > 12);
});

menuBtn.addEventListener('click', () => {
  const isOpen = navLinks.classList.toggle('open');
  menuBtn.classList.toggle('open', isOpen);
  menuBtn.setAttribute('aria-expanded', String(isOpen));
});

links.forEach((l) =>
  l.addEventListener('click', () => {
    navLinks.classList.remove('open');
    menuBtn.classList.remove('open');
    menuBtn.setAttribute('aria-expanded', 'false');
  })
);

/* Active link on scroll */
const sections = document.querySelectorAll('section[id]');
const setActive = () => {
  const y = window.scrollY + window.innerHeight * 0.35;
  let current = 'home';
  sections.forEach((sec) => {
    if (sec.offsetTop <= y) current = sec.id;
  });
  links.forEach((l) => {
    l.classList.toggle('active', l.getAttribute('href') === `#${current}`);
  });
};
window.addEventListener('scroll', setActive);
setActive();

/* ============ Reveal on scroll ============ */
const io = new IntersectionObserver(
  (entries) => {
    entries.forEach((e) => {
      if (e.isIntersecting) {
        e.target.classList.add('is-visible');
        io.unobserve(e.target);
      }
    });
  },
  { threshold: 0.12 }
);
document.querySelectorAll('.reveal').forEach((el) => io.observe(el));

/* ============ Animated counters ============ */
const animateCount = (el) => {
  const target = parseInt(el.dataset.count, 10) || 0;
  const suffix = el.dataset.suffix || '';
  const duration = 1400;
  const start = performance.now();
  const tick = (now) => {
    const p = Math.min((now - start) / duration, 1);
    const eased = 1 - Math.pow(1 - p, 3);
    el.textContent = Math.round(target * eased) + suffix;
    if (p < 1) requestAnimationFrame(tick);
  };
  requestAnimationFrame(tick);
};
const counterIo = new IntersectionObserver(
  (entries) => {
    entries.forEach((e) => {
      if (e.isIntersecting) {
        animateCount(e.target);
        counterIo.unobserve(e.target);
      }
    });
  },
  { threshold: 0.4 }
);
document.querySelectorAll('.counter-num').forEach((el) => counterIo.observe(el));

/* ============ Footer year ============ */
document.getElementById('year').textContent = new Date().getFullYear();
