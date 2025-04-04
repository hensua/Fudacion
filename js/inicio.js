// 📌 Diccionario de traducciones para la sección de Inicio
const traduccionesInicio = {
    es: {
        tittle__portada: "¡TRANSFORMAMOS VIDAS CON AMOR!",
        tittle__valores: "NUESTROS VALORES",
        valores__amor: "Amor",
        valores__fe: "Fe",
        valores__respeto: "Respeto",
        valores__tolerancia: "Tolerancia",
        valores__responsabilidad: "Responsabilidad",
        valores__solidaridad: "Solidaridad",
        valores__compañerismo: "Compañerismo",
        valores__honestidad: "Honestidad",

        tittle__bienestar: "BIENESTAR INTEGRAL",
        descripcion__bienestar: "En la Fundación Retoños de Amor buscamos contribuir al desarrollo y bienestar integral de nuestros niños y sus familias, desde los sectores que consideramos indispensables para una vida digna y un desarrollo personal adecuado.",
        tittle__bienestar__cognitivo: "Cognitivo",
        descipcion__bienestar__cognitivo: "Realizamos actividades de refuerzo lúdico-recreativas dos veces por semana con los niños, además de llevar a cabo clubes de lectura y matemáticas.",
        tittle__bienestar__psicologico: "Psicológico",
        descipcion__bienestar__psicologico: "Brindamos espacios abiertos (individuales y grupales) que permiten el abordaje de situaciones cotidianas a nivel familiar y comunitario.",
        tittle__bienestar__nuticional: "Nutricional",
        descipcion__bienestar__nuticional: "Proporcionamos una ración de comida saludable a la semana (desayuno o almuerzo) para contribuir a la reducción del índice de hambre en la ciudad de Cartagena.",
        tittle__bienestar__formacion: "Formación",
        descipcion__bienestar__formacion: "Ofrecemos una variedad de cursos cortos diseñados para identificar y fortalecer habilidades únicas y humanas a través del autodescubrimiento, preparándolos para el mundo laboral.",

        tittle__impactoSocial: "IMPACTO SOCIAL",
        comida__impactoSocial: "Raciones de comida",
        impactados__impactoSocial: "Niños impactados",
        apadrinados__impactoSocial: "Niños apadrinados",
        cursos__impactoSocial: "Cursos ofertados",

        tittle__quieresApoyarnos: "¿Quiéres Apoyarnos?",
        parrafo__quieresApoyarnos: "Apoyar nuestra causa es sembrar en tierra fértil. Aporta tu grano de arena y, juntos, podremos crear el futuro que, al igual que todos, estos retoños merecen.",
    },
    en: {
        tittle__portada: "WE TRANSFORM LIVES WITH LOVE!",
        tittle__valores: "OUR VALUES",
        valores__amor: "Love",
        valores__fe: "Faith",
        valores__respeto: "Respect",
        valores__tolerancia: "Tolerance",
        valores__responsabilidad: "Responsibility",
        valores__solidaridad: "Solidarity",
        valores__compañerismo: "Fellowship",
        valores__honestidad: "Honesty",

        tittle__bienestar: "COMPREHENSIVE WELL-BEING",
        descripcion__bienestar: "At the Retoños de Amor Foundation, we strive to contribute to the development and overall well-being of our children and their families, focusing on the areas we consider essential for a dignified life and proper personal growth.",
        tittle__bienestar__cognitivo: "Cognitive",
        descipcion__bienestar__cognitivo: "We conduct recreational reinforcement activities twice a week with the children, in addition to organizing reading and math clubs.",
        tittle__bienestar__psicologico: "Psychological",
        descipcion__bienestar__psicologico: "We provide open spaces (both individual and group) that allow for addressing everyday situations at the family and community levels.",
        tittle__bienestar__nuticional: "Nutritional",
        descipcion__bienestar__nuticional: "We provide a healthy meal ration once a week (breakfast or lunch) to help reduce the hunger rate in the city of Cartagena.",
        tittle__bienestar__formacion: "Training",
        descipcion__bienestar__formacion: "We offer a variety of short courses designed to identify and strengthen unique and human skills through self-discovery, preparing them for the job market.",

        tittle__impactoSocial: "SOCIAL IMPACT",
        comida__impactoSocial: "Food rations",
        impactados__impactoSocial: "Impacted children",
        apadrinados__impactoSocial: "Sponsored children",
        cursos__impactoSocial: "Offered courses",

        tittle__quieresApoyarnos: "Do you want to support us?",
        parrafo__quieresApoyarnos: "Supporting our cause is like planting in fertile soil. Contribute your grain of sand, and together we can create the future that these seedlings, like everyone else, deserve.",
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
    setTimeout(() => iniciarAnimacionNumeros(), 500); // Espera a que el DOM esté listo
});

// 📌 Detectar cambio de idioma y reiniciar la animación
document.addEventListener("cambioIdioma", () => {
    const idiomaActual = localStorage.getItem("idioma") || "es";
    traducirInicio(idiomaActual);
    setTimeout(() => iniciarAnimacionNumeros(), 500);
});

// 📌 Función para iniciar la animación de los números al entrar en viewport
function iniciarAnimacionNumeros() {
    const elementosNumeros = document.querySelectorAll(".text__impactoSocial");

    if (elementosNumeros.length === 0) return;

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting && !entry.target.dataset.animado) {
                animarNumero(entry.target);
                entry.target.dataset.animado = "true"; // Marca como animado
                observer.unobserve(entry.target); // Deja de observar después de animar
            }
        });
    }, {
        root: null,
        rootMargin: "0px",
        threshold: 0.5
    });

    elementosNumeros.forEach((elemento) => observer.observe(elemento));
}

// 📌 Función para animar cada número y garantizar que llegue al valor final
function animarNumero(elemento) {
    const valorFinal = parseInt(elemento.textContent.replace(/\./g, ""), 10);
    if (isNaN(valorFinal)) return;

    let contador = 0;
    let duracion = 1000; // Duración total en milisegundos (1s)
    let pasos = 60; // Frames (60 FPS)
    let incremento = Math.max(1, Math.ceil(valorFinal / pasos));
    let tiempoPorPaso = duracion / pasos;

    elemento.textContent = "0";

    const intervalo = setInterval(() => {
        contador += incremento;
        if (contador >= valorFinal) {
            elemento.textContent = valorFinal.toLocaleString("es");
            clearInterval(intervalo);
        } else {
            elemento.textContent = contador.toLocaleString("es");
        }
    }, tiempoPorPaso);
}

// 📌 Iniciar la animación cuando se cargue la página
window.onload = iniciarAnimacionNumeros;

