const div = document.getElementById("ContenedorBoton");
const btn = document.getElementById("Boton");

div.addEventListener("click", function() {
    alert("Hola! Soy el div");
});

btn.addEventListener("click", function(event) {
    alert("Hola!");
    event.stopPropagation();
});