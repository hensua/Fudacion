/*document.addEventListener("DOMContentLoaded", function () {
    if (document.querySelector("h1").innerText === "Apóyanos") {
        console.log("La sección Apóyanos ha sido cargada");
        // Funcionalidad especial para Apóyanos
    }
});*/

// 📌 Diccionario de traducciones para la sección de Apóyanos
const traduccionesTalleres = {
    es: {
        tituloTalleres: "Talleres",
        parrafoTalleres: "Esta es la seccion de talleres."
    },
    en: {
        tituloTalleres: "Workshops",
        parrafoTalleres: "This is the workshops section."
    }
};

// 📌 Función para traducir la página de Apóyanos
function traducirTalleres(idioma) {
    document.querySelectorAll("[data-page]").forEach(elemento => {
        const clave = elemento.getAttribute("data-page");
        if (traduccionesTalleres[idioma][clave]) {
            elemento.textContent = traduccionesTalleres[idioma][clave];
        }
    });
}

// 📌 Aplicar el idioma al cargar la página
document.addEventListener("DOMContentLoaded", () => {
    const idiomaGuardado = localStorage.getItem("idioma") || "es";
    traducirTalleres(idiomaGuardado);
});

// 📌 Detectar cambio de idioma desde el evento global
document.addEventListener("cambioIdioma", () => {
    const idiomaActual = localStorage.getItem("idioma") || "es";
    traducirTalleres(idiomaActual);
});

// 📌 Sincronizar el idioma al cambiar de sección
window.addEventListener("load", () => {
    const idiomaActual = localStorage.getItem("idioma") || "es";
    traducirTalleres(idiomaActual);
});
