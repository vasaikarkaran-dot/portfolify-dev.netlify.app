// ==========================================
// PORTFOLIFY SMART PRESET SCRIPT (UPDATED)
// ==========================================
function initPortfolify() {

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
  const certIssuerInput = document.getElementById('certIssuerInput');
  const certFileInput = document.getElementById('certFileInput');
  const certUrlInput = document.getElementById('certUrlInput');

  const previewCert = document.getElementById('previewCert');
  const previewCertIssuer = document.getElementById('previewCertIssuer');
  const previewCertImg = document.getElementById('certPreviewImg');
  const previewCertUrl = document.getElementById('previewCertUrl');
  const openCertModalBtn = document.getElementById('openCertModalBtn');

  const docViewerModal = document.getElementById('docViewerModal');
  const docModalImg = document.getElementById('docModalImg');
  const closeDocModalBtn = document.getElementById('closeDocModalBtn');

  const themeSelect = document.getElementById('themeSelect');
  const photoInput = document.getElementById('photoInput');
  const demoBtn = document.getElementById('demoBtn');
  const downloadHtmlBtn = document.getElementById('downloadHtmlBtn');
  const browserAddressBar = document.getElementById('browserAddressBar');
  const copyToast = document.getElementById('copyToast');

  const fresherPresetBtn = document.getElementById('fresherPresetBtn');
  const seniorPresetBtn = document.getElementById('seniorPresetBtn');

  // Preview Targets
  const portfolioWebsite = document.getElementById('portfolioWebsite');
  const previewPhoto = document.getElementById('previewPhoto');
  const previewName = document.getElementById('previewName');
  const previewRole = document.getElementById('previewRole');
  const previewBio = document.getElementById('previewBio');
  const previewBrandName = document.getElementById('previewBrandName');
  const previewBrandRole = document.getElementById('previewBrandRole');
  const previewEmail = document.getElementById('previewEmail');
  const previewPhone = document.getElementById('previewPhone');
  const previewLinkedin = document.getElementById('previewLinkedin');
  const previewGithub = document.getElementById('previewGithub');
  const previewSkills = document.getElementById('previewSkills');
  const previewUrl = document.getElementById('previewUrl');

  const previewStatProjects = document.getElementById('previewStatProjects');
  const previewStatCommits = document.getElementById('previewStatCommits');
  const previewStatProblems = document.getElementById('previewStatProblems');
  const previewFloatProjects = document.getElementById('previewFloatProjects');

  const previewEduDegree = document.getElementById('previewEduDegree');
  const previewEduYear = document.getElementById('previewEduYear');
  const previewEduCollege = document.getElementById('previewEduCollege');

  const previewExpRole = document.getElementById('previewExpRole');
  const previewExpOrg = document.getElementById('previewExpOrg');
  const previewExpDesc = document.getElementById('previewExpDesc');

  const connectBtn = document.getElementById('connectBtn');
  const navConnectBtn = document.getElementById('navConnectBtn');
  const footerConnectBtn = document.getElementById('footerConnectBtn');

  const meterFill = document.getElementById('meterFill');
  const meterPercent = document.getElementById('meterPercent');

  let certificateDocSrc = 'https://images.unsplash.com/photo-1606326608606-aa0b62935f2b?auto=format&fit=crop&w=700&q=80';

  // 🔗 URL HASH se Data Read karne ka function (Page Load par)
  function loadDataFromUrl() {
    const hash = window.location.hash;
    if (hash && hash.includes('#data=')) {
      try {
        const base64Data = hash.split('#data=')[1];
        const jsonString = decodeURIComponent(escape(atob(base64Data)));
        const data = JSON.parse(jsonString);

        if (nameInput) nameInput.value = data.name || '';
        if (roleInput) roleInput.value = data.role || '';
        if (bioInput) bioInput.value = data.bio || '';
        if (emailInput) emailInput.value = data.email || '';
        if (phoneInput) phoneInput.value = data.phone || '';
        if (linkedinInput) linkedinInput.value = data.linkedin || '';
        if (githubInput) githubInput.value = data.github || '';
        if (skillsInput) skillsInput.value = data.skills || '';
        if (data.projects) projects = data.projects;
        if (certInput) certInput.value = data.certTitle || '';
        if (certIssuerInput) certIssuerInput.value = data.certIssuer || '';

        document.querySelectorAll('input, textarea').forEach(el => el.dispatchEvent(new Event('input')));
        renderProjectForms();
        renderPreviewProjects();
        renderSkills();
      } catch (e) {
        console.error('Failed to load portfolio from URL data', e);
      }
    }
  }

  // ⚡ SMART PRESETS (Fresher vs Senior)
  if (fresherPresetBtn) {
    fresherPresetBtn.addEventListener('click', () => {
      if (roleInput) roleInput.value = 'Computer Science Student & Tech Explorer';
      if (bioInput) bioInput.value = 'First-year engineering student eager to learn programming, solve logical puzzles, and build simple web apps.';
      if (statProjectsInput) statProjectsInput.value = '3+';
      if (statCommitsInput) statCommitsInput.value = '50+';
      if (statProblemsInput) statProblemsInput.value = '40+';
      if (skillsInput) skillsInput.value = 'C, C++, Python, HTML5, CSS3';
      if (expRoleInput) expRoleInput.value = 'Coding Club Member';
      if (expOrgInput) expOrgInput.value = 'College Technical Society';
      if (expDescInput) expDescInput.value = 'Participated in coding bootcamps and collaborated on group mini-projects.';
      if (certInput) certInput.value = 'Python Programming Fundamentals';
      if (certIssuerInput) certIssuerInput.value = 'Coursera';

      projects = [
        {
          id: 1,
          title: 'Student Task Manager',
          desc: 'Simple web app for tracking daily college assignments and exam dates.',
          tech: 'HTML5, CSS3, JavaScript',
          demoUrl: 'https://example.com/demo',
          githubUrl: 'https://github.com/example/tasks',
          image: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&w=700&q=80'
        }
      ];
      renderProjectForms();
      renderPreviewProjects();
      document.querySelectorAll('input, textarea').forEach(el => el.dispatchEvent(new Event('input')));
      renderSkills();
    });
  }

  if (seniorPresetBtn) {
    seniorPresetBtn.addEventListener('click', () => {
      if (roleInput) roleInput.value = 'Final Year CSE Student & Full-Stack Developer';
      if (bioInput) bioInput.value = 'Engineering senior experienced in full-stack web applications, cloud deployments, and collaborative hackathons.';
      if (statProjectsInput) statProjectsInput.value = '12+';
      if (statCommitsInput) statCommitsInput.value = '450+';
      if (statProblemsInput) statProblemsInput.value = '250+';
      if (skillsInput) skillsInput.value = 'Java, Python, React, Node.js, SQL, Docker, Git';
      if (expRoleInput) expRoleInput.value = 'Software Engineering Intern';
      if (expOrgInput) expOrgInput.value = 'Enterprise Software Labs';
      if (expDescInput) expDescInput.value = 'Engineered microservice endpoints, reduced API latency by 25%, and instituted automated tests.';
      if (certInput) certInput.value = 'Full-Stack Cloud Architecture Certified';
      if (certIssuerInput) certIssuerInput.value = 'Meta / Coursera';

      projects = [
        {
          id: 1,
          title: 'Cloud Document Manager',
          desc: 'Scalable web service providing real-time text synchronization and encrypted cloud storage.',
          tech: 'TypeScript, React, Node.js, WebSockets',
          demoUrl: 'https://example.com/demo',
          githubUrl: 'https://github.com/example/cloud-docs',
          image: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&w=700&q=80'
        },
        {
          id: 2,
          title: 'Autonomous Campus Transit Bot',
          desc: 'Pathfinding simulation engine incorporating Dijkstra and A* algorithms with analytics.',
          tech: 'Java, JavaFX, Algorithms',
          demoUrl: 'https://example.com/live',
          githubUrl: 'https://github.com/example/transit-bot',
          image: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=700&q=80'
        }
      ];
      renderProjectForms();
      renderPreviewProjects();
      document.querySelectorAll('input, textarea').forEach(el => el.dispatchEvent(new Event('input')));
      renderSkills();
    });
  }

  // Theme Switcher
  const allThemes = ['theme-liquid-light', 'theme-vercel', 'theme-supabase', 'theme-linear', 'theme-cyber'];

  function switchTheme(newTheme) {
    allThemes.forEach(cls => {
      document.body.classList.remove(cls);
      if (portfolioWebsite) portfolioWebsite.classList.remove(cls);
    });
    document.body.classList.add(newTheme);
    if (portfolioWebsite) portfolioWebsite.classList.add(newTheme);

    if (window.innerWidth <= 900 && togglePreviewBtn && toggleEditorBtn) {
      togglePreviewBtn.classList.add('active');
      toggleEditorBtn.classList.remove('active');
      editorPanel.classList.add('mobile-hidden');
      previewPanel.classList.add('mobile-visible');
    }
  }

  if (themeSelect) {
    ['change', 'input'].forEach(evt => {
      themeSelect.addEventListener(evt, (e) => switchTheme(e.target.value));
    });
  }

  if (startStudioBtn && welcomeModal) {
    startStudioBtn.addEventListener('click', () => welcomeModal.classList.add('hidden'));
  }

  if (toggleEditorBtn && togglePreviewBtn && editorPanel && previewPanel) {
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

  // Projects State
  let projects = [
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

  function renderProjectForms() {
    if (!projectsFormList) return;
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

      card.querySelector('.proj-title').addEventListener('input', (e) => { proj.title = e.target.value; renderPreviewProjects(); });
      card.querySelector('.proj-desc').addEventListener('input', (e) => { proj.desc = e.target.value; renderPreviewProjects(); });
      card.querySelector('.proj-demo').addEventListener('input', (e) => { proj.demoUrl = e.target.value; renderPreviewProjects(); });
      card.querySelector('.proj-github').addEventListener('input', (e) => { proj.githubUrl = e.target.value; renderPreviewProjects(); });
      card.querySelector('.proj-tech').addEventListener('input', (e) => { proj.tech = e.target.value; renderPreviewProjects(); });

      const imageInput = card.querySelector('.proj-image-input');
      imageInput.addEventListener('change', (e) => {
        const file = e.target.files[0];
        if (file) {
          const reader = new FileReader();
          reader.onload = (event) => { proj.image = event.target.result; renderPreviewProjects(); };
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
    if (!previewProjectsList) return;
    previewProjectsList.innerHTML = '';

    projects.forEach((proj, index) => {
      const article = document.createElement('article');
      article.className = 'project-entry';
      const tagsArray = proj.tech ? proj.tech.split(',').map(t => t.trim()).filter(Boolean) : ['Tech Stack'];

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

  if (addProjectBtn) {
    addProjectBtn.addEventListener('click', () => {
      projects.push({
        id: Date.now(), title: '', desc: '', tech: '', demoUrl: '', githubUrl: '',
        image: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=700&q=80'
      });
      renderProjectForms();
      renderPreviewProjects();
      updateProgress();
    });
  }

  // Certificate Modal
  if (certInput && previewCert) certInput.addEventListener('input', () => { previewCert.textContent = certInput.value.trim() || 'Certificate / Honor Title'; updateProgress(); });
  if (certIssuerInput && previewCertIssuer) certIssuerInput.addEventListener('input', () => { previewCertIssuer.textContent = certIssuerInput.value.trim() || 'Issuing Authority'; });
  if (certUrlInput && previewCertUrl) certUrlInput.addEventListener('input', () => { previewCertUrl.href = certUrlInput.value.trim() || '#'; });

  if (certFileInput) {
    certFileInput.addEventListener('change', (e) => {
      const file = e.target.files[0];
      if (file) {
        const reader = new FileReader();
        reader.onload = (event) => {
          certificateDocSrc = event.target.result;
          if (previewCertImg) previewCertImg.src = certificateDocSrc;
          if (docModalImg) docModalImg.src = certificateDocSrc;
        };
        reader.readAsDataURL(file);
      }
    });
  }

  if (openCertModalBtn && docViewerModal && docModalImg) {
    openCertModalBtn.addEventListener('click', () => { docModalImg.src = certificateDocSrc; docViewerModal.classList.add('active'); });
  }
  if (previewCertImg && docViewerModal && docModalImg) {
    previewCertImg.addEventListener('click', () => { docModalImg.src = certificateDocSrc; docViewerModal.classList.add('active'); });
  }
  if (closeDocModalBtn && docViewerModal) {
    closeDocModalBtn.addEventListener('click', () => docViewerModal.classList.remove('active'));
  }
  if (docViewerModal) {
    docViewerModal.addEventListener('click', (e) => { if (e.target === docViewerModal) docViewerModal.classList.remove('active'); });
  }

  // Live Bindings
  function toTitleCase(str) { return str.replace(/\b\w/g, char => char.toUpperCase()); }
  document.querySelectorAll('[data-capitalize="words"]').forEach(input => {
    input.addEventListener('input', () => {
      const cursor = input.selectionStart;
      input.value = toTitleCase(input.value);
      input.setSelectionRange(cursor, cursor);
    });
  });

  const trackedInputs = [nameInput, roleInput, bioInput, emailInput, skillsInput, eduDegreeInput, eduCollegeInput, expRoleInput, certInput].filter(Boolean);

  function updateProgress() {
    if (!meterFill || !meterPercent) return;
    let filledCount = 0;
    trackedInputs.forEach(inp => { if (inp.value.trim() !== '') filledCount++; });
    if (photoInput && photoInput.files.length > 0) filledCount++;
    if (projects.length > 0 && projects[0].title.trim() !== '') filledCount++;

    const total = trackedInputs.length + 2;
    const percentage = Math.round((filledCount / total) * 100);
    meterFill.style.width = `${percentage}%`;
    meterPercent.textContent = `${percentage}%`;
  }

  if (nameInput && previewName && previewUrl) {
    nameInput.addEventListener('input', () => {
      const val = nameInput.value.trim() || 'Jordan Lee';
      previewName.textContent = val;
      if (previewBrandName) previewBrandName.textContent = val;
      const slug = val.toLowerCase().replace(/[^a-z0-9]/g, '-');
      previewUrl.textContent = `https://portfolify.me/${slug}`;
      updateProgress();
    });
  }

  if (roleInput && previewRole) {
    roleInput.addEventListener('input', () => {
      const val = roleInput.value.trim() || 'Student Developer';
      previewRole.textContent = val;
      if (previewBrandRole) previewBrandRole.textContent = val;
      updateProgress();
    });
  }

  if (bioInput && previewBio) bioInput.addEventListener('input', () => { previewBio.textContent = bioInput.value.trim() || 'Short bio...'; updateProgress(); });
  if (statProjectsInput && previewStatProjects) statProjectsInput.addEventListener('input', () => { const v = statProjectsInput.value.trim() || '12+'; previewStatProjects.textContent = v; if (previewFloatProjects) previewFloatProjects.textContent = v; });
  if (statCommitsInput && previewStatCommits) statCommitsInput.addEventListener('input', () => { previewStatCommits.textContent = statCommitsInput.value.trim() || '380+'; });
  if (statProblemsInput && previewStatProblems) statProblemsInput.addEventListener('input', () => { previewStatProblems.textContent = statProblemsInput.value.trim() || '190+'; });

  if (emailInput && previewEmail && connectBtn) {
    emailInput.addEventListener('input', () => {
      const val = emailInput.value.trim();
      const mailto = val ? `mailto:${val}` : '#';
      previewEmail.textContent = val ? `📧 ${val}` : '📧 student@domain.com';
      previewEmail.href = mailto;
      connectBtn.href = mailto;
      if (navConnectBtn) navConnectBtn.href = mailto;
      if (footerConnectBtn) footerConnectBtn.href = mailto;
      updateProgress();
    });
  }

  if (phoneInput && previewPhone) phoneInput.addEventListener('input', () => { previewPhone.textContent = phoneInput.value.trim() ? `📞 ${phoneInput.value.trim()}` : '📞 +91 00000 00000'; });
  if (linkedinInput && previewLinkedin) linkedinInput.addEventListener('input', () => { previewLinkedin.href = linkedinInput.value.trim() || '#'; });
  if (githubInput && previewGithub) githubInput.addEventListener('input', () => { previewGithub.href = githubInput.value.trim() || '#'; });

  function renderSkills() {
    if (!previewSkills || !skillsInput) return;
    const list = skillsInput.value.split(',').map(s => s.trim()).filter(Boolean);
    previewSkills.innerHTML = '';
    list.forEach(skill => {
      const span = document.createElement('span');
      span.className = 'tech-pill';
      span.textContent = skill;
      previewSkills.appendChild(span);
    });
    updateProgress();
  }
  if (skillsInput) skillsInput.addEventListener('input', renderSkills);

  if (eduDegreeInput && previewEduDegree) { eduDegreeInput.addEventListener('input', () => { previewEduDegree.textContent = eduDegreeInput.value.trim() || 'Degree'; updateProgress(); }); }
  if (eduYearInput && previewEduYear) eduYearInput.addEventListener('input', () => { previewEduYear.textContent = eduYearInput.value.trim() || 'Year'; });
  if (eduCollegeInput && previewEduCollege) { eduCollegeInput.addEventListener('input', () => { previewEduCollege.textContent = eduCollegeInput.value.trim() || 'College'; updateProgress(); }); }
  if (expRoleInput && previewExpRole) { expRoleInput.addEventListener('input', () => { previewExpRole.textContent = expRoleInput.value.trim() || 'Role'; updateProgress(); }); }
  if (expOrgInput && previewExpOrg) expOrgInput.addEventListener('input', () => { previewExpOrg.textContent = expOrgInput.value.trim() || 'Org'; });
  if (expDescInput && previewExpDesc) expDescInput.addEventListener('input', () => { previewExpDesc.textContent = expDescInput.value.trim() || 'Desc'; });

  if (photoInput && previewPhoto) {
    photoInput.addEventListener('change', (e) => {
      const file = e.target.files[0];
      if (file) {
        const reader = new FileReader();
        reader.onload = (event) => { previewPhoto.src = event.target.result; updateProgress(); };
        reader.readAsDataURL(file);
      }
    });
  }

  // 🔗 SHAREABLE LINK GENERATOR (Data Encoding)
  if (browserAddressBar && copyToast && previewUrl) {
    browserAddressBar.addEventListener('click', () => {
      const portfolioData = {
        name: nameInput ? nameInput.value : '',
        role: roleInput ? roleInput.value : '',
        bio: bioInput ? bioInput.value : '',
        email: emailInput ? emailInput.value : '',
        phone: phoneInput ? phoneInput.value : '',
        linkedin: linkedinInput ? linkedinInput.value : '',
        github: githubInput ? githubInput.value : '',
        skills: skillsInput ? skillsInput.value : '',
        projects: projects,
        certTitle: certInput ? certInput.value : '',
        certIssuer: certIssuerInput ? certIssuerInput.value : ''
      };

      const jsonString = JSON.stringify(portfolioData);
      const base64Data = btoa(unescape(encodeURIComponent(jsonString)));
      const currentBaseUrl = window.location.href.split('#')[0];
      const shareableLink = `${currentBaseUrl}#data=${base64Data}`;

      previewUrl.textContent = shareableLink;

      navigator.clipboard.writeText(shareableLink).then(() => {
        copyToast.textContent = 'Shareable link copied to clipboard!';
        copyToast.classList.add('show');
        setTimeout(() => copyToast.classList.remove('show'), 2000);
      });
    });
  }

  // Reset Demo / Sample
  if (demoBtn) {
    demoBtn.addEventListener('click', () => {
      if (nameInput) nameInput.value = 'Jordan Lee';
      if (roleInput) roleInput.value = 'Computer Science Student & Full-Stack Developer';
      if (bioInput) bioInput.value = 'Undergraduate computer science student passionate about distributed systems and modern web architecture.';
      if (statProjectsInput) statProjectsInput.value = '12+';
      if (statCommitsInput) statCommitsInput.value = '380+';
      if (statProblemsInput) statProblemsInput.value = '190+';
      if (emailInput) emailInput.value = 'jordan.lee@university.edu';
      if (phoneInput) phoneInput.value = '+91 98765 43210';
      if (skillsInput) skillsInput.value = 'Java, Python, C++, HTML5, CSS3, JavaScript, TypeScript, Git, SQL, Docker';
      document.querySelectorAll('input, textarea').forEach(el => el.dispatchEvent(new Event('input')));
      renderSkills();
    });
  }

  // HTML Export
  if (downloadHtmlBtn && portfolioWebsite && previewName) {
    downloadHtmlBtn.addEventListener('click', () => {
      let embeddedCSS = '';
      for (let sheet of document.styleSheets) {
        try { for (let rule of sheet.cssRules) embeddedCSS += rule.cssText + '\n'; } catch (e) {}
      }
      const exportHtml = `<!DOCTYPE html><html lang="en"><head><meta charset="UTF-8"><meta name="viewport" content="width=device-width, initial-scale=1.0"><title>${previewName.textContent} - Portfolio</title><link href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;600;700;800&display=swap" rel="stylesheet"><style>body{margin:0;background:#f1f4f9;display:flex;justify-content:center;padding:40px 10px;min-height:100vh;font-family:'Plus Jakarta Sans',sans-serif;}.browser-frame-liquid{width:100%;max-width:860px;border-radius:20px;border:1px solid #e2e8f0;background:#ffffff;overflow:hidden;}${embeddedCSS}</style></head><body><div class="browser-frame-liquid">${portfolioWebsite.outerHTML}</div></body></html>`;
      const blob = new Blob([exportHtml], { type: 'text/html' });
      const dl = document.createElement('a');
      dl.href = URL.createObjectURL(blob);
      dl.download = `${previewName.textContent.toLowerCase().replace(/\s+/g, '-')}-portfolio.html`;
      dl.click();
    });
  }

  renderProjectForms();
  renderPreviewProjects();
  renderSkills();
  
  // Page load hote hi agar URL me data hai toh load karo
  loadDataFromUrl();
  updateProgress();
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initPortfolify);
} else {
  initPortfolify();
}
