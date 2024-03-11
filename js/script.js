// Abrir Overlay Registro
function openOverlay(event) {
    //Overlay Registro
    if(event.target.id == "registroclick") {
        let overlay = document.getElementById("registro");
        overlay.style.opacity = "1";
        overlay.style.visibility = "visible";
    }
}

// Cerrar Overlay Registro
function closeOverlay(event) {
    //Cierra Overlay Registro al clickar fuera del form
    if(event.target.id == "registro") {
        let overlay = document.getElementById("registro");
        let formulario = document.querySelector(".overlay__box");

        if (event.target === overlay && !formulario.contains(event.target)) {
            atributosOverlay(event.target.id);
        }
    }
}

// Estilos de visibilidad para el Overlay
function atributosOverlay(id) { 
    if (id == "registro") { //Quita la visibilidad del overlay registro
        let overlay = document.getElementById("registro");
        overlay.style.opacity = "0";
        overlay.style.visibility = "hidden";
    }
}