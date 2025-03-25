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
        descripcion: "En la fundación Retoños de Amor buscamos contribuir al desarrollo y bienestar integral de nuestros niños y sus familias, desde los sectores que consideramos son indispensables para una vida digna y un desarrollo personal adecuado.",
        masInfo: "Más Información"
    },
    en: {
        bienvenida: "Welcome to our Foundation",
        descripcion: "We work to provide a better future for children in vulnerable situations.",
        masInfo: "More Information"
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
