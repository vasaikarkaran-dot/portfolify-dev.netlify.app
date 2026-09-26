// ==========================================
// 1. SELECT DOM ELEMENTS
// ==========================================
const welcomeModal = document.getElementById('welcomeModal');
const startStudioBtn = document.getElementById('startStudioBtn');

const toggleEditorBtn = document.getElementById('toggleEditorBtn');
const togglePreviewBtn = document.getElementById('togglePreviewBtn');
const editorPanel = document.getElementById('editorPanel');
const previewPanel = document.getElementById('previewPanel');

const nameInput = document.getElementById('nameInput');
const roleInput = document.getElementById('roleInput');
const bioInput = document.getElementById('bioInput');
const emailInput = document.getElementById('emailInput');
const phoneInput = document.getElementById('phoneInput');
const linkedinInput = document.getElementById('linkedinInput');
const githubInput = document.getElementById('githubInput');
const skillsInput = document.getElementById('skillsInput');

const statProjectsInput = document.getElementById('statProjectsInput');
const statCommitsInput = document.getElementById('statCommitsInput');
const statProblemsInput = document.getElementById('statProblemsInput');

const eduDegreeInput = document.getElementById('eduDegreeInput');
const eduYearInput = document.getElementById('eduYearInput');
const eduCollegeInput = document.getElementById('eduCollegeInput');

const expRoleInput = document.getElementById('expRoleInput');
const expOrgInput = document.getElementById('expOrgInput');
const expDescInput = document.getElementById('expDescInput');

const projectsFormList = document.getElementById('projectsFormList');
const addProjectBtn = document.getElementById('addProjectBtn');
const previewProjectsList = document.getElementById('previewProjectsList');
const certInput = document.getElementById('certInput');

const themeSelect = document.getElementById('themeSelect');
const photoInput = document.getElementById('photoInput');
const demoBtn = document.getElementById('demoBtn');
const downloadHtmlBtn = document.getElementById('downloadHtmlBtn');
const browserAddressBar = document.getElementById('browserAddressBar');
const copyToast = document.getElementById('copyToast');

// Preview Elements
const portfolioWebsite = document.getElementById('portfolioWebsite');
const previewPhoto = document.getElementById('previewPhoto');
const previewName = document.getElementById('previewName');
const previewRole = document.getElementById('previewRole');
const previewBio = document.getElementById('previewBio');
const previewEmail = document.getElementById('previewEmail');
const previewPhone = document.getElementById('previewPhone');
const previewLinkedin = document.getElementById('previewLinkedin');
const previewGithub = document.getElementById('previewGithub');
const previewSkills = document.getElementById('previewSkills');
const previewUrl = document.getElementById('previewUrl');

const previewStatProjects = document.getElementById('previewStatProjects');
const previewStatCommits = document.getElementById('previewStatCommits');
const previewStatProblems = document.getElementById('previewStatProblems');

const previewEduDegree = document.getElementById('previewEduDegree');
const previewEduYear = document.getElementById('previewEduYear');
const previewEduCollege = document.getElementById('previewEduCollege');

const previewExpRole = document.getElementById('previewExpRole');
const previewExpOrg = document.getElementById('previewExpOrg');
const previewExpDesc = document.getElementById('previewExpDesc');

const previewCert = document.getElementById('previewCert');
const connectBtn = document.getElementById('connectBtn');

const meterFill = document.getElementById('meterFill');
const meterPercent = document.getElementById('meterPercent');

// ==========================================
// 2. 3D WELCOME POPUP & MOBILE SWITCHER
// ==========================================
startStudioBtn.addEventListener('click', () => {
  welcomeModal.classList.add('hidden');
});

// Mobile Switcher Logic
if (toggleEditorBtn && togglePreviewBtn) {
  toggleEditorBtn.addEventListener('click', () => {
    toggleEditorBtn.classList.add('active');
    togglePreviewBtn.classList.remove('active');
    editorPanel.classList.remove('mobile-hidden');
    previewPanel.classList.remove('mobile-visible');
  });

  togglePreviewBtn.addEventListener('click', () => {
    togglePreviewBtn.classList.add('active');
    toggleEditorBtn.classList.remove('active');
    editorPanel.classList.add('mobile-hidden');
    previewPanel.classList.add('mobile-visible');
  });
}

// ==========================================
// 3. DYNAMIC PROJECTS STATE & MEDIA HANDLERS
// ==========================================
let projects = [
  {
    id: 1,
    title: 'Featured Web Project',
    desc: 'Interactive software system designed to solve campus scheduling or developer portfolio creation with clean client-side architecture.',
    tech: 'JavaScript, CSS Architecture, DOM API',
    demoUrl: 'https://example.com/demo',
    githubUrl: 'https://github.com/example/project',
    image: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&w=700&q=80'
  }
];

function renderProjectForms() {
  projectsFormList.innerHTML = '';

  projects.forEach((proj, index) => {
    const card = document.createElement('div');
    card.className = 'project-input-card';
    card.dataset.id = proj.id;

    card.innerHTML = `
      <div class="card-top">
        <span class="card-num">Project 0${index + 1}</span>
        ${projects.length > 1 ? `<button type="button" class="delete-proj-btn" data-id="${proj.id}">✕ Remove</button>` : ''}
      </div>
      <div class="form-group">
        <label>Project Title</label>
        <input type="text" class="proj-title" value="${proj.title}" placeholder="e.g. Distributed Task Scheduler">
      </div>
      <div class="form-group">
        <label>Project Screenshot / Image</label>
        <input type="file" class="proj-image-input" accept="image/*">
      </div>
      <div class="form-group">
        <label>Summary</label>
        <textarea rows="2" class="proj-desc" placeholder="What does it solve?">${proj.desc}</textarea>
      </div>
      <div class="form-row">
        <div class="form-group half">
          <label>Live Demo URL</label>
          <input type="url" class="proj-demo" value="${proj.demoUrl || ''}" placeholder="https://mydemo.live">
        </div>
        <div class="form-group half">
          <label>GitHub Repo URL</label>
          <input type="url" class="proj-github" value="${proj.githubUrl || ''}" placeholder="https://github.com/repo">
        </div>
      </div>
      <div class="form-group">
        <label>Tech Stack Tags (Comma-separated)</label>
        <input type="text" class="proj-tech" value="${proj.tech}" placeholder="e.g. Java, Spring Boot, PostgreSQL">
      </div>
    `;

    card.querySelector('.proj-title').addEventListener('input', (e) => {
      proj.title = e.target.value;
      renderPreviewProjects();
    });

    card.querySelector('.proj-desc').addEventListener('input', (e) => {
      proj.desc = e.target.value;
      renderPreviewProjects();
    });

    card.querySelector('.proj-demo').addEventListener('input', (e) => {
      proj.demoUrl = e.target.value;
      renderPreviewProjects();
    });

    card.querySelector('.proj-github').addEventListener('input', (e) => {
      proj.githubUrl = e.target.value;
      renderPreviewProjects();
    });

    card.querySelector('.proj-tech').addEventListener('input', (e) => {
      proj.tech = e.target.value;
      renderPreviewProjects();
    });

    const imageInput = card.querySelector('.proj-image-input');
    imageInput.addEventListener('change', (e) => {
      const file = e.target.files[0];
      if (file) {
        const reader = new FileReader();
        reader.onload = (event) => {
          proj.image = event.target.result;
          renderPreviewProjects();
        };
        reader.readAsDataURL(file);
      }
    });

    if (projects.length > 1) {
      card.querySelector('.delete-proj-btn').addEventListener('click', () => {
        projects = projects.filter(p => p.id !== proj.id);
        renderProjectForms();
        renderPreviewProjects();
        updateProgress();
      });
    }

    projectsFormList.appendChild(card);
  });
}

function renderPreviewProjects() {
  previewProjectsList.innerHTML = '';

  projects.forEach((proj, index) => {
    const article = document.createElement('article');
    article.className = 'project-entry';

    const tagsArray = proj.tech ? proj.tech.split(',').map(t => t.trim()).filter(t => t !== '') : ['Tech Stack'];

    article.innerHTML = `
      ${proj.image ? `<img src="${proj.image}" alt="${proj.title}" class="project-banner-img">` : ''}
      <div class="project-body">
        <div class="project-meta">
          <div class="project-meta-left">
            <span class="project-status">Project 0${index + 1}</span>
            <h4>${proj.title || 'Untitled Project'}</h4>
          </div>
          <div class="project-actions">
            ${proj.demoUrl ? `<a href="${proj.demoUrl}" target="_blank" class="proj-link-btn primary">Live ↗</a>` : ''}
            ${proj.githubUrl ? `<a href="${proj.githubUrl}" target="_blank" class="proj-link-btn secondary">Code ↗</a>` : ''}
          </div>
        </div>
        <p>${proj.desc || 'No description provided.'}</p>
        <div class="project-tags">
          ${tagsArray.map(tag => `<span>${tag}</span>`).join('')}
        </div>
      </div>
    `;

    previewProjectsList.appendChild(article);
  });
}

addProjectBtn.addEventListener('click', () => {
  projects.push({
    id: Date.now(),
    title: '',
    desc: '',
    tech: '',
    demoUrl: '',
    githubUrl: '',
    image: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=700&q=80'
  });
  renderProjectForms();
  renderPreviewProjects();
  updateProgress();
});

// ==========================================
// 4. AUTO CAPITALIZE TITLE CASE
// ==========================================
function toTitleCase(str) {
  return str.replace(/\b\w/g, char => char.toUpperCase());
}

document.querySelectorAll('[data-capitalize="words"]').forEach(input => {
  input.addEventListener('input', () => {
    const cursor = input.selectionStart;
    input.value = toTitleCase(input.value);
    input.setSelectionRange(cursor, cursor);
  });
});

// ==========================================
// 5. PROFILE STRENGTH METER
// ==========================================
const trackedInputs = [
  nameInput, roleInput, bioInput, emailInput, skillsInput,
  eduDegreeInput, eduCollegeInput, expRoleInput, certInput
];

function updateProgress() {
  let filledCount = 0;
  trackedInputs.forEach(inp => {
    if (inp.value.trim() !== '') filledCount++;
  });
  if (photoInput.files.length > 0) filledCount++;
  if (projects.length > 0 && projects[0].title.trim() !== '') filledCount++;

  const total = trackedInputs.length + 2;
  const percentage = Math.round((filledCount / total) * 100);

  meterFill.style.width = `${percentage}%`;
  meterPercent.textContent = `${percentage}%`;
}

// ==========================================
// 6. REAL-TIME INPUT BINDINGS
// ==========================================
nameInput.addEventListener('input', () => {
  const val = nameInput.value.trim() || 'Your Full Name';
  previewName.textContent = val;
  const slug = val.toLowerCase().replace(/[^a-z0-9]/g, '-');
  previewUrl.textContent = `https://portfolify.me/${slug}`;
  updateProgress();
});

roleInput.addEventListener('input', () => {
  previewRole.textContent = roleInput.value.trim() || 'Student Developer';
  updateProgress();
});

bioInput.addEventListener('input', () => {
  previewBio.textContent = bioInput.value.trim() || 'Write a short introduction in the form to describe your background, technical interests, and projects.';
  updateProgress();
});

statProjectsInput.addEventListener('input', () => {
  previewStatProjects.textContent = statProjectsInput.value.trim() || '5+';
});

statCommitsInput.addEventListener('input', () => {
  previewStatCommits.textContent = statCommitsInput.value.trim() || '250+';
});

statProblemsInput.addEventListener('input', () => {
  previewStatProblems.textContent = statProblemsInput.value.trim() || '100+';
});

emailInput.addEventListener('input', () => {
  const val = emailInput.value.trim();
  previewEmail.textContent = val ? `📧 ${val}` : '📧 student@domain.com';
  previewEmail.href = val ? `mailto:${val}` : '#';
  connectBtn.href = val ? `mailto:${val}` : '#';
  updateProgress();
});

phoneInput.addEventListener('input', () => {
  const val = phoneInput.value.trim();
  previewPhone.textContent = val ? `📞 ${val}` : '📞 +91 00000 00000';
});

linkedinInput.addEventListener('input', () => {
  previewLinkedin.href = linkedinInput.value.trim() || '#';
});

githubInput.addEventListener('input', () => {
  previewGithub.href = githubInput.value.trim() || '#';
});

skillsInput.addEventListener('input', () => {
  const list = skillsInput.value.split(',').map(s => s.trim()).filter(s => s !== '');
  previewSkills.innerHTML = '';

  if (list.length === 0) {
    previewSkills.innerHTML = `
      <span class="tech-pill">Java</span>
      <span class="tech-pill">Python</span>
      <span class="tech-pill">HTML5</span>
      <span class="tech-pill">CSS3</span>
      <span class="tech-pill">JavaScript</span>
    `;
  } else {
    list.forEach(skill => {
      const span = document.createElement('span');
      span.className = 'tech-pill';
      span.textContent = skill;
      previewSkills.appendChild(span);
    });
  }
  updateProgress();
});

eduDegreeInput.addEventListener('input', () => {
  previewEduDegree.textContent = eduDegreeInput.value.trim() || 'Degree & Specialization';
  updateProgress();
});

eduYearInput.addEventListener('input', () => {
  previewEduYear.textContent = eduYearInput.value.trim() || 'Graduation Year';
});

eduCollegeInput.addEventListener('input', () => {
  previewEduCollege.textContent = eduCollegeInput.value.trim() || 'College or University Name';
  updateProgress();
});

expRoleInput.addEventListener('input', () => {
  previewExpRole.textContent = expRoleInput.value.trim() || 'Role or Internship';
  updateProgress();
});

expOrgInput.addEventListener('input', () => {
  previewExpOrg.textContent = expOrgInput.value.trim() || 'Organization';
});

expDescInput.addEventListener('input', () => {
  previewExpDesc.textContent = expDescInput.value.trim() || 'Responsibilities and achievements will display here once filled in the editor.';
});

certInput.addEventListener('input', () => {
  previewCert.textContent = certInput.value.trim() || 'Certification / Academic Award';
  updateProgress();
});

themeSelect.addEventListener('change', (e) => {
  portfolioWebsite.className = `browser-content ${e.target.value}`;
});

photoInput.addEventListener('change', (e) => {
  const file = e.target.files[0];
  if (file) {
    const reader = new FileReader();
    reader.onload = (event) => {
      previewPhoto.src = event.target.result;
      updateProgress();
    };
    reader.readAsDataURL(file);
  }
});

browserAddressBar.addEventListener('click', () => {
  navigator.clipboard.writeText(previewUrl.textContent).then(() => {
    copyToast.classList.add('show');
    setTimeout(() => copyToast.classList.remove('show'), 2000);
  });
});

// ==========================================
// 7. GENERIC SAMPLE DATA AUTO-FILL
// ==========================================
demoBtn.addEventListener('click', () => {
  nameInput.value = 'Jordan Lee';
  roleInput.value = 'Computer Science Student & Full-Stack Developer';
  bioInput.value = 'Undergraduate computer science student passionate about distributed systems, modern web architecture, and crafting performant user experiences with clean code.';
  statProjectsInput.value = '12+';
  statCommitsInput.value = '380+';
  statProblemsInput.value = '190+';

  emailInput.value = 'jordan.lee@university.edu';
  phoneInput.value = '+91 98765 43210';
  linkedinInput.value = 'https://linkedin.com';
  githubInput.value = 'https://github.com';
  skillsInput.value = 'Java, Python, C++, HTML5, CSS3, JavaScript, TypeScript, Git, SQL, Docker';

  eduDegreeInput.value = 'B.Tech in Computer Engineering';
  eduYearInput.value = 'Class of 2026 | CGPA: 8.8';
  eduCollegeInput.value = 'Institute of Technology & Engineering';

  expRoleInput.value = 'Software Engineering Intern';
  expOrgInput.value = 'Tech Innovations Lab';
  expDescInput.value = 'Engineered responsive dashboard components, optimized API latency by 25%, and integrated automated unit tests.';

  certInput.value = 'Full-Stack Web Development Certified - Meta / Coursera';

  projects = [
    {
      id: 1,
      title: 'Cloud Document Manager',
      desc: 'Scalable web service providing real-time text synchronization, encrypted cloud storage, and team permission controls.',
      tech: 'TypeScript, React, Node.js, WebSockets',
      demoUrl: 'https://example.com/demo',
      githubUrl: 'https://github.com/example/cloud-docs',
      image: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&w=700&q=80'
    },
    {
      id: 2,
      title: 'Autonomous Campus Transit Bot',
      desc: 'Pathfinding simulation engine incorporating Dijkstra and A* path algorithms with interactive graphical analytics.',
      tech: 'Java, JavaFX, Data Structures, OOP',
      demoUrl: 'https://example.com/live',
      githubUrl: 'https://github.com/example/transit-bot',
      image: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=700&q=80'
    }
  ];

  renderProjectForms();
  renderPreviewProjects();

  document.querySelectorAll('input, textarea').forEach(el => el.dispatchEvent(new Event('input')));
});

// ==========================================
// 8. DOWNLOAD STANDALONE HTML FILE
// ==========================================
downloadHtmlBtn.addEventListener('click', () => {
  let embeddedCSS = '';
  for (let sheet of document.styleSheets) {
    try {
      for (let rule of sheet.cssRules) {
        embeddedCSS += rule.cssText + '\n';
      }
    } catch (e) {}
  }

  const exportHtml = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>${previewName.textContent} - Portfolio</title>
  <style>
    body { margin:0; background:#060911; display:flex; justify-content:center; padding: 40px 10px; min-height: 100vh; }
    .browser-content { width: 100%; max-width: 760px; border-radius: 12px; border: 1px solid #1e293b; }
    ${embeddedCSS}
  </style>
</head>
<body>
  ${portfolioWebsite.outerHTML}
</body>
</html>`;

  const blob = new Blob([exportHtml], { type: 'text/html' });
  const downloadLink = document.createElement('a');
  downloadLink.href = URL.createObjectURL(blob);
  downloadLink.download = `${previewName.textContent.toLowerCase().replace(/\s+/g, '-')}-portfolio.html`;
  downloadLink.click();
});

// Initial Setup Call
renderProjectForms();
renderPreviewProjects();