/*document.addEventListener("DOMContentLoaded", function () {
    if (document.querySelector("h1").innerText === "Sobre Nosotros") {
        console.log("La sección Nosotros ha sido cargada");
        // Funcionalidad especial para Nosotros
    }
});*/

// 📌 Diccionario de traducciones para la sección de Nosotros
const traduccionesNosotros = {
    es: {
        tituloNosotros: "Sobre Nosotros",
        textoNosotros: "Somos una organización sin fines de lucro dedicada a mejorar la calidad de vida de niños en situación de vulnerabilidad.",
        tituloEquipo: "Nuestro Equipo",
        textoEquipo: "Contamos con un equipo de profesionales apasionados por el bienestar infantil y el desarrollo comunitario."
    },
    en: {
        tituloNosotros: "About Us",
        textoNosotros: "We are a non-profit organization dedicated to improving the quality of life of children in vulnerable situations.",
        tituloEquipo: "Our Team",
        textoEquipo: "We have a team of professionals passionate about child welfare and community development."
    }
};

// 📌 Función para traducir la página de Nosotros
function traducirNosotros(idioma) {
    document.querySelectorAll("[data-page]").forEach(elemento => {
        const clave = elemento.getAttribute("data-page");
        if (traduccionesNosotros[idioma][clave]) {
            elemento.textContent = traduccionesNosotros[idioma][clave];
        }
    });
}

// 📌 Aplicar el idioma al cargar la página
document.addEventListener("DOMContentLoaded", () => {
    const idiomaGuardado = localStorage.getItem("idioma") || "es";
    traducirNosotros(idiomaGuardado);
});

// 📌 Detectar cambio de idioma desde el evento global
document.addEventListener("cambioIdioma", () => {
    const idiomaActual = localStorage.getItem("idioma") || "es";
    traducirNosotros(idiomaActual);
});

// 📌 Sincronizar el idioma al cambiar de sección
window.addEventListener("load", () => {
    const idiomaActual = localStorage.getItem("idioma") || "es";
    traducirNosotros(idiomaActual);
});
