const dict = {
  uk: {
    "nav.projects": "Мої проєкти",
    "nav.about": "Про мене",
    "nav.contact": "Контакти",
    "hero.title": "Створюю вебпродукти, якими можна користуватись <em>без інструкцій</em>",
    "hero.sub": "UX/UI дизайнер для малого та середнього бізнесу",
    "hero.write": "Написати",
    "hero.projects": "Переглянути проєкти",
    title: "Valeria Zhmida — UX/UI дизайнер",
  },
  en: {
    "nav.projects": "My projects",
    "nav.about": "About me",
    "nav.contact": "Contact",
    "hero.title": "I design web products you can use <em>without instructions</em>",
    "hero.sub": "UX/UI designer for small and medium businesses",
    "hero.write": "Get in touch",
    "hero.projects": "View projects",
    title: "Valeria Zhmida — UX/UI designer",
  },
};

function setLang(lang) {
  const t = dict[lang];
  document.documentElement.lang = lang;
  document.title = t.title;
  document.querySelectorAll("[data-i18n]").forEach((el) => (el.textContent = t[el.dataset.i18n]));
  document.querySelectorAll("[data-i18n-html]").forEach((el) => (el.innerHTML = t[el.dataset.i18nHtml]));
  document.querySelectorAll("[data-lang]").forEach((b) => b.classList.toggle("is-active", b.dataset.lang === lang));
  try {
    localStorage.setItem("lang", lang);
  } catch {}
}

document.querySelectorAll("[data-lang]").forEach((b) => b.addEventListener("click", () => setLang(b.dataset.lang)));

let saved = "uk";
try {
  saved = localStorage.getItem("lang") || "uk";
} catch {}
if (saved !== "uk" && dict[saved]) setLang(saved);
