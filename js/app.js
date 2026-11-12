
// --- STATE MUTATORS & ROUTING ---
const savedState = JSON.parse(localStorage.getItem('unicrowd_state')) || {};
const state = {
  view: 'home',
  lang: savedState.lang || 'it',
  darkMode: savedState.darkMode || false,
  isMobileMenuOpen: false,
  selectedProjectId: null,
  exploreFilter: 'All',
  donationAmount: 10,
  checkoutMethod: 'guest',
  proposeStep: 1,
  proposeData: { title: '', budget: '' }
};

function saveState() {
  localStorage.setItem('unicrowd_state', JSON.stringify({
    lang: state.lang,
    darkMode: state.darkMode
  }));
}

const PAGE_MAP = {
  'home': 'index.html',
  'explore': 'explore.html',
  'how-it-works': 'how-it-works.html',
  'propose': 'propose.html',
  'faq': 'faq.html',
  'privacy': 'privacy.html',
  'project-detail': 'project.html',
  'checkout': 'checkout.html',
  'success': 'success.html'
};

function initApp(view) {
  state.view = view;
  const urlParams = new URLSearchParams(window.location.search);
  if (urlParams.has('id')) state.selectedProjectId = urlParams.get('id');
  if (urlParams.has('amount')) state.donationAmount = parseInt(urlParams.get('amount'));
  
  if (state.darkMode) {
    document.documentElement.classList.add('dark');
  } else {
    document.documentElement.classList.remove('dark');
  }
  
  renderApp();
}

function setView(newView) {
  window.location.href = PAGE_MAP[newView];
}

function setLang(newLang) {
  state.lang = newLang;
  saveState();
  renderApp();
}

function toggleDarkMode() {
  state.darkMode = !state.darkMode;
  saveState();
  if (state.darkMode) {
    document.documentElement.classList.add('dark');
  } else {
    document.documentElement.classList.remove('dark');
  }
  renderApp();
}

function toggleMobileMenu() {
  state.isMobileMenuOpen = !state.isMobileMenuOpen;
  renderHeader();
}

function openProjectDetail(id) {
  window.location.href = `project.html?id=${id}`;
}

function openCheckout(id, amount) {
  let url = `checkout.html?amount=${amount}`;
  if (id) url += `&id=${id}`;
  window.location.href = url;
}

function setExploreFilter(filter) {
  state.exploreFilter = filter;
  renderMain();
}

function setCheckoutMethod(method) {
  state.checkoutMethod = method;
  renderMain();
}

function setProposeStep(step) {
  state.proposeStep = step;
  renderMain();
}

function updateProposeField(field, val) {
  state.proposeData[field] = val;
}

function copyIban() {
  const iban = 'IT99 U012 3401 0000 0001 2345 678';
  if (navigator.clipboard) {
    navigator.clipboard.writeText(iban);
  }
}

// --- RENDER HELPERS ---
    function getNavLabel(v) {
      if (v === 'how-it-works') return T.nav.howItWorks[state.lang];
      return T.nav[v] ? T.nav[v][state.lang] : v;
    }

    function renderHeader() {
      const navItems = ['home', 'explore', 'how-it-works', 'propose', 'faq', 'privacy'];
      const desktopButtons = navItems.map(v => `
        <button onclick="setView('${v}')" class="nav-btn ${state.view === v ? 'active' : ''}">
          ${getNavLabel(v)}
        </button>
      `).join('');

      const mobileDropdown = state.isMobileMenuOpen ? `
        <div class="mobile-nav">
          ${navItems.map(v => `
            <button onclick="setView('${v}')" class="mobile-nav-btn ${state.view === v ? 'active' : ''}">
              ${getNavLabel(v)}
            </button>
          `).join('')}
        </div>
      ` : '';

      document.getElementById('header-root').innerHTML = `
        <div class="container">
          <div class="header-inner">
            <div class="logo-group" onclick="setView('home')">
              <div class="logo-box">
                <span class="font-serif">U</span>
              </div>
              <div class="logo-text">
                <span class="logo-title">Uni<span>Crowd</span></span>
                <span class="logo-sub">${state.lang === 'it' ? 'Ateneo Iniziative' : 'University Initiatives'}</span>
              </div>
            </div>

            <nav class="desktop-nav">
              ${desktopButtons}
            </nav>

            <div class="header-controls">
              <div class="lang-toggle">
                <button onclick="setLang('it')" class="lang-btn ${state.lang === 'it' ? 'active' : ''}">IT</button>
                <button onclick="setLang('en')" class="lang-btn ${state.lang === 'en' ? 'active' : ''}">EN</button>
              </div>
              <button onclick="toggleDarkMode()" class="theme-btn" aria-label="Toggle Theme">
                ${state.darkMode ? ICONS.sun : ICONS.moon}
              </button>
              <button onclick="toggleMobileMenu()" class="mobile-menu-btn" aria-label="Menu">
                ${state.isMobileMenuOpen ? ICONS.x : ICONS.menu}
              </button>
            </div>
          </div>
        </div>
        ${mobileDropdown}
      `;
    }

    function renderProjectCardHTML(p) {
      const percent = Math.min(100, Math.round((p.raised / p.goal) * 100));
      return `
        <div class="project-card">
          <div class="card-img-wrap">
            <img src="${p.bannerImg}" alt="Banner" />
            <div class="card-badge">
              ${p.icon}
              <span>${p.category[state.lang]}</span>
            </div>
          </div>
          <div class="card-body">
            <h3 onclick="openProjectDetail('${p.id}')" class="card-title">${p.title[state.lang]}</h3>
            <p class="card-desc">${p.shortDesc[state.lang]}</p>
            <div class="card-progress-area">
              <div class="card-progress-labels">
                <span class="card-raised">€ ${p.raised.toLocaleString()}</span>
                <span class="card-percent">${percent}%</span>
              </div>
              <div class="progress-track">
                <div class="progress-fill" style="width: ${percent}%"></div>
              </div>
            </div>
          </div>
          <div class="card-footer">
            <button onclick="openProjectDetail('${p.id}')" class="btn-card-outline">
              ${T.explore.btnDetails[state.lang]}
            </button>
            <button onclick="openCheckout('${p.id}', 10)" class="btn-card-solid">
              ${T.explore.btnDonate[state.lang]}
            </button>
          </div>
        </div>
      `;
    }

    function renderHomeView() {
      return `
        <div class="fade-in">
          <section class="hero-section">
            <div class="hero-bg-overlay"></div>
            <div class="container hero-content">
              <div class="hero-badge">
                ${ICONS.award}
                <span>${T.hero.badge[state.lang]}</span>
              </div>
              <h1 class="hero-title font-serif">${T.hero.title[state.lang]}</h1>
              <p class="hero-subtitle">${T.hero.subtitle[state.lang]}</p>
              <div class="hero-actions">
                <button onclick="setView('explore')" class="btn-hero-primary">
                  ${ICONS.search}
                  <span>${T.hero.btnExplore[state.lang]}</span>
                </button>
                <button onclick="setView('propose')" class="btn-hero-secondary">
                  ${ICONS.rocket}
                  <span>${T.hero.btnPropose[state.lang]}</span>
                </button>
              </div>
            </div>
          </section>

          <section class="stats-section">
            <div class="container">
              <div class="stats-grid">
                <div class="stat-item">
                  <span class="stat-value">€ 142k+</span>
                  <span class="stat-label">${T.stats.raised[state.lang]}</span>
                </div>
                <div class="stat-item">
                  <span class="stat-value">18</span>
                  <span class="stat-label">${T.stats.projects[state.lang]}</span>
                </div>
                <div class="stat-item">
                  <span class="stat-value">1.2k</span>
                  <span class="stat-label">${T.stats.donors[state.lang]}</span>
                </div>
                <div class="stat-item">
                  <span class="stat-value emerald">100%</span>
                  <span class="stat-label">${T.stats.transparency[state.lang]}</span>
                </div>
              </div>
            </div>
          </section>

          <section class="section-pad">
            <div class="container">
              <div class="section-header-row">
                <h2 class="section-title font-serif">Trend sul Campus</h2>
                <button onclick="setView('explore')" class="link-all">
                  <span>Vedi Tutti</span>
                  ${ICONS.arrowRight}
                </button>
              </div>
              <div class="projects-grid cols-3">
                ${PROJECTS_DATA.slice(0, 3).map(p => renderProjectCardHTML(p)).join('')}
              </div>
            </div>
          </section>
        </div>
      `;
    }

    function renderExploreView() {
      const categories = ['All', 'Vita Studentesca', 'Sport Universitario', 'Impatto Locale', 'Tecnologia & Ricerca'];
      const categoriesEN = ['All', 'Campus Life', 'University Sports', 'Local Community', 'Tech & Research'];

      const filteredProjects = state.exploreFilter === 'All'
        ? PROJECTS_DATA
        : PROJECTS_DATA.filter(p => p.category.it === state.exploreFilter || p.category.en === state.exploreFilter);

      const filterBtns = categories.map((cat, idx) => {
        const label = state.lang === 'it' ? cat : categoriesEN[idx];
        const filterVal = cat === 'All' ? 'All' : label;
        const isActive = state.exploreFilter === filterVal;
        return `
          <button onclick="setExploreFilter('${filterVal.replace(/'/g, "\'")}')" class="filter-btn ${isActive ? 'active' : ''}">
            ${label}
          </button>
        `;
      }).join('');

      return `
        <div class="view-pad fade-in">
          <div class="container">
            <div class="explore-header">
              <div>
                <h1 class="section-title font-serif" style="margin-bottom:0.5rem">${T.explore.title[state.lang]}</h1>
                <p style="color:var(--text-muted);font-size:0.875rem">Filtra per tematica e scopri le idee della nostra università.</p>
              </div>
              <div class="filter-list">
                ${filterBtns}
              </div>
            </div>
            <div class="projects-grid">
              ${filteredProjects.map(p => renderProjectCardHTML(p)).join('')}
            </div>
          </div>
        </div>
      `;
    }

    function renderProjectDetailView() {
      const project = PROJECTS_DATA.find(p => p.id === state.selectedProjectId) || PROJECTS_DATA[0];
      const percent = Math.min(100, Math.round((project.raised / project.goal) * 100));

      return `
        <div class="view-pad fade-in">
          <div class="container">
            <button onclick="setView('explore')" class="back-btn">
              ${ICONS.chevronLeft}
              <span>${state.lang === 'it' ? 'Torna ai progetti' : 'Back to projects'}</span>
            </button>

            <div class="detail-grid">
              <div>
                <div class="detail-hero">
                  <img src="${project.bannerImg}" alt="Project" />
                  <div class="verified-pill">
                    ${ICONS.shieldCheck}
                    <span>${T.projectDetail.verified[state.lang]}</span>
                  </div>
                </div>

                <div class="panel-card">
                  <div class="tag-row">
                    <span class="tag-chip">${project.category[state.lang]}</span>
                    ${project.tags.map(t => `<span class="tag-chip">${t}</span>`).join('')}
                  </div>

                  <h1 class="detail-title font-serif">${project.title[state.lang]}</h1>
                  <p class="detail-desc">${project.fullDesc[state.lang]}</p>

                  <h3 class="sub-heading">
                    ${ICONS.dollarSign}
                    <span>${T.projectDetail.budgetTitle[state.lang]}</span>
                  </h3>
                  <div class="budget-box">
                    <div class="budget-bar">
                      ${project.budgetBreakdown.map(item => `
                        <div class="${item.color}" style="width: ${item.percentage}%"></div>
                      `).join('')}
                    </div>
                    <ul class="budget-legend">
                      ${project.budgetBreakdown.map(item => `
                        <li class="legend-item">
                          <span class="legend-dot ${item.color}"></span>
                          <span>${item.name[state.lang]} <span style="opacity:0.6;font-weight:400">(${item.percentage}%)</span></span>
                        </li>
                      `).join('')}
                    </ul>
                  </div>

                  <h3 class="sub-heading">
                    <span style="color:var(--primary);display:flex">${ICONS.users}</span>
                    <span>${T.projectDetail.teamTitle[state.lang]}</span>
                  </h3>
                  <div>
                    ${project.team.map(t => `
                      <div class="team-card">
                        <div class="team-avatar">${ICONS.users}</div>
                        <div>
                          <p style="font-weight:700;font-size:0.875rem">${t.name}</p>
                          <p style="font-size:0.75rem;color:var(--text-muted)">${t.role[state.lang]}</p>
                        </div>
                      </div>
                    `).join('')}
                  </div>
                </div>
              </div>

              <div class="sidebar-col">
                <div class="status-card">
                  <div style="margin-bottom:1.5rem">
                    <div class="status-amount">€ ${project.raised.toLocaleString()}</div>
                    <div style="font-size:0.875rem;color:var(--text-muted);font-weight:500">
                      ${T.projectDetail.raisedStr[state.lang]} € ${project.goal.toLocaleString()}
                    </div>
                  </div>

                  <div class="progress-track">
                    <div class="progress-fill" style="width: ${percent}%"></div>
                  </div>

                  <div class="status-metrics">
                    <div class="metric-col">
                      <span class="metric-val">${project.backers}</span>
                      <span class="metric-lbl">${T.projectDetail.donorsStr[state.lang]}</span>
                    </div>
                    <div class="metric-col">
                      <span class="metric-val">${percent}%</span>
                      <span class="metric-lbl">Target</span>
                    </div>
                    <div class="metric-col">
                      <span class="metric-val">${project.daysLeft}</span>
                      <span class="metric-lbl">${T.projectDetail.daysLeftStr[state.lang]}</span>
                    </div>
                  </div>

                  <button onclick="openCheckout('${project.id}', 10)" class="btn-donate-main">
                    ${T.explore.btnDonate[state.lang]}
                  </button>

                  <div style="text-align:center">
                    <span style="font-size:0.75rem;font-weight:700;color:var(--text-muted);display:block;margin-bottom:0.5rem;text-transform:uppercase">
                      ${T.projectDetail.quickDonate[state.lang]}
                    </span>
                    <div class="quick-donate-row">
                      ${[5, 10, 25, 50].map(amt => `
                        <button onclick="openCheckout('${project.id}', ${amt})" class="quick-amt-btn">€${amt}</button>
                      `).join('')}
                    </div>
                  </div>
                </div>

                <div class="b2b-box">
                  <div>
                    <h4 style="font-weight:700;font-size:0.875rem;color:var(--stat-num)">${T.projectDetail.downloadB2B[state.lang]}</h4>
                    <p style="font-size:0.75rem;color:var(--text-muted)">PDF Report & ESG Info</p>
                  </div>
                  <div class="b2b-icon">${ICONS.download}</div>
                </div>

                <h3 style="font-size:1.125rem;font-weight:700;padding-top:0.5rem">${T.projectDetail.rewardsTitle[state.lang]}</h3>
                <div style="display:flex;flex-direction:column;gap:0.85rem">
                  ${project.rewards.map(r => `
                    <button type="button" onclick="openCheckout('${project.id}', ${r.amount})" class="reward-card">
                      <div class="reward-left">
                        <div class="reward-price-badge">€ ${r.amount}</div>
                        <div class="reward-info">
                          <span class="reward-tier-label">${state.lang === 'it' ? 'Ricompensa Inclusa' : 'Reward Included'}</span>
                          <h4 class="reward-title">${r.title[state.lang]}</h4>
                        </div>
                      </div>
                      <div class="reward-cta">
                        ${ICONS.arrowRight}
                      </div>
                    </button>
                  `).join('')}
                </div>
              </div>
            </div>
          </div>
        </div>
      `;
    }

    function renderCheckoutView() {
      const project = PROJECTS_DATA.find(p => p.id === state.selectedProjectId) || PROJECTS_DATA[0];

      let methodFormHTML = '';
      if (state.checkoutMethod === 'guest') {
        methodFormHTML = `
          <div class="fade-in">
            <div class="form-group">
              <label class="form-label">${T.checkout.emailLabel[state.lang]} *</label>
              <input type="email" class="form-input" placeholder="email@example.com" />
            </div>
            <button onclick="setView('success')" class="btn-submit-wallet">
              ${ICONS.smartphone}
              <span>${T.checkout.btnConfirmWallet[state.lang]}</span>
            </button>
          </div>
        `;
      } else if (state.checkoutMethod === 'bank') {
        methodFormHTML = `
          <div class="fade-in" style="background-color:var(--bg-subtle);padding:1.5rem;border-radius:1rem;border:1px solid var(--border-color)">
            <p style="font-size:0.875rem;font-weight:600">${T.checkout.bankInstructions[state.lang]}</p>
            <div class="iban-box">
              <span class="font-mono" style="font-weight:700;font-size:0.875rem;letter-spacing:0.08em;color:var(--stat-num)">
                IT99 U012 3401 0000 0001 2345 678
              </span>
              <button onclick="copyIban()" style="padding:0.5rem;border-radius:0.5rem;color:var(--text-muted)" title="${T.checkout.copyIban[state.lang]}">
                ${ICONS.copy}
              </button>
            </div>
            <div class="form-group">
              <span class="form-label">${T.checkout.causalLabel[state.lang]}</span>
              <span class="font-mono" style="font-size:0.875rem;display:block;padding:0.75rem;background-color:var(--bg-card);border:1px solid var(--border-color);border-radius:0.75rem">
                DONAZIONE PROGETTO ${project.id.toUpperCase()}
              </span>
            </div>
            <button onclick="setView('success')" class="btn-donate-main" style="margin-top:1rem;margin-bottom:0">
              ${T.checkout.btnConfirmBank[state.lang]}
            </button>
          </div>
        `;
      } else if (state.checkoutMethod === 'b2b') {
        methodFormHTML = `
          <div class="fade-in">
            <p style="font-size:0.75rem;color:var(--text-muted);margin-bottom:1rem">${T.checkout.b2bInstructions[state.lang]}</p>
            <div class="form-group">
              <label class="form-label">${T.checkout.companyName[state.lang]} *</label>
              <input type="text" class="form-input" />
            </div>
            <div style="display:grid;grid-template-columns:1fr 1fr;gap:1rem">
              <div class="form-group">
                <label class="form-label">${T.checkout.vatNumber[state.lang]} *</label>
                <input type="text" class="form-input" />
              </div>
              <div class="form-group">
                <label class="form-label">PEC Email *</label>
                <input type="email" class="form-input" />
              </div>
            </div>
            <button onclick="setView('success')" class="btn-donate-main" style="background-color:var(--purple);margin-top:0.5rem;margin-bottom:0">
              ${T.checkout.btnConfirmB2B[state.lang]}
            </button>
          </div>
        `;
      }

      return `
        <div class="view-pad fade-in">
          <div class="container-sm">
            <div class="panel-card" style="box-shadow:var(--shadow-xl)">
              <button onclick="setView('project-detail')" class="back-btn">
                ${ICONS.chevronLeft}
                <span>Indietro</span>
              </button>

              <h1 class="font-serif" style="font-size:1.5rem;font-weight:700;margin-bottom:1.5rem;padding-bottom:1rem;border-bottom:1px solid var(--border-color)">
                ${T.checkout.title[state.lang]}
              </h1>

              <div class="checkout-summary">
                <div>
                  <p style="font-size:0.75rem;color:var(--text-muted);font-weight:700;text-transform:uppercase">${project.title[state.lang]}</p>
                  <p style="font-weight:700">${T.checkout.amount[state.lang]}</p>
                </div>
                <div style="font-size:1.875rem;font-weight:800;color:var(--stat-num)">€ ${state.donationAmount}</div>
              </div>

              <h3 style="font-size:0.75rem;font-weight:700;text-transform:uppercase;color:var(--text-muted);margin-bottom:0.75rem">
                ${T.checkout.selectMethod[state.lang]}
              </h3>

              <div class="method-grid">
                <button onclick="setCheckoutMethod('guest')" class="method-btn ${state.checkoutMethod === 'guest' ? 'active-guest' : ''}">
                  <span style="color:var(--stat-num);margin-bottom:0.5rem;display:flex">${ICONS.smartphone}</span>
                  <span style="font-weight:700;font-size:0.875rem">${T.checkout.methodGuest[state.lang]}</span>
                  <span style="font-size:10px;color:var(--text-muted)">${T.checkout.methodGuestSub[state.lang]}</span>
                </button>
                <button onclick="setCheckoutMethod('bank')" class="method-btn ${state.checkoutMethod === 'bank' ? 'active-bank' : ''}">
                  <span style="margin-bottom:0.5rem;display:flex">${ICONS.landmark}</span>
                  <span style="font-weight:700;font-size:0.875rem">${T.checkout.methodBank[state.lang]}</span>
                  <span style="font-size:10px;color:var(--text-muted)">${T.checkout.methodBankSub[state.lang]}</span>
                </button>
                <button onclick="setCheckoutMethod('b2b')" class="method-btn ${state.checkoutMethod === 'b2b' ? 'active-b2b' : ''}">
                  <span style="margin-bottom:0.5rem;display:flex">${ICONS.building2}</span>
                  <span style="font-weight:700;font-size:0.875rem">${T.checkout.methodB2B[state.lang]}</span>
                  <span style="font-size:10px;color:var(--text-muted)">${T.checkout.methodB2BSub[state.lang]}</span>
                </button>
              </div>

              ${methodFormHTML}
            </div>
          </div>
        </div>
      `;
    }

    function renderSuccessView() {
      return `
        <div class="view-pad fade-in" style="display:flex;justify-content:center;align-items:center">
          <div style="max-width:28rem;width:100%;padding:0 1rem;text-align:center">
            <div style="width:6rem;height:6rem;background-color:rgba(16, 185, 129, 0.15);color:var(--emerald);border-radius:9999px;display:flex;align-items:center;justify-content:center;margin:0 auto 1.5rem">
              ${ICONS.checkCircle}
            </div>
            <h1 class="font-serif" style="font-size:1.875rem;font-weight:800;margin-bottom:1rem">${T.success.title[state.lang]}</h1>
            <p style="color:var(--text-muted);margin-bottom:2rem;line-height:1.65">${T.success.desc[state.lang]}</p>
            <div style="display:flex;flex-direction:column;gap:0.75rem">
              <button class="btn-donate-main" style="display:flex;justify-content:center;align-items:center;gap:0.5rem;margin-bottom:0">
                ${ICONS.share2}
                <span>${T.success.shareBtn[state.lang]}</span>
              </button>
              <button onclick="setView('home')" class="btn-card-outline" style="padding:1rem;font-size:0.95rem">
                ${T.success.homeBtn[state.lang]}
              </button>
            </div>
          </div>
        </div>
      `;
    }

    function renderHowItWorksView() {
      return `
        <div class="view-pad fade-in">
          <div class="container-md">
            <h1 class="section-title font-serif" style="text-align:center;margin-bottom:3rem">
              ${T.howItWorks.title[state.lang]}
            </h1>
            <div class="steps-wrapper">
              ${T.howItWorks.steps.map((step, idx) => `
                <div class="step-card">
                  <div class="step-num">${idx + 1}</div>
                  <div style="padding-top:0.25rem">
                    <h3 style="font-size:1.25rem;font-weight:700;margin-bottom:0.5rem">${step.title[state.lang]}</h3>
                    <p style="color:var(--text-muted);line-height:1.65">${step.desc[state.lang]}</p>
                  </div>
                </div>
              `).join('')}
            </div>
          </div>
        </div>
      `;
    }

    function renderProposeView() {
      let stepBody = '';
      if (state.proposeStep === 1) {
        stepBody = `
          <div class="fade-in">
            <h3 style="font-size:1.125rem;font-weight:700;margin-bottom:1rem">${T.propose.step1[state.lang]}</h3>
            <div class="form-group">
              <label class="form-label">${T.propose.projTitle[state.lang]} *</label>
              <input type="text" value="${state.proposeData.title}" oninput="updateProposeField('title', this.value)" class="form-input" />
            </div>
            <div class="form-group">
              <label class="form-label">Categoria *</label>
              <select class="form-input">
                <option>Vita Studentesca</option>
                <option>Sport Universitario</option>
                <option>Ricerca</option>
              </select>
            </div>
          </div>
        `;
      } else if (state.proposeStep === 2) {
        stepBody = `
          <div class="fade-in">
            <h3 style="font-size:1.125rem;font-weight:700;margin-bottom:1rem">${T.propose.step2[state.lang]}</h3>
            <div class="form-group">
              <label class="form-label">${T.propose.budgetReq[state.lang]} *</label>
              <input type="number" value="${state.proposeData.budget}" oninput="updateProposeField('budget', this.value)" class="form-input" />
            </div>
            <div style="padding:1rem;background-color:rgba(59, 130, 246, 0.08);border-radius:0.75rem;border:1px solid var(--border-color);font-size:0.875rem;display:flex;align-items:flex-start;gap:0.75rem;margin-top:1rem">
              ${ICONS.info}
              <p style="color:var(--text-secondary)">
                ${state.lang === 'it' ? 'I progetti approvati godono del co-finanziamento di Ateneo: raddoppiamo quanto raccogli!' : 'Approved projects enjoy University co-funding: we double what you raise!'}
              </p>
            </div>
          </div>
        `;
      } else {
        stepBody = `
          <div class="fade-in" style="text-align:center;padding:1.5rem 0">
            <div style="width:4rem;height:4rem;background-color:rgba(31, 87, 118, 0.12);color:var(--stat-num);border-radius:9999px;display:flex;align-items:center;justify-content:center;margin:0 auto 1rem">
              ${ICONS.checkCircle}
            </div>
            <h3 style="font-size:1.25rem;font-weight:700;margin-bottom:0.5rem">${T.propose.step3[state.lang]}</h3>
            <p style="color:var(--text-muted);font-size:0.875rem;max-width:24rem;margin:0 auto">
              ${state.lang === 'it' ? 'Il tuo progetto verrà analizzato dalla commissione universitaria entro 10 giorni lavorativi.' : 'Your project will be reviewed by the university committee within 10 business days.'}
            </p>
          </div>
        `;
      }

      return `
        <div class="view-pad fade-in">
          <div class="container-sm">
            <div class="panel-card" style="box-shadow:var(--shadow-xl)">
              <div style="text-align:center;margin-bottom:2rem">
                <h1 class="font-serif" style="font-size:1.875rem;font-weight:700;margin-bottom:0.5rem">${T.propose.title[state.lang]}</h1>
                <p style="color:var(--text-muted)">${T.propose.subtitle[state.lang]}</p>
              </div>

              <div class="stepper-bars">
                ${[1, 2, 3].map(step => `
                  <div class="stepper-bar ${state.proposeStep >= step ? 'active' : ''}"></div>
                `).join('')}
              </div>

              <div style="min-height:220px">
                ${stepBody}
              </div>

              <div style="display:flex;justify-content:space-between;margin-top:2rem;padding-top:1.5rem;border-top:1px solid var(--border-color)">
                ${state.proposeStep > 1 ? `
                  <button onclick="setProposeStep(${state.proposeStep - 1})" class="btn-card-outline" style="flex:0 0 auto;padding:0.65rem 1.5rem;font-size:0.875rem">
                    ${T.propose.btnBack[state.lang]}
                  </button>
                ` : '<div></div>'}

                ${state.proposeStep < 3 ? `
                  <button onclick="setProposeStep(${state.proposeStep + 1})" class="btn-card-solid" style="flex:0 0 auto;padding:0.65rem 1.5rem;font-size:0.875rem">
                    ${T.propose.btnNext[state.lang]}
                  </button>
                ` : `
                  <button onclick="setView('home')" class="btn-card-solid" style="flex:0 0 auto;padding:0.65rem 1.5rem;font-size:0.875rem;background-color:var(--accent)">
                    ${T.propose.btnSubmit[state.lang]}
                  </button>
                `}
              </div>
            </div>
          </div>
        </div>
      `;
    }

    function renderFAQView() {
      return `
        <div class="view-pad fade-in">
          <div class="container-md">
            <div style="display:flex;align-items:center;gap:0.75rem;margin-bottom:2.5rem;color:var(--stat-num)">
              ${ICONS.helpCircle}
              <h1 class="font-serif" style="font-size:1.875rem;font-weight:700">${T.faq.title[state.lang]}</h1>
            </div>
            <div style="display:flex;flex-direction:column;gap:1.5rem">
              ${[1, 2, 3, 4].map(num => `
                <div class="panel-card">
                  <h3 style="font-size:1.125rem;font-weight:700;margin-bottom:0.75rem;color:var(--stat-num)">${T.faq['q' + num][state.lang]}</h3>
                  <p style="color:var(--text-muted);line-height:1.65">${T.faq['a' + num][state.lang]}</p>
                </div>
              `).join('')}
            </div>
          </div>
        </div>
      `;
    }

    function renderPrivacyView() {
      return `
        <div class="view-pad fade-in">
          <div class="container-md">
            <div style="display:flex;align-items:center;gap:0.75rem;margin-bottom:2.5rem;color:var(--stat-num)">
              ${ICONS.shieldCheckLg}
              <h1 class="font-serif" style="font-size:1.875rem;font-weight:700">${T.privacy.title[state.lang]}</h1>
            </div>
            <div class="panel-card" style="display:flex;flex-direction:column;gap:2rem">
              <section>
                <h3 style="font-size:1.125rem;font-weight:700;margin-bottom:0.75rem;padding-bottom:0.5rem;border-bottom:1px solid var(--border-color)">1. Data Protection & GDPR</h3>
                <p style="color:var(--text-muted);line-height:1.65">${T.privacy.p1[state.lang]}</p>
              </section>
              <section>
                <h3 style="font-size:1.125rem;font-weight:700;margin-bottom:0.75rem;padding-bottom:0.5rem;border-bottom:1px solid var(--border-color)">2. Fund Transparency</h3>
                <p style="color:var(--text-muted);line-height:1.65">${T.privacy.p2[state.lang]}</p>
              </section>
            </div>
          </div>
        </div>
      `;
    }

    function renderFooter() {
      document.getElementById('footer-root').innerHTML = `
        <div class="container footer-grid">
          <div>
            <span class="font-serif" style="display:block;font-weight:700;color:#ffffff;font-size:1.25rem;margin-bottom:0.75rem">University Crowdfunding</span>
            <p style="font-size:0.875rem;opacity:0.8;line-height:1.65;max-width:24rem">
              ${state.lang === 'it' 
                ? 'Piattaforma ufficiale di raccolta fondi per sostenere la ricerca, la vita studentesca e lo sviluppo del territorio.' 
                : 'Official fundraising platform to support research, student life, and community development.'}
            </p>
          </div>
          <div>
            <h4 class="footer-heading">Navigazione</h4>
            <ul class="footer-links">
              <li><button onclick="setView('home')">${T.nav.home[state.lang]}</button></li>
              <li><button onclick="setView('explore')">${T.nav.explore[state.lang]}</button></li>
              <li><button onclick="setView('faq')">${T.nav.faq[state.lang]}</button></li>
              <li><button onclick="setView('privacy')">${T.nav.privacy[state.lang]}</button></li>
            </ul>
          </div>
          <div>
            <h4 class="footer-heading">Supporto</h4>
            <p style="font-size:0.875rem;opacity:0.8;margin-bottom:0.5rem">Email: info.crowd@university.edu</p>
            <div style="font-size:0.75rem;opacity:0.6;margin-top:1.5rem">
              <span>&copy; 2026 University Foundation</span>
            </div>
          </div>
        </div>
      `;
    }

    function renderMain() {
      const mainEl = document.getElementById('main-root');
      switch (state.view) {
        case 'home': mainEl.innerHTML = renderHomeView(); break;
        case 'explore': mainEl.innerHTML = renderExploreView(); break;
        case 'project-detail': mainEl.innerHTML = renderProjectDetailView(); break;
        case 'checkout': mainEl.innerHTML = renderCheckoutView(); break;
        case 'success': mainEl.innerHTML = renderSuccessView(); break;
        case 'how-it-works': mainEl.innerHTML = renderHowItWorksView(); break;
        case 'propose': mainEl.innerHTML = renderProposeView(); break;
        case 'faq': mainEl.innerHTML = renderFAQView(); break;
        case 'privacy': mainEl.innerHTML = renderPrivacyView(); break;
        default: mainEl.innerHTML = renderHomeView();
      }
    }

    function renderApp() {
      renderHeader();
      renderMain();
      renderFooter();
    }

    