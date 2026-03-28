const translations = {
  tr: {
    hero_name: "Enis Eymen Dertli",
    hero_role: "Oyun Geliştirici",
    about_title: "Hakkımda",
    about_text: "Modern oyun teknolojileri ile oynanış odaklı projeler geliştiriyorum.",
    projects_title: "Projeler",
    project1_title: "Örnek Oyun Projesi",
    project1_desc: "Oynanış odaklı bir aksiyon deneyimi.",
    contact_title: "İletişim"
  },
  en: {
    hero_name: "Enis Eymen Dertli",
    hero_role: "Game Developer",
    about_title: "About Me",
    about_text: "I develop gameplay-focused projects using modern game technologies.",
    projects_title: "Projects",
    project1_title: "Sample Game Project",
    project1_desc: "A gameplay-focused action experience.",
    contact_title: "Contact"
  }
};

let currentLang = localStorage.getItem("lang") || "en";

function setLanguage(lang) {
  document.querySelectorAll("[data-i18n]").forEach(el => {
    const key = el.getAttribute("data-i18n");
    if (translations[lang][key]) {
      el.textContent = translations[lang][key];
    }
  });

  document.documentElement.lang = lang;
  localStorage.setItem("lang", lang);
}

document.getElementById("langToggle").addEventListener("click", () => {
  currentLang = currentLang === "tr" ? "en" : "tr";
  setLanguage(currentLang);
});

setLanguage(currentLang);
