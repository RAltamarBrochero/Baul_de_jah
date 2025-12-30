// Puedes agregar efectos adicionales aquí si lo deseas
console.log("¡Bienvenido al BAUL DE JAH!");

// Opcional: animación de entrada para los elementos
document.addEventListener("DOMContentLoaded", () => {
  const items = document.querySelectorAll(".grid-item");
  items.forEach((item, index) => {
    item.style.opacity = 0;
    setTimeout(() => {
      item.style.transition = "opacity 0.5s ease-in-out";
      item.style.opacity = 1;
    }, index * 100);
  });
});
