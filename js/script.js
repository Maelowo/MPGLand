if (sessionStorage.getItem("booleano") === null) {
    sessionStorage.setItem("booleano", "true");
}

window.addEventListener("DOMContentLoaded", function() {
    var header = document.querySelector(".header");
    var contenido = document.querySelector(".contenido");
    var imagen = document.querySelector(".mpgland");

    // Obtener el valor de sessionStorage
    var condicion = sessionStorage.getItem("booleano") === "false";

    // Si ya estaba reducido, aplicamos el estado sin esperar el scroll
    if (condicion) {
        header.style.transition = "none";
        header.style.height = "150px";
        imagen.style.transition = "none";
        imagen.style.height = "80px";
        contenido.style.paddingTop = "150px";
    }
});

window.addEventListener("scroll", function() {
    var header = document.querySelector(".header");
    var contenido = document.querySelector(".contenido");
    var imagen = document.querySelector(".mpgland");
    var scrollPosition = window.scrollY;

    // Obtener el valor de sessionStorage
    var condicion = sessionStorage.getItem("booleano") === "true";

    // Cambiar la altura del header y el tamaño de la imagen al hacer scroll
        if (scrollPosition > 50 && condicion) {
            // Reducir el tamaño del header y ajustar el contenido
            header.style.height = "150px";
            contenido.style.paddingTop = "150px";
            imagen.style.height = "80px";
            sessionStorage.setItem("booleano", false);
        }
});