
const boton = document.getElementById("abrir");

const portada = document.getElementById("portada");

const contenido = document.getElementById("contenido");

const musica = document.getElementById("musica");


boton.addEventListener("click", () => {

    // Ocultar portada
    portada.style.display = "none";

    // Mostrar carta
    contenido.classList.remove("oculto");

    contenido.classList.add("aparecer");

    // Intentar comenzar la música
    musica.play().catch(() => {
        console.log("El navegador bloqueó el audio.");
    });

    // Ir al inicio de la carta
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });

});
