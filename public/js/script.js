// Mostrar/ocultar menú desplegable
document.querySelector(".dropdown-circle button").addEventListener("click", function () {
  const dropdownMenu = document.querySelector(".dropdown-menu");
  dropdownMenu.classList.toggle("show");
});

// Validación del formulario de login
document.getElementById("login-form").addEventListener("submit", function (event) {
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  if (!email || !password) {
    event.preventDefault();
    alert("Por favor, completa todos los campos.");
  }
});