const projects = [
  {
    title: 'Unsupervised Neural Network for Multi-Genre Music Generation',
    description: 'A deep-learning project exploring music generation with autoencoders, VAEs, transformer layers, and iterative tuning.',
    link: 'https://github.com/ProdiptoPantho/music-generation-unsupervised',
    tags: ['Python', 'PyTorch', 'Jupyter Notebook']
  },
  {
    title: 'JaboKoi',
    description: 'A location-oriented mobile app with an Android client and a FastAPI backend for practical navigation use cases.',
    link: 'https://github.com/ProdiptoPantho/JaboKoi',
    tags: ['Kotlin', 'Python', 'FastAPI']
  },
  {
    title: 'VangtiChai',
    description: 'An Android change calculator for Bangladeshi Taka with adaptive layouts and clean interaction design.',
    link: 'https://github.com/ProdiptoPantho/VangtiChai',
    tags: ['Kotlin', 'Android', 'UX']
  },
  {
    title: 'BRACU Research Portal',
    description: 'A web-based portal concept for organizing institutional research resources and navigation flows.',
    link: 'https://github.com/ProdiptoPantho/Bracu-Research-Portal',
    tags: ['HTML', 'CSS', 'PHP', 'MySQL']
  }
];

const skillGroups = [
  {
    title: 'Languages',
    items: ['Python', 'Java', 'Kotlin', 'C++', 'JavaScript', 'SQL']
  },
  {
    title: 'Frameworks & tools',
    items: ['PyTorch', 'FastAPI', 'Android', 'Jupyter Notebook', 'Git', 'LaTeX']
  },
  {
    title: 'Strength areas',
    items: ['Software engineering', 'Data structures', 'Cloud basics', 'Mobile apps', 'ML experimentation', 'Product thinking']
  }
];

const timeline = [
  {
    year: '2023 - present',
    title: 'Computer Science at BRAC University',
    description: 'Coursework spanning programming, algorithms, databases, cloud computing, software engineering, and web technologies.'
  },
  {
    year: 'Projects',
    title: 'Built across mobile, web, and ML',
    description: 'A mix of Android apps, Python backends, experimental ML work, and a personal portfolio site.'
  },
  {
    year: 'Now',
    title: 'Ready for internships',
    description: 'Looking for teams where I can contribute quickly, learn from good engineering, and ship useful features.'
  }
];

const projectGrid = document.getElementById('project-grid');
const skillGroupsRoot = document.getElementById('skill-groups');
const timelineRoot = document.getElementById('timeline');
const yearRoot = document.getElementById('year');

projectGrid.innerHTML = projects.map((project) => `
  <article class="project-card">
    <div>
      <p class="eyebrow">Featured project</p>
      <h3>${project.title}</h3>
      <p>${project.description}</p>
    </div>
    <div>
      <div class="chip-row" aria-label="Project tags">
        ${project.tags.map((tag) => `<span class="chip">${tag}</span>`).join('')}
      </div>
      <p style="margin-top: 14px;"><a href="${project.link}" target="_blank" rel="noreferrer">View on GitHub →</a></p>
    </div>
  </article>
`).join('');

skillGroupsRoot.innerHTML = skillGroups.map((group) => `
  <section class="skill-group">
    <h3>${group.title}</h3>
    <div class="chip-row">
      ${group.items.map((item) => `<span class="chip">${item}</span>`).join('')}
    </div>
  </section>
`).join('');

timelineRoot.innerHTML = timeline.map((item) => `
  <article class="timeline-item">
    <time>${item.year}</time>
    <div>
      <h3>${item.title}</h3>
      <p>${item.description}</p>
    </div>
  </article>
`).join('');

yearRoot.textContent = new Date().getFullYear();

const observer = new IntersectionObserver((entries) => {
  for (const entry of entries) {
    if (entry.isIntersecting) {
      entry.target.classList.add('is-visible');
      observer.unobserve(entry.target);
    }
  }
}, { threshold: 0.18 });

document.querySelectorAll('.reveal').forEach((element) => observer.observe(element));