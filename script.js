// Cambiar el color de fondo de forma dinámica
const body = document.body;
let currentTime = new Date().getHours();

if (currentTime >= 18 || currentTime <= 6) {
  body.style.backgroundColor = '#2c3e50';  // Noche
} else {
  body.style.backgroundColor = '#ecf0f1';  // Día
}
