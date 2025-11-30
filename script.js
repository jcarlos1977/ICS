// Script para manejar el botón de demo
demoBtn.addEventListener("click", () => {
  window.open("https://wa.me/9094509292?text=Hola%20Juan,%20quiero%20más%20información%20sobre%20la%20demo.", "_blank");
});

document.addEventListener("DOMContentLoaded", () => {
  const toggleBtn = document.getElementById("toggleAboutBtn");
  const aboutSection = document.getElementById("aboutSection");

  toggleBtn.addEventListener("click", () => {
    if (aboutSection.style.display === "none") {
      aboutSection.style.display = "block";
      toggleBtn.textContent = "⬆️ Hide Developer Info";
    } else {
      aboutSection.style.display = "none";
      toggleBtn.textContent = "👨‍💻 About the Developer";
    }
  });
});
