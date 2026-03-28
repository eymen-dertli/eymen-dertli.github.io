const translations = {
  tr: {
    lang_button: "EN",
    nav_about: "Hakkımda",
    nav_projects: "Projeler",
    nav_contact: "İletişim",
    hero_eyebrow: "OYUN GELİŞTİRİCİ PORTFOLYOSU",
    hero_name: "Enis Eymen Dertli",
    hero_role: "Oyun Geliştirici",
    hero_desc: "Unity, Unreal Engine ve web teknolojileri ile oynanış odaklı projeler geliştiriyorum.",
    cta_projects: "Projeleri Gör",
    cta_contact: "İletişime Geç",
    about_title: "Hakkımda",
    about_text: "Oynanış, prototipleme ve etkileşimli deneyimlere odaklanan bir oyun geliştiricisiyim. Fikirleri oynanabilir sistemlere dönüştürmeyi ve bunları daha net oyuncu deneyimlerine dönüştürmeyi seviyorum.",
    projects_title: "Öne Çıkan Projeler",
    projects_subtitle: "Tasarım ve geliştirme yaklaşımımı yansıtan birkaç proje.",
    project1_tag: "Aksiyon / Prototip",
    project1_title: "Elemental Combat Prototype",
    project1_desc: "Element etkileşimleri ve düşman zayıflıkları üzerine kurulu bir savaş prototipi.",
    project2_tag: "Anlatı / Bulmaca",
    project2_title: "Psychological Puzzle Concept",
    project2_desc: "Çevresel hikâye anlatımı, bulmaca tasarımı ve atmosferi birleştiren bir birinci şahıs proje.",
    project3_tag: "Web / Oyun Arayüzü",
    project3_title: "Multiplayer Party UI",
    project3_desc: "Oyun menüleri, parti sistemleri ve etkileşim akışlarını keşfeden bir arayüz projesi.",
    contact_title: "İletişim",
    contact_text: "İş birliği, staj ve oyun geliştirme fırsatları için benimle iletişime geçebilirsin."
  },
  en: {
    lang_button: "TR",
    nav_about: "About",
    nav_projects: "Projects",
    nav_contact: "Contact",
    hero_eyebrow: "GAME DEVELOPER PORTFOLIO",
    hero_name: "Enis Eymen Dertli",
    hero_role: "Game Developer",
    hero_desc: "I build gameplay-focused projects with Unity, Unreal Engine, and web technologies.",
    cta_projects: "See Projects",
    cta_contact: "Contact Me",
    about_title: "About Me",
    about_text: "I am a game developer focused on gameplay, prototyping, and interactive experiences. I enjoy turning ideas into playable systems and polishing them into clear player experiences.",
    projects_title: "Featured Projects",
    projects_subtitle: "A few projects that represent my design and development approach.",
    project1_tag: "Action / Prototype",
    project1_title: "Elemental Combat Prototype",
    project1_desc: "A combat-focused prototype built around elemental interactions and enemy weaknesses.",
    project2_tag: "Narrative / Puzzle",
    project2_title: "Psychological Puzzle Concept",
    project2_desc: "A first-person project blending environmental storytelling, puzzle design, and atmosphere.",
    project3_tag: "Web / Game UI",
    project3_title: "Multiplayer Party UI",
    project3_desc: "A UI-focused project exploring game menus, party systems, and interactive flows.",
    contact_title: "Contact",
    contact_text: "You can reach me for collaborations, internships, and game development opportunities."
  }
};

let currentLang = localStorage.getItem("portfolio-lang") || "en";

function setLanguage(lang) {
  const map = translations[lang];
  document.querySelectorAll("[data-i18n]").forEach((el) => {
    const key = el.getAttribute("data-i18n");
    if (map[key] !== undefined) {
      el.textContent = map[key];
    }
  });

  document.documentElement.lang = lang;
  localStorage.setItem("portfolio-lang", lang);
}

document.getElementById("langToggle").addEventListener("click", () => {
  currentLang = currentLang === "tr" ? "en" : "tr";
  setLanguage(currentLang);
});

setLanguage(currentLang);
