const colores = ['#f3f9fa', '#e0f7fa', '#fce4ec', '#fff3e0', '#e8f5e9', '#f9fbe7'];
let index = 0;

setInterval(() => {
  document.body.style.backgroundColor = colores[index];
  index = (index + 1) % colores.length;
}, 5000); // cambia cada 5 segundos

console.log("Portafolio cargado con fondo dinámico");
