const translations = {
  uz: {
    about: "Men haqimda",
    skills: "Ko'nikmalar",
    projects: "Loyihalar",
    certificates: "Sertifikatlar",
    contact: "Bog'lanish",
    projects_title: "Mening loyihalarim"
  },
  en: {
    about: "About Me",
    skills: "Skills",
    projects: "Projects",
    certificates: "Certificates",
    contact: "Contact Me",
    projects_title: "My Projects"
  }
};

function setLanguage(lang) {
  const elements = document.querySelectorAll('[data-lang]');

  elements.forEach(el => {
    const key = el.getAttribute('data-lang');
    if (translations[lang][key]) {
      el.textContent = translations[lang][key];
    }
  });

  localStorage.setItem('preferred_language', lang);
}

document.addEventListener('DOMContentLoaded', () => {
  const savedLang = localStorage.getItem('preferred_language') || 'uz';
  setLanguage(savedLang);
});