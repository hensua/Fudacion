document.addEventListener("DOMContentLoaded", function () {
    const enlaces = document.querySelectorAll(".navegacion__link");
    const contenido = document.getElementById("contenido");

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
            apoyanos: "Apóyanos",
            btn__apoyanos: "APÓYANOS",
            quienesSomosTitulo: "¿Quiénes Somos?",
            quienesSomosTexto: "Somos una fundación sin ánimo de lucro, enfocada en niños y niñas expuestos a flagelos sociales que los hace vulnerables. A través de planes de acción individualizados, buscamos que identifiquen y desarrollen su potencial, descubriendo alternativas para su futuro y el de su entorno.",
            nuestrasRedes: "Nuestras Redes",
            contactenos: "Contáctenos",
            direccion: "Dirección:",
            celular: "Cel.:",
            email: "Email:",
            web: "Web:",
            derechos: "© 2025 Funredeactg.com. Todos los derechos reservados."
        },
        en: {
            inicio: "Home",
            nosotros: "About Us",
            apoyanos: "Support Us",
            btn__apoyanos: "SUPPORT US",
            quienesSomosTitulo: "Who We Are?",
            quienesSomosTexto: "We are a non-profit foundation focused on children exposed to social scourges that make them vulnerable. Through individualized action plans, we aim to help them identify and develop their potential, discovering alternatives for their future and their environment.",
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

    // Detectar cambio en el interruptor de idioma
    document.getElementById("toggleIdioma").addEventListener("change", function () {
        const idiomaSeleccionado = this.checked ? "en" : "es";
        cambiarIdioma(idiomaSeleccionado);
    });

    // Mantener el idioma guardado al cargar la página
    document.addEventListener("DOMContentLoaded", () => {
        document.getElementById("toggleIdioma").checked = (idiomaGuardado === "en");
        cambiarIdioma(idiomaGuardado);
    });

    // Aplicar traducción inicial a la sección cargada
    traducirContenido(idiomaGuardado);
});
