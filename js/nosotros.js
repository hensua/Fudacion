/*document.addEventListener("DOMContentLoaded", function () {
    if (document.querySelector("h1").innerText === "Sobre Nosotros") {
        console.log("La sección Nosotros ha sido cargada");
        // Funcionalidad especial para Nosotros
    }
});*/

// 📌 Diccionario de traducciones para la sección de Nosotros
const traduccionesNosotros = {
    es: {
        tituloQuienesSomos: "¿QUIÉNES SOMOS?",
        desQuienesSomos: "Somos una organización sin ánimo de lucro, comprometida con el apoyo integral para mejorar y fortalecer la calidad de vida de niños, jóvenes, adolescentes, madres y adultos mayores en situación de vulnerabilidad en la ciudad de Cartagena.",
        tituloMision: "Misión",
        desMision: "La Fundación Retoños de Amor Cartagena, basada en los principios espirituales cristianos, tiene como misión brindar apoyo integral y oportunidades de desarrollo a niños, jóvenes, adolescentes, madres y adultos mayores en situación de vulnerabilidad, promoviendo su bienestar emocional, educativo y social, y contribuyendo a que alcancen su máximo potencial, apostando a la construcción de un futuro más brillante.",
        tituloVision: "Visión",
        desVision: "La Fundación Retoños de Amor Cartagena aspira, para el año 2035, a ser un referente en la ciudad, siendo líderes en la atención y apoyo integral a niños, jóvenes, adolescentes, madres y adultos mayores en situación de vulnerabilidad. Asimismo, busca consolidar el fortalecimiento y mejoramiento de nuestros cursos e infraestructura, respectivamente, para que esto, a su vez, nos permita expandir nuestra presencia y servicios a nuevas comunidades de la ciudad de Cartagena, promoviendo un impacto positivo y sostenible en la calidad de vida de nuestros beneficiarios.",
        tittleEquipo: "EQUIPO",
        rolJose: "Director General",
        rolMaria: "Subdirectora General",
        rolDiana: "Psicóloga",
        rolJemmy: "Coordinadora Operativa",
        rolKelly: "Secretaria",
        rolAngela: "Directora Educativa",
        tittleAliados: "ALIADOS ESTRATEGICOS",
    },
    en: {
        tituloQuienesSomos: "WHO ARE WE?",
        desQuienesSomos: "We are a non-profit organization committed to providing comprehensive support to improve and strengthen the quality of life of children, youth, adolescents, mothers, and elderly people in vulnerable situations in the city of Cartagena.",
        tituloMision: "Mission",
        desMision: "The Retoños de Amor Cartagena Foundation, based on Christian spiritual principles, has the mission of providing comprehensive support and development opportunities to children, youth, adolescents, mothers, and elderly people in vulnerable situations, promoting their emotional, educational, and social well-being, and helping them reach their full potential, while working toward building a brighter future.",
        tituloVision: "Visión",
        desVision: "The Retoños de Amor Cartagena Foundation aims, by the year 2035, to become a leading reference in the city, standing out in the comprehensive care and support of children, youth, adolescents, mothers, and elderly people in vulnerable situations. Likewise, it seeks to strengthen and improve our courses and infrastructure, respectively, so that this, in turn, allows us to expand our presence and services to new communities in the city of Cartagena, promoting a positive and sustainable impact on the quality of life of our beneficiaries.",
        tittleEquipo: "TEAM",
        rolJose: "General Director",
        rolMaria: "Deputy Director",
        rolDiana: "Psychologist",
        rolJemmy: "Operations Coordinator",
        rolKelly: "Secretary",
        rolAngela: "Educational Director",
        tittleAliados: "STRATEGIC PARTNERS",
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
