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
updateLanguageColumns(savedLang);


// Handle language change
languageSelect.addEventListener("change", (e) => {
  const lang = e.target.value;
  localStorage.setItem("ics_lang", lang);
  applyTranslations(lang);
  updateLanguageColumns(lang);
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

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("visible");
    }
  });
});

document.querySelectorAll(".screen-img").forEach(img => {
  observer.observe(img);
});

/*
const gallery = document.querySelector(".screens-gallery");
const btn = document.getElementById("showMoreScreens");

gallery.classList.add("collapsed");

btn.addEventListener("click", () => {
  document.querySelector(".screens-slider-wrapper").scrollBy({
    left: 600,
    behavior: "smooth"
  });
});
*/

const gallery = document.querySelector(".screens-gallery");
const btn = document.getElementById("showMoreScreens");

if (gallery) {
  gallery.classList.add("collapsed");
}

if (btn) {
  btn.addEventListener("click", () => {
    document.querySelector(".screens-slider-wrapper").scrollBy({
      left: 600,
      behavior: "smooth"
    });
  });
}


// Cerrar todos los acordeones al inicio
document.querySelectorAll(".accordion-body").forEach(body => {
  body.style.display = "none";
});

// Lógica del acordeón
document.querySelectorAll(".accordion-header").forEach(btn => {
  btn.addEventListener("click", () => {

    // Encuentra el body dentro del mismo accordion-item
    const item = btn.closest(".accordion-item");
    const body = item.querySelector(".accordion-body");

    // Alternar estado
    if (body.style.display === "block") {
      body.style.display = "none";
      btn.classList.remove("active");
    } else {
      body.style.display = "block";
      btn.classList.add("active");
    }
  });
});


function openAccordion(btn) {
  const target = btn.getAttribute("data-target");

  // 1. Cerrar todos los accordion-body
  document.querySelectorAll(".accordion-body").forEach(body => {
    body.style.display = "none";
  });

  // 2. Quitar highlight de todos los botones
  document.querySelectorAll(".tech-column button").forEach(b => {
    b.classList.remove("active-accordion-btn");
  });

  // 3. Activar solo el botón presionado
  btn.classList.add("active-accordion-btn");

  // 4. Abrir el acordeón correcto
  document.querySelectorAll(".accordion-header").forEach(header => {
    if (header.getAttribute("data-target") === target) {
      const body = header.nextElementSibling;
      if (body) {
        body.style.display = "block";
      }
    }
  });
}


function updateLanguageColumns(lang) {
  const columns = document.querySelectorAll(".tech-column");

  columns.forEach(col => {
    if (col.dataset.lang === lang) {
      col.style.display = "block";
    } else {
      col.style.display = "none";
    }
  });
}


