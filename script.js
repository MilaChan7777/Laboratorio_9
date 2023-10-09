// Array para almacenar los comentarios publicados
const comentarios = [];

// Función para abrir el modal
function abrirModal() {
    const modal = document.querySelector("#modal");
    modal.style.display = "block";
}

// Función para cerrar el modal
function cerrarModal() {
    const modal = document.querySelector("#modal");
    modal.style.display = "none";
}

// Función para habilitar el botón de Publicar
function habilitarBoton() {
    const comentarioModal = document.querySelector("#comentario-modal");
    const publicarBtn = document.querySelector("#publicar");

    if (comentarioModal.value.trim() !== "") {
        publicarBtn.disabled = false;
    } else {
        publicarBtn.disabled = true;
    }
}

// Función para publicar un comentario y cerrar automáticamente el modal
function publicarComentario() {
    const comentarioModal = document.querySelector("#comentario-modal").value;

    if (comentarioModal.trim() !== "") {
        // Agrega el comentario al array de comentarios
        comentarios.push(comentarioModal);

        // Limpia el textarea y vuelve a desactivar el botón
        document.querySelector("#comentario-modal").value = "";
        document.querySelector("#publicar").disabled = true;

        // Cierra el modal automáticamente
        cerrarModal();

        // Llama a la función para mostrar los comentarios
        mostrarComentarios();
    }
}

// Función para mostrar los comentarios uno por uno debajo del container-comentario
function mostrarComentarios() {
    const publicacionesDiv = document.querySelector(".publicaciones");

    // Borra el contenido anterior del área de publicaciones
    publicacionesDiv.innerHTML = "";

    // Recorre el array de comentarios y muestra cada uno debajo del container-comentario
    for (const comentario of comentarios) {
        const comentarioDiv = document.createElement("div");
        comentarioDiv.textContent = comentario;
        comentarioDiv.style.color = "white"; // Establece el color de texto en blanco
        publicacionesDiv.appendChild(comentarioDiv);
    }
}

// Escucha el evento de entrada en el textarea
const comentarioInput = document.querySelector("#comentario-modal");
comentarioInput.addEventListener("input", habilitarBoton);

function mostrarComentarios() {
    const publicacionesDiv = document.querySelector(".publicaciones");

    // Borra el contenido anterior del área de publicaciones
    publicacionesDiv.innerHTML = "";

    // Recorre el array de comentarios y muestra cada uno en un recuadro de usuario
    for (const comentario of comentarios) {
        const comentarioDiv = document.createElement("div");
        comentarioDiv.classList.add("publicacion");

        // Crea la imagen circular del usuario
        const imagenUsuario = document.createElement("img");
        imagenUsuario.classList.add("imagen-usuario");
        imagenUsuario.src = "URL_DE_LA_IMAGEN_DEL_USUARIO";
        comentarioDiv.appendChild(imagenUsuario);

        // Agrega el nombre de usuario
        const nombreUsuario = document.createElement("div");
        nombreUsuario.classList.add("nombre-usuario");
        nombreUsuario.textContent = "Nombre del Usuario";
        comentarioDiv.appendChild(nombreUsuario);

        // Agrega el comentario del usuario
        const comentarioUsuario = document.createElement("div");
        comentarioUsuario.classList.add("comentario-usuario");
        comentarioUsuario.textContent = comentario;
        comentarioDiv.appendChild(comentarioUsuario);

        // Agrega el recuadro de usuario al área de publicaciones
        publicacionesDiv.appendChild(comentarioDiv);
    }
}

/*function abrirModal() {
    const modal = document.querySelector("#modal");
    modal.style.display = "block";
}

function cerrarModal() {
    const modal = document.querySelector("#modal");
    modal.style.display = "none";
}

function habilitarBoton() {
    const comentarioModal = document.querySelector("#comentario-modal");
    const publicarBtn = document.querySelector("#publicar");

    if (comentarioModal.value.trim() !== "") {
        publicarBtn.disabled = false;
    } else {
        publicarBtn.disabled = true;
    }
}

const comentarioInput = document.querySelector("#comentario-modal");
comentarioInput.addEventListener("input", habilitarBoton);*/



