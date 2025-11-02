// Data
const riskLevels = [
  {
    name: "Unacceptable Risk",
    status: "BANNED",
    color: "#DC2626",
    icon: "🚫",
    description: "Prohibited since February 2, 2025",
    examples: [
      "Social scoring systems",
      "Subliminal manipulation techniques",
      "Mass facial recognition scraping",
      "Emotion recognition in workplace/education",
      "Biometric categorization of sensitive attributes",
      "Criminal profiling by personality alone",
      "Exploitation of vulnerabilities",
      "Real-time public biometric ID (limited exceptions)"
    ],
    requirements: ["Complete prohibition - cannot be deployed"],
    deadline: "Already in effect (Feb 2, 2025)",
    penalty: "€35M or 7% of global revenue",
    sme_impact: "NO DEVELOPMENT ALLOWED. Severe penalties regardless of company size. Scaled fines for SMEs (€1-3M typical).",
    allowed: false
  },
  {
    name: "High-Risk AI Systems",
    status: "HIGHLY REGULATED",
    color: "#F59E0B",
    icon: "⚠️",
    description: "Strict requirements before market deployment",
    examples: [
      "Medical device diagnostics",
      "Credit scoring and lending decisions",
      "Recruitment and HR AI systems",
      "Educational assessment and admission",
      "Law enforcement risk assessment",
      "Border control and migration systems",
      "Critical infrastructure control",
      "Insurance underwriting",
      "Emergency service dispatch",
      "Legal decision support systems"
    ],
    requirements: [
      "Risk management systems",
      "High-quality data governance",
      "Technical documentation",
      "Human oversight mechanisms",
      "Transparency and explainability",
      "Robustness testing",
      "Cybersecurity protections",
      "Pre-market conformity assessment",
      "Registration with authorities",
      "Continuous monitoring"
    ],
    deadline: "August 2, 2026",
    penalty: "€15M or 3% of global revenue",
    sme_impact: "SME-FRIENDLY PROVISIONS: Regulatory sandboxes, reduced fees, simplified documentation, priority support. Compliance required before market entry.",
    allowed: true
  },
  {
    name: "Limited-Risk AI",
    status: "TRANSPARENCY REQUIRED",
    color: "#EAB308",
    icon: "ℹ️",
    description: "Basic transparency obligations",
    examples: [
      "Chatbots (ChatGPT, Claude)",
      "Content generators (text, image, video)",
      "AI deepfakes and synthetic media",
      "Facial filters and recognition apps",
      "Recommendation systems",
      "Customer service bots",
      "General-purpose AI models"
    ],
    requirements: [
      "User disclosure (inform users it's AI)",
      "Synthetic content labeling",
      "Copyright compliance",
      "Training data transparency (GPAI)",
      "Model card documentation",
      "Cybersecurity measures"
    ],
    deadline: "August 2, 2025 (already in effect)",
    penalty: "€7.5M or 1% of global revenue",
    sme_impact: "STARTUP-FRIENDLY: Low compliance burden. Most generative AI startups fit here. Straightforward implementation, fast market entry.",
    allowed: true
  },
  {
    name: "Minimal/No Risk",
    status: "MOSTLY UNREGULATED",
    color: "#10B981",
    icon: "✓",
    description: "No specific regulatory requirements",
    examples: [
      "Spam filters",
      "Video game AI",
      "Basic recommendation engines",
      "Simple automation tools",
      "Data analysis systems",
      "Pattern recognition without decisions",
      "Predictive maintenance",
      "Document processing and OCR"
    ],
    requirements: [
      "Recommended: general best practices",
      "Optional: human oversight",
      "Optional: documentation"
    ],
    deadline: "N/A",
    penalty: "None",
    sme_impact: "MOST STARTUP-FRIENDLY: Zero compliance burden. Build and deploy freely. Focus on innovation.",
    allowed: true
  }
];

const gdprComparison = [
  {
    area: "Scope and Territorial Application",
    gdpr: "Applies to processing of personal data in EU or targeting EU residents",
    ai_act: "Applies to AI systems placed on EU market or affecting EU residents",
    overlap: "Both have extraterritorial reach beyond EU borders"
  },
  {
    area: "Data Governance",
    gdpr: "Data quality, accuracy, minimization, purpose limitation",
    ai_act: "High-quality training data, bias detection, representative datasets",
    overlap: "Both require high data quality and governance throughout lifecycle"
  },
  {
    area: "Transparency",
    gdpr: "Information about data processing to data subjects",
    ai_act: "Information about AI system capabilities, limitations, and decisions",
    overlap: "Both require clear communication to affected individuals"
  },
  {
    area: "Accountability",
    gdpr: "Documentation of processing activities, DPIAs, records",
    ai_act: "Technical documentation, risk assessments, conformity assessments",
    overlap: "Both require comprehensive documentation and proof of compliance"
  },
  {
    area: "Risk Assessments",
    gdpr: "Data Protection Impact Assessment (DPIA) for high-risk processing",
    ai_act: "Fundamental Rights Impact Assessment (FRIA) for high-risk AI",
    overlap: "Similar assessment frameworks - can be combined"
  },
  {
    area: "Human Oversight",
    gdpr: "Article 22 - right not to be subject to solely automated decisions",
    ai_act: "Human oversight requirements for high-risk AI systems",
    overlap: "Both require meaningful human involvement in critical decisions"
  }
];

const timeline = [
  {
    date: "February 2, 2025",
    title: "Prohibited Practices Ban",
    status: "COMPLETED",
    description: "Unacceptable risk AI practices banned. AI literacy obligations began.",
    actions: [
      "Verify no prohibited AI practices",
      "Eliminate social scoring, manipulation systems",
      "Begin AI literacy training"
    ]
  },
  {
    date: "August 2, 2025",
    title: "GPAI & Enforcement Active",
    status: "COMPLETED",
    description: "General-Purpose AI obligations apply. Enforcement powers activated.",
    actions: [
      "GPAI model providers: document and disclose training data",
      "Implement transparency for chatbots/content generators",
      "Label synthetic content"
    ]
  },
  {
    date: "August 2, 2026",
    title: "High-Risk AI Deadline",
    status: "UPCOMING",
    description: "Main deadline - High-risk AI systems must fully comply",
    actions: [
      "Complete risk assessments and documentation",
      "Conduct conformity assessments",
      "Register high-risk systems with authorities",
      "Implement human oversight mechanisms",
      "Begin continuous monitoring"
    ]
  },
  {
    date: "August 2, 2027",
    title: "Medical Devices Extension",
    status: "FUTURE",
    description: "Extended deadline for medical devices and safety-critical embedded AI",
    actions: [
      "Medical device AI: full compliance with MDR/IVDR + AI Act",
      "Notified Body assessments completed"
    ]
  }
];

const resources = [
  {
    title: "EU AI Act Official Portal",
    url: "https://digital-strategy.ec.europa.eu/en/policies/regulatory-framework-ai",
    description: "European Commission's central hub for AI Act information",
    type: "Official"
  },
  {
    title: "Implementation Documents",
    url: "https://artificialintelligenceact.eu/implementation-documents/",
    description: "Complete repository of guidelines, codes of practice, and standards",
    type: "Official"
  },
  {
    title: "European AI Office",
    url: "https://digital-strategy.ec.europa.eu/en/policies/ai-office",
    description: "EU-level regulator for GPAI models and enforcement coordination",
    type: "Official"
  },
  {
    title: "Guidelines on Prohibited Practices",
    url: null,
    description: "135-page document clarifying banned AI uses (February 2025)",
    type: "Guidance"
  },
  {
    title: "Guidelines on AI System Definition",
    url: null,
    description: "Helps determine if software qualifies as AI system (February 2025)",
    type: "Guidance"
  },
  {
    title: "GPAI Code of Practice",
    url: null,
    description: "Voluntary compliance framework for general-purpose AI (July 2025)",
    type: "Guidance"
  },
  {
    title: "EU AI Act Compliance Checker",
    url: "https://artificialintelligenceact.eu/assessment/eu-ai-act-compliance-checker/",
    description: "Interactive tool to classify your AI system",
    type: "Tool"
  }
];

const complianceQuestions = [
  {
    id: 1,
    question: "Does your AI system use subliminal manipulation, exploit vulnerabilities, or perform social scoring?",
    answers: [
      { text: "Yes", next: "result_prohibited" },
      { text: "No", next: 2 }
    ]
  },
  {
    id: 2,
    question: "Does your AI system make or significantly influence decisions about:",
    subtext: "Employment, credit/lending, education, law enforcement, healthcare, or access to essential services?",
    answers: [
      { text: "Yes", next: "result_high_risk" },
      { text: "No", next: 3 }
    ]
  },
  {
    id: 3,
    question: "Does your AI system use biometric identification, emotion recognition, or process sensitive personal data for critical decisions?",
    answers: [
      { text: "Yes", next: "result_high_risk" },
      { text: "No", next: 4 }
    ]
  },
  {
    id: 4,
    question: "Does your AI system interact with users (chatbot, content generator, virtual assistant)?",
    answers: [
      { text: "Yes", next: "result_limited_risk" },
      { text: "No", next: "result_minimal_risk" }
    ]
  }
];

const complianceResults = {
  result_prohibited: {
    risk_level: "Unacceptable Risk",
    classification: "PROHIBITED",
    color: "#DC2626",
    message: "Your AI system appears to fall under prohibited practices. You CANNOT develop or deploy this system.",
    requirements: [
      "Immediate cessation of development/deployment required",
      "Redesign system to eliminate prohibited features",
      "Consult legal expert immediately"
    ],
    penalty: "€35M or 7% global revenue",
    deadline: "Already in effect",
    gdpr_note: "GDPR compliance is irrelevant if system is prohibited"
  },
  result_high_risk: {
    risk_level: "High-Risk",
    classification: "ALLOWED with strict requirements",
    color: "#F59E0B",
    message: "Your AI system is classified as high-risk. Substantial compliance work required before market entry.",
    requirements: [
      "Implement risk management system",
      "Ensure high-quality, unbiased training data",
      "Create comprehensive technical documentation",
      "Design human oversight mechanisms",
      "Conduct pre-market conformity assessment",
      "Register with national authority",
      "Establish continuous monitoring"
    ],
    penalty: "€15M or 3% revenue for non-compliance",
    deadline: "August 2, 2026",
    cost_estimate: "€10,000 - €100,000+ (SME support available)",
    timeline_estimate: "6-12 months",
    gdpr_note: "If processing personal data, GDPR also applies. DPIAs required. Can leverage GDPR compliance for AI Act.",
    next_steps: [
      "Apply for regulatory sandbox access",
      "Engage AI Act compliance consultant",
      "Begin risk assessment documentation",
      "Review SME support programs"
    ]
  },
  result_limited_risk: {
    risk_level: "Limited-Risk",
    classification: "ALLOWED with transparency obligations",
    color: "#EAB308",
    message: "Your AI system has limited risk. Straightforward transparency requirements apply.",
    requirements: [
      "Inform users they're interacting with AI",
      "Label AI-generated content clearly",
      "Disclose training data sources (if GPAI)",
      "Provide model documentation",
      "Implement basic cybersecurity"
    ],
    penalty: "€7.5M or 1% revenue for non-compliance",
    deadline: "August 2, 2025 (already in effect)",
    cost_estimate: "€2,000 - €10,000",
    timeline_estimate: "1-3 months",
    gdpr_note: "If processing personal data, GDPR applies. Ensure lawful basis and data minimization.",
    next_steps: [
      "Implement user disclosure mechanisms",
      "Create content labeling system",
      "Document training data sources",
      "Review GDPR compliance if processing personal data"
    ]
  },
  result_minimal_risk: {
    risk_level: "Minimal/No Risk",
    classification: "ALLOWED - mostly unregulated",
    color: "#10B981",
    message: "Your AI system has minimal risk. No specific AI Act requirements apply.",
    requirements: [
      "Follow general best practices (recommended)",
      "Consider voluntary documentation",
      "Implement basic security measures"
    ],
    penalty: "None",
    deadline: "N/A",
    cost_estimate: "€0 - €2,000 (optional)",
    timeline_estimate: "Immediate deployment possible",
    gdpr_note: "If processing personal data, GDPR still applies. Ensure compliance with data protection rules.",
    next_steps: [
      "Focus on product development",
      "Implement voluntary best practices",
      "Monitor for future regulatory updates",
      "Ensure GDPR compliance if applicable"
    ]
  }
};

const faqData = [
  {
    question: "Do the EU AI Act and GDPR both apply to my AI system?",
    answer: "If your AI system processes personal data, both regulations apply simultaneously. The AI Act regulates the AI system itself (safety, fairness, transparency), while GDPR regulates how personal data is processed. Most AI systems process personal data at some point, so dual compliance is common."
  },
  {
    question: "Can I leverage existing GDPR compliance for the AI Act?",
    answer: "Yes! Many requirements overlap. Your DPIAs can extend to cover AI Act fundamental rights assessments, data governance practices satisfy both regulations, and documentation frameworks align significantly. Privacy by design principles support AI Act transparency and robustness requirements."
  },
  {
    question: "What's the difference between a DPIA (GDPR) and FRIA (AI Act)?",
    answer: "A Data Protection Impact Assessment (DPIA) under GDPR focuses on privacy risks from processing personal data. A Fundamental Rights Impact Assessment (FRIA) under the AI Act evaluates broader impacts on rights like non-discrimination, human dignity, and fairness. They can be combined into one assessment."
  },
  {
    question: "Are there special provisions for startups and SMEs?",
    answer: "Yes! The AI Act includes Article 55 provisions: priority access to regulatory sandboxes, reduced conformity assessment fees, simplified documentation, tailored guidance, and support programs. Fines are also proportional to company size."
  },
  {
    question: "What if my AI system doesn't process personal data - does GDPR still apply?",
    answer: "No, GDPR only applies when personal data is processed. However, the AI Act still applies based on your system's risk level. Even non-personal data AI systems must comply with AI Act requirements."
  },
  {
    question: "When should I start preparing for compliance?",
    answer: "Now! If you have high-risk AI, you need 6-12 months for compliance before the August 2026 deadline. Limited-risk AI requirements are already in effect as of August 2025. Start with classification, then begin documentation and risk assessments."
  }
];

// Initialize app
document.addEventListener('DOMContentLoaded', () => {
  initNavigation();
  initThemeToggle();
  initQuickActions();
  populateRiskFramework();
  populateCategories();
  populateGDPRComparison();
  populateTimeline();
  populateResources();
  initComplianceChecker();
  populateFAQ();
  initScrollEffects();
});

// Navigation
function initNavigation() {
  const navToggle = document.querySelector('.nav-toggle');
  const navMenu = document.querySelector('.nav-menu');
  
  navToggle?.addEventListener('click', () => {
    navMenu.classList.toggle('active');
  });

  // Smooth scroll
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute('href'));
      if (target) {
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
        navMenu.classList.remove('active');
      }
    });
  });
}

// Theme Toggle
function initThemeToggle() {
  const themeToggle = document.getElementById('theme-toggle');
  const html = document.documentElement;
  
  // Initialize theme from localStorage or system preference
  const savedTheme = localStorage.getItem('color-scheme');
  const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
  const initialTheme = savedTheme || (systemPrefersDark ? 'dark' : 'light');
  html.setAttribute('data-color-scheme', initialTheme);
  
  // Update icon visibility
  updateThemeIcon(initialTheme);
  
  themeToggle?.addEventListener('click', () => {
    const currentTheme = html.getAttribute('data-color-scheme');
    const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
    html.setAttribute('data-color-scheme', newTheme);
    localStorage.setItem('color-scheme', newTheme);
    updateThemeIcon(newTheme);
  });
  
  // Listen for system theme changes
  window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', (e) => {
    if (!localStorage.getItem('color-scheme')) {
      const newTheme = e.matches ? 'dark' : 'light';
      html.setAttribute('data-color-scheme', newTheme);
      updateThemeIcon(newTheme);
    }
  });
}

function updateThemeIcon(theme) {
  const sunIcon = document.querySelector('.sun-icon');
  const moonIcon = document.querySelector('.moon-icon');
  
  if (theme === 'dark') {
    sunIcon?.style.setProperty('display', 'block');
    moonIcon?.style.setProperty('display', 'none');
  } else {
    sunIcon?.style.setProperty('display', 'none');
    moonIcon?.style.setProperty('display', 'block');
  }
}

// Quick Actions
function initQuickActions() {
  const btn = document.getElementById('quick-actions-btn');
  const menu = document.getElementById('quick-actions-menu');
  const shareBtn = document.getElementById('share-btn');
  
  btn?.addEventListener('click', () => {
    menu.classList.toggle('active');
  });

  document.addEventListener('click', (e) => {
    if (!btn?.contains(e.target) && !menu?.contains(e.target)) {
      menu?.classList.remove('active');
    }
  });

  shareBtn?.addEventListener('click', async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: 'EU AI Act & GDPR Compliance Guide',
          text: 'Check out this comprehensive guide to EU AI Act compliance',
          url: window.location.href
        });
      } catch (err) {
        console.log('Share failed:', err);
      }
    } else {
      showToast('Link copied to clipboard!');
      navigator.clipboard.writeText(window.location.href);
    }
  });
}

// Populate Risk Framework
function populateRiskFramework() {
  const container = document.getElementById('risk-accordion');
  if (!container) return;

  container.innerHTML = riskLevels.map((risk, index) => `
    <div class="accordion-item" data-index="${index}">
      <div class="accordion-header">
        <div class="accordion-title">
          <span style="font-size: 32px;">${risk.icon}</span>
          <div>
            <div>${risk.name}</div>
            <small style="color: ${risk.color}; font-weight: 600;">${risk.status}</small>
          </div>
        </div>
        <svg class="accordion-icon" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
          <polyline points="6 9 12 15 18 9"></polyline>
        </svg>
      </div>
      <div class="accordion-content">
        <div class="accordion-body">
          <p><strong>${risk.description}</strong></p>
          
          <h4>Examples:</h4>
          <ul>
            ${risk.examples.map(ex => `<li>${ex}</li>`).join('')}
          </ul>
          
          <h4>Requirements:</h4>
          <ul>
            ${risk.requirements.map(req => `<li>${req}</li>`).join('')}
          </ul>
          
          <div class="deadline-box">
            <strong>Compliance Deadline:</strong> ${risk.deadline}
          </div>
          
          <div class="penalty-box">
            <strong>Penalty for Non-Compliance:</strong> ${risk.penalty}
          </div>
          
          <div class="sme-box">
            <strong>SME/Startup Implications:</strong><br>${risk.sme_impact}
          </div>
        </div>
      </div>
    </div>
  `).join('');

  // Add click handlers
  container.querySelectorAll('.accordion-header').forEach(header => {
    header.addEventListener('click', () => {
      const item = header.closest('.accordion-item');
      item.classList.toggle('active');
    });
  });
}

// Populate Categories
function populateCategories() {
  const container = document.getElementById('categories-container');
  if (!container) return;

  const categories = [
    {
      level: "Unacceptable Risk - PROHIBITED",
      color: "#DC2626",
      items: riskLevels[0].examples.map(ex => ({
        name: ex,
        allowed: false,
        description: "Prohibited AI practice",
        sme_note: "Cannot be developed or deployed"
      }))
    },
    {
      level: "High-Risk - Allowed with Requirements",
      color: "#F59E0B",
      items: riskLevels[1].examples.map(ex => ({
        name: ex,
        allowed: true,
        description: "Requires strict compliance before deployment",
        sme_note: "SME support available - regulatory sandboxes, reduced fees"
      }))
    },
    {
      level: "Limited-Risk - Transparency Required",
      color: "#EAB308",
      items: riskLevels[2].examples.map(ex => ({
        name: ex,
        allowed: true,
        description: "Basic transparency obligations",
        sme_note: "Low compliance burden - startup-friendly"
      }))
    },
    {
      level: "Minimal Risk - Unregulated",
      color: "#10B981",
      items: riskLevels[3].examples.map(ex => ({
        name: ex,
        allowed: true,
        description: "No specific AI Act requirements",
        sme_note: "Zero compliance burden - deploy freely"
      }))
    }
  ];

  container.innerHTML = categories.map((cat, idx) => `
    <div class="category-section" data-index="${idx}">
      <div class="category-header">
        <h3 style="color: ${cat.color};">${cat.level}</h3>
        <svg class="accordion-icon" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
          <polyline points="6 9 12 15 18 9"></polyline>
        </svg>
      </div>
      <div class="category-items">
        ${cat.items.map(item => `
          <div class="category-item">
            <div class="category-item-header">
              <strong>${item.name}</strong>
              <span class="${item.allowed ? 'allowed-badge' : 'not-allowed-badge'}">
                ${item.allowed ? '✓ Allowed' : '✗ Prohibited'}
              </span>
            </div>
            <p>${item.description}</p>
            <p style="color: var(--color-text-secondary); font-size: 14px;"><em>SME Note: ${item.sme_note}</em></p>
          </div>
        `).join('')}
      </div>
    </div>
  `).join('');

  // Add click handlers
  container.querySelectorAll('.category-header').forEach(header => {
    header.addEventListener('click', () => {
      const section = header.closest('.category-section');
      section.classList.toggle('active');
    });
  });

  // Search functionality
  const searchInput = document.getElementById('category-search');
  searchInput?.addEventListener('input', (e) => {
    const query = e.target.value.toLowerCase();
    container.querySelectorAll('.category-item').forEach(item => {
      const text = item.textContent.toLowerCase();
      item.style.display = text.includes(query) ? 'block' : 'none';
    });
  });
}

// Populate GDPR Comparison
function populateGDPRComparison() {
  const tbody = document.getElementById('comparison-tbody');
  if (!tbody) return;

  tbody.innerHTML = gdprComparison.map(item => `
    <tr>
      <td><strong>${item.area}</strong></td>
      <td>${item.gdpr}</td>
      <td>${item.ai_act}</td>
      <td><em>${item.overlap}</em></td>
    </tr>
  `).join('');
}

// Populate Timeline
function populateTimeline() {
  const container = document.getElementById('timeline');
  const countdownBox = document.getElementById('countdown-box');
  if (!container) return;

  // Find next deadline
  const now = new Date();
  const upcoming = timeline.find(item => {
    const itemDate = new Date(item.date);
    return itemDate > now;
  });

  if (upcoming && countdownBox) {
    const itemDate = new Date(upcoming.date);
    const daysUntil = Math.ceil((itemDate - now) / (1000 * 60 * 60 * 24));
    countdownBox.innerHTML = `
      <h3>Next Deadline: ${upcoming.title}</h3>
      <div style="font-size: 48px; font-weight: 600; margin: 16px 0;">${daysUntil}</div>
      <div>days until ${upcoming.date}</div>
    `;
  }

  container.innerHTML = timeline.map((item, idx) => `
    <div class="timeline-item">
      <div class="timeline-content" data-index="${idx}">
        <div class="timeline-date">${item.date}</div>
        <div class="timeline-title">${item.title}</div>
        <div class="timeline-status" style="color: ${item.status === 'COMPLETED' ? '#10B981' : item.status === 'UPCOMING' ? '#F59E0B' : '#777'};">
          ${item.status}
        </div>
        <p>${item.description}</p>
        <div class="timeline-actions">
          <h4>Action Items:</h4>
          <ul>
            ${item.actions.map(action => `<li>${action}</li>`).join('')}
          </ul>
        </div>
      </div>
      <div class="timeline-marker ${item.status.toLowerCase()}"></div>
    </div>
  `).join('');

  // Add click handlers
  container.querySelectorAll('.timeline-content').forEach(content => {
    content.addEventListener('click', () => {
      content.classList.toggle('active');
    });
  });
}

// Populate Resources
function populateResources() {
  const container = document.getElementById('resources-grid');
  if (!container) return;

  container.innerHTML = resources.map(resource => `
    <div class="resource-card">
      <div class="resource-type">${resource.type}</div>
      <h3>${resource.title}</h3>
      <p>${resource.description}</p>
      ${resource.url ? `<a href="${resource.url}" target="_blank" rel="noopener">Visit Resource →</a>` : '<p style="color: var(--color-text-secondary); font-size: 12px;">Available through official EU channels</p>'}
    </div>
  `).join('');
}

// Compliance Checker
let currentQuestion = 0;

function initComplianceChecker() {
  showQuestion(complianceQuestions[0]);
}

function showQuestion(question) {
  const container = document.getElementById('question-container');
  if (!container) return;

  container.innerHTML = `
    <div class="question-text">${question.question}</div>
    ${question.subtext ? `<div class="question-subtext">${question.subtext}</div>` : ''}
    <div class="answer-buttons">
      ${question.answers.map(answer => `
        <button class="answer-btn" data-next="${answer.next}">${answer.text}</button>
      `).join('')}
    </div>
  `;

  container.querySelectorAll('.answer-btn').forEach(btn => {
    btn.addEventListener('click', (e) => {
      const next = e.target.dataset.next;
      if (next.startsWith('result_')) {
        showResult(next);
      } else {
        const nextQuestion = complianceQuestions.find(q => q.id === parseInt(next));
        if (nextQuestion) showQuestion(nextQuestion);
      }
    });
  });
}

function showResult(resultKey) {
  const result = complianceResults[resultKey];
  const questionContainer = document.getElementById('question-container');
  const resultContainer = document.getElementById('result-container');
  
  questionContainer.classList.add('hidden');
  resultContainer.classList.remove('hidden');

  resultContainer.innerHTML = `
    <div class="result-header" style="background: ${result.color}; color: white;">
      <h3>${result.risk_level}</h3>
      <div class="result-classification">${result.classification}</div>
    </div>
    
    <div class="result-section">
      <p style="font-size: 18px; margin-bottom: 24px;">${result.message}</p>
    </div>

    <div class="result-section">
      <h4>Key Requirements:</h4>
      <ul>
        ${result.requirements.map(req => `<li>${req}</li>`).join('')}
      </ul>
    </div>

    <div class="result-section">
      <div class="deadline-box">
        <strong>Compliance Deadline:</strong> ${result.deadline}
      </div>
      <div class="penalty-box">
        <strong>Penalty:</strong> ${result.penalty}
      </div>
      ${result.cost_estimate ? `
        <div class="note-box">
          <strong>Estimated Cost:</strong> ${result.cost_estimate}<br>
          <strong>Timeline:</strong> ${result.timeline_estimate}
        </div>
      ` : ''}
    </div>

    <div class="result-section">
      <h4>GDPR Connection:</h4>
      <p>${result.gdpr_note}</p>
    </div>

    ${result.next_steps ? `
      <div class="result-section">
        <h4>Recommended Next Steps:</h4>
        <ul>
          ${result.next_steps.map(step => `<li>${step}</li>`).join('')}
        </ul>
      </div>
    ` : ''}

    <div class="result-actions">
      <button class="btn btn-primary" onclick="window.print()">Download Results</button>
      <button class="btn btn-secondary" onclick="resetChecker()">Start Over</button>
    </div>
  `;
}

window.resetChecker = function() {
  const questionContainer = document.getElementById('question-container');
  const resultContainer = document.getElementById('result-container');
  
  questionContainer.classList.remove('hidden');
  resultContainer.classList.add('hidden');
  currentQuestion = 0;
  showQuestion(complianceQuestions[0]);
};

// Populate FAQ
function populateFAQ() {
  const container = document.getElementById('faq-accordion');
  if (!container) return;

  container.innerHTML = faqData.map((faq, idx) => `
    <div class="faq-item" data-index="${idx}">
      <div class="faq-question">
        <span>${faq.question}</span>
        <svg class="accordion-icon" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
          <polyline points="6 9 12 15 18 9"></polyline>
        </svg>
      </div>
      <div class="faq-answer">
        <div class="faq-answer-content">${faq.answer}</div>
      </div>
    </div>
  `).join('');

  container.querySelectorAll('.faq-question').forEach(question => {
    question.addEventListener('click', () => {
      const item = question.closest('.faq-item');
      item.classList.toggle('active');
    });
  });
}

// Scroll Effects
function initScrollEffects() {
  const nav = document.getElementById('main-nav');
  let lastScroll = 0;

  window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;
    
    // Add shadow when scrolled
    if (currentScroll > 10) {
      nav?.classList.add('scrolled');
    } else {
      nav?.classList.remove('scrolled');
    }

    lastScroll = currentScroll;
  });
}

// Toast Notification
function showToast(message) {
  const toast = document.getElementById('toast');
  if (!toast) return;

  toast.textContent = message;
  toast.classList.add('show');

  setTimeout(() => {
    toast.classList.remove('show');
  }, 3000);
}