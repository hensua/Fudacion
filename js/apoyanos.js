/*document.addEventListener("DOMContentLoaded", function () {
    if (document.querySelector("h1").innerText === "Apóyanos") {
        console.log("La sección Apóyanos ha sido cargada");
        // Funcionalidad especial para Apóyanos
    }
});*/

// 📌 Diccionario de traducciones para la sección de Apóyanos
const traduccionesApoyanos = {
    es: {
        tituloApoyanos: "Apóyanos",
        textoApoyanos: "Tu apoyo nos ayuda a seguir brindando asistencia a quienes más lo necesitan. ¡Cada contribución cuenta!",
        botonApoyanos: "Haz una Donación"
    },
    en: {
        tituloApoyanos: "Support Us",
        textoApoyanos: "Your support helps us continue providing assistance to those who need it most. Every contribution counts!",
        botonApoyanos: "Make a Donation"
    }
};

// 📌 Función para traducir la página de Apóyanos
function traducirApoyanos(idioma) {
    document.querySelectorAll("[data-page]").forEach(elemento => {
        const clave = elemento.getAttribute("data-page");
        if (traduccionesApoyanos[idioma][clave]) {
            elemento.textContent = traduccionesApoyanos[idioma][clave];
        }
    });
}

// 📌 Aplicar el idioma al cargar la página
document.addEventListener("DOMContentLoaded", () => {
    const idiomaGuardado = localStorage.getItem("idioma") || "es";
    traducirApoyanos(idiomaGuardado);
});

// 📌 Detectar cambio de idioma desde el evento global
document.addEventListener("cambioIdioma", () => {
    const idiomaActual = localStorage.getItem("idioma") || "es";
    traducirApoyanos(idiomaActual);
});

// 📌 Sincronizar el idioma al cambiar de sección
window.addEventListener("load", () => {
    const idiomaActual = localStorage.getItem("idioma") || "es";
    traducirApoyanos(idiomaActual);
});

