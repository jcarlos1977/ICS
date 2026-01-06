// ===============================
// Simple language switcher for ICS landing page
// ===============================

const languageSelect = document.getElementById("languageSelect");
const yearSpan = document.getElementById("year");

// Set current year in footer
if (yearSpan) {
  yearSpan.textContent = new Date().getFullYear();
}

// Apply translations to all [data-i18n] elements
function applyTranslations(lang) {
  const dict = TRANSLATIONS[lang] || TRANSLATIONS.en;

  document.querySelectorAll("[data-i18n]").forEach((el) => {
    const key = el.getAttribute("data-i18n");
    if (!key) return;

    const text = dict[key];
    if (typeof text === "string") {
      el.textContent = text;
    }
  });
}

// Load initial language from localStorage or default to English
const savedLang = localStorage.getItem("ics_lang") || "en";
languageSelect.value = savedLang;
applyTranslations(savedLang);

// Handle language change
languageSelect.addEventListener("change", (e) => {
  const lang = e.target.value;
  localStorage.setItem("ics_lang", lang);
  applyTranslations(lang);
});

// ===============================
// Smooth scroll for internal links
// ===============================

document.querySelectorAll('a[href^="#"]').forEach((link) => {
  link.addEventListener("click", (e) => {
    const targetId = link.getAttribute("href").slice(1);
    const targetEl = document.getElementById(targetId);
    if (targetEl) {
      e.preventDefault();
      targetEl.scrollIntoView({ behavior: "smooth" });
    }
  });
});

// ===============================
// Contact Form Handling (Multilanguage)
// ===============================

const contactForm = document.querySelector(".contact-form");
const formStatus = document.getElementById("formStatus");

if (contactForm && formStatus) {
  contactForm.addEventListener("submit", async (e) => {
    // Mostrar estado inicial
    formStatus.className = "form-status";
    formStatus.style.display = "block";

    // Detectar idioma actual
    const lang = localStorage.getItem("ics_lang") || "en";

    // Mensajes "Sending..."
    const sendingMessages = {
      en: "Sending...",
      es: "Enviando...",
      zh: "发送中..."
    };
    formStatus.textContent = sendingMessages[lang];

    // Pequeña espera visual
    await new Promise((resolve) => setTimeout(resolve, 500));

    // Mensajes de éxito
    const successMessages = {
      en: "✅ Your message has been sent successfully!",
      es: "✅ ¡Tu mensaje ha sido enviado con éxito!",
      zh: "✅ 您的消息已成功发送！"
    };

    formStatus.classList.add("success");
    formStatus.textContent = successMessages[lang];

    // Limpiar formulario
    contactForm.reset();

    // Ocultar después de 5 segundos
    setTimeout(() => {
      formStatus.style.display = "none";
    }, 5000);
  });
}
