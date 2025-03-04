/*document.addEventListener("DOMContentLoaded", function () {
    if (document.querySelector("h1").innerText === "Bienvenido a Inicio") {
        console.log("La sección Inicio ha sido cargada");
        // Aquí puedes poner cualquier funcionalidad especial para Inicio
    }
});*/

// 📌 Diccionario de traducciones para la sección de Inicio
const traduccionesInicio = {
    es: {
        bienvenida: "Bienvenido a nuestra Fundación",
        descripcion: "Trabajamos para brindar un mejor futuro a los niños y niñas en situación de vulnerabilidad.",
        masInfo: "Más Información",
        misionTitulo: "Nuestra Misión",
        misionTexto: "Proporcionar apoyo integral a niños y niñas para garantizar su bienestar y desarrollo.",
        visionTitulo: "Nuestra Visión",
        visionTexto: "Ser una organización líder en la protección infantil y educación social."
    },
    en: {
        bienvenida: "Welcome to our Foundation",
        descripcion: "We work to provide a better future for children in vulnerable situations.",
        masInfo: "More Information",
        misionTitulo: "Our Mission",
        misionTexto: "To provide comprehensive support for children to ensure their well-being and development.",
        visionTitulo: "Our Vision",
        visionTexto: "To be a leading organization in child protection and social education."
    }
};

// 📌 Función para traducir la página de inicio
function traducirInicio(idioma) {
    document.querySelectorAll("[data-page]").forEach(elemento => {
        const clave = elemento.getAttribute("data-page");
        if (traduccionesInicio[idioma][clave]) {
            elemento.textContent = traduccionesInicio[idioma][clave];
        }
    });
}

// 📌 Aplicar el idioma al cargar la página
document.addEventListener("DOMContentLoaded", () => {
    const idiomaGuardado = localStorage.getItem("idioma") || "es";
    traducirInicio(idiomaGuardado);
});

// 📌 Detectar cambio de idioma desde el evento global
document.addEventListener("cambioIdioma", () => {
    const idiomaActual = localStorage.getItem("idioma") || "es";
    traducirInicio(idiomaActual);
});

// 📌 Sincronizar el idioma al cambiar de sección
window.addEventListener("load", () => {
    const idiomaActual = localStorage.getItem("idioma") || "es";
    traducirInicio(idiomaActual);
});
