// Mostrar / ocultar recetas
document.querySelectorAll(".toggleBtn").forEach(btn => {
  btn.addEventListener("click", () => {
    const info = btn.nextElementSibling;

    if (info.style.display === "block") {
      info.style.display = "none";
      btn.textContent = "Ver receta";
    } else {
      info.style.display = "block";
      btn.textContent = "Ocultar";
    }
  });
});

// Modo oscuro
const modoBtn = document.getElementById("modoBtn");

modoBtn.addEventListener("click", () => {
  document.body.classList.toggle("oscuro");

  modoBtn.textContent =
    document.body.classList.contains("oscuro")
      ? "☀️ Modo claro"
      : "🌙 Modo oscuro";
});

// Botón subir
const arribaBtn = document.getElementById("arribaBtn");

window.addEventListener("scroll", () => {
  arribaBtn.style.display = window.scrollY > 250 ? "block" : "none";
});

arribaBtn.addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
});
