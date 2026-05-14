// theme handling
function updateThemeIcon(theme) {
  const iconElement = document.getElementById('theme-icon');
  if (iconElement) {
    const iconName = theme === 'dark' ? 'sun' : 'moon';
    iconElement.setAttribute('data-lucide', iconName);

    lucide.createIcons();
  }
}

function toggleTheme() {
  const html = document.documentElement;
  let newTheme;

  if (html.classList.contains('dark')) {
    html.classList.remove('dark');
    newTheme = 'light';
  } else {
    html.classList.add('dark');
    newTheme = 'dark';
  }

  localStorage.setItem('theme', newTheme);
  updateThemeIcon(newTheme);
}

document.addEventListener('DOMContentLoaded', () => {
  const savedTheme = localStorage.getItem('theme') || 'dark';
  if (savedTheme === 'dark') {
    document.documentElement.classList.add('dark');
  } else {
    document.documentElement.classList.remove('dark');
  }

  lucide.createIcons();
  updateThemeIcon(savedTheme);
});


// translation handling
const translations = {
  uz: {
    about: "Men haqimda",
    skills: "Ko'nikmalar",
    projects: "Loyihalar",
    certificates: "Sertifikatlar",
    contact: "Aloqa",
    welcome: "Xush kelibsiz!"
  },
  ru: {
    about: "Обо мне",
    skills: "Навыки",
    projects: "Проекты",
    certificates: "Сертификаты",
    contact: "Контакты",
    welcome: "Добро пожаловать!"
  },
  en: {
    about: "About Me",
    skills: "Skills",
    projects: "Projects",
    certificates: "Certificates",
    contact: "Contact",
    welcome: "Welcome!"
  },
  tr: {
    about: "Hakkımda",
    skills: "Yetenekler",
    projects: "Projeler",
    certificates: "Sertifikalar",
    contact: "İletişim",
    welcome: "Hoş geldiniz!"
  }
};

function setLanguage(lang) {
  const elements = document.querySelectorAll('[data-lang]');

  elements.forEach(el => {
    const key = el.getAttribute('data-lang');
    if (translations[lang] && translations[lang][key]) {
      el.textContent = translations[lang][key];
    }
  });

  localStorage.setItem('preferred_language', lang);

  updateLanguageButtons(lang);
}

function updateLanguageButtons(activeLang) {
  document.querySelectorAll('.lang-btn').forEach(btn => {
    if (btn.getAttribute('onclick').includes(activeLang)) {
      btn.classList.add('text-blue-400', 'border-blue-400', 'border', 'rounded', 'px-1');
      btn.classList.remove('text-gray-300', 'border-transparent');
    } else {
      btn.classList.remove('text-blue-400', 'border-blue-400', 'border');
      btn.classList.add('text-black', 'dark:text-gray-300', 'border-transparent', 'border');
    }
  });
}


// Nav-link active state handling
document.addEventListener('DOMContentLoaded', () => {
  const savedLang = localStorage.getItem('preferred_language') || 'uz';
  setLanguage(savedLang);
});

document.querySelectorAll('.nav-link').forEach(link => {
  link.addEventListener('click', function () {
    document.querySelectorAll('.active-indicator').forEach(indicator => {
      indicator.classList.remove('w-full');
      indicator.classList.add('w-0');
    });

    const currentIndicator = this.querySelector('.active-indicator');
    currentIndicator.classList.remove('w-0');
    currentIndicator.classList.add('w-full');

    document.querySelectorAll('.nav-link').forEach(l => l.classList.remove('text-blue-400'));
    this.classList.add('text-blue-400');
  });
});