document.addEventListener("DOMContentLoaded", function () {
    const enlaces = document.querySelectorAll(".navegacion__link");
    const contenido = document.getElementById("contenido");
    const toggleIdioma = document.getElementById("toggleIdioma");
    
    function cargarSeccion(seccion) {
        fetch(`html/${seccion}.html`) // Carga el HTML externo
            .then(respuesta => respuesta.text())
            .then(data => {
                contenido.innerHTML = data; // Inserta el contenido en el div

                // Aplicar traducción después de cargar el contenido
                const idiomaActual = localStorage.getItem("idioma") || "es";
                traducirContenido(idiomaActual);

                // Remover clase "activo" de todos los enlaces
                enlaces.forEach(enlace => enlace.classList.remove("activo"));

                // Agregar clase "activo" solo al enlace actual si ya hubo un primer clic
                if (localStorage.getItem("primerClick") === "true") {
                    document.querySelector(`[data-page="${seccion}"]`)?.classList.add("activo");
                }
            })
            .catch(error => console.error("Error al cargar la sección:", error));
    }

    // Detectar clic en los enlaces de navegación
    enlaces.forEach(enlace => {
        enlace.addEventListener("click", function (e) {
            e.preventDefault();
            const seccion = this.dataset.page;

            if (!localStorage.getItem("primerClick")) {
                localStorage.setItem("primerClick", "true");
            }

            cargarSeccion(seccion);
        });
    });

    // Mantener el idioma al recargar la página
    const idiomaGuardado = localStorage.getItem("idioma") || "es";
    localStorage.removeItem("primerClick");
    cargarSeccion("inicio");

    // Diccionario de traducciones
    const traducciones = {
        es: {
            inicio: "Inicio",
            nosotros: "Nosotros",
            talleres: "Talleres",
            apoyanos: "Apóyanos",
            btn__apoyanos: "APÓYANOS",
            quienesSomosTitulo: "¿Quiénes Somos?",
            quienesSomosTexto: "Somos una organización sin ánimo de lucro comprometida con el apoyo integral para mejorar y fortalecer la calidad de vida de niños, niñas, adolescentes, jóvenes y mujeres en situación de vulnerabilidad en la ciudad de Cartagena.",
            nuestrasRedes: "Nuestras Redes",
            contactenos: "Contáctenos",
            direccion: "Dirección:",
            celular: "Cel:",
            email: "Email:",
            web: "Web:",
            derechos: "© 2025 Funredeactg.com. Todos los derechos reservados."
        },
        en: {
            inicio: "Home",
            nosotros: "About Us",
            talleres: "Workshops",
            apoyanos: "Support Us",
            btn__apoyanos: "SUPPORT US",
            quienesSomosTitulo: "Who We Are?",
            quienesSomosTexto: "We are a non-profit organization committed to providing comprehensive support to improve and strengthen the quality of life of children, adolescents, young people, and women in vulnerable situations in the city of Cartagena.",
            nuestrasRedes: "Our Social Media",
            contactenos: "Contact Us",
            direccion: "Address:",
            celular: "Phone:",
            email: "Email:",
            web: "Website:",
            derechos: "© 2025 Funredeactg.com. All rights reserved."
        }
    };

    // Función para traducir contenido dinámico
    function traducirContenido(idioma) {
        document.querySelectorAll("[data-page]").forEach(elemento => {
            const clave = elemento.getAttribute("data-page");
            if (traducciones[idioma][clave]) {
                elemento.textContent = traducciones[idioma][clave];
            }
        });

        // Disparar un evento global para que las secciones cargadas lo escuchen
        document.dispatchEvent(new CustomEvent("cambioIdioma", { detail: idioma }));
    }

    // Función para cambiar el idioma y aplicarlo a toda la web
    function cambiarIdioma(idioma) {
        localStorage.setItem("idioma", idioma); // Guardar idioma en localStorage
        traducirContenido(idioma);
    }

    // Mantener el estado del toggle de idioma al cargar la página
    toggleIdioma.checked = (idiomaGuardado === "en");
    cambiarIdioma(idiomaGuardado);

    // Detectar cambio en el interruptor de idioma
    toggleIdioma.addEventListener("change", function () {
        const idiomaSeleccionado = this.checked ? "en" : "es";
        cambiarIdioma(idiomaSeleccionado);
    });
});
