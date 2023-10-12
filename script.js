const comentarios = [];

function abrirModal() {
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

function publicarComentario() {
    const comentarioModal = document.querySelector("#comentario-modal").value;

    if (comentarioModal.trim() !== "") {
        comentarios.push(comentarioModal);

        document.querySelector("#comentario-modal").value = "";
        document.querySelector("#publicar").disabled = true;

        cerrarModal();

        mostrarComentarios();
    }
}

function mostrarComentarios() {
    const publicacionesDiv = document.querySelector(".publicaciones");

    publicacionesDiv.innerHTML = "";

    for (const comentario of comentarios) {
        const comentarioDiv = document.createElement("div");
        comentarioDiv.textContent = comentario;
        comentarioDiv.style.color = "white";
        publicacionesDiv.appendChild(comentarioDiv);
    }
}

const comentarioInput = document.querySelector("#comentario-modal");
comentarioInput.addEventListener("input", habilitarBoton);

function mostrarComentarios() {
    const publicacionesDiv = document.querySelector(".publicaciones");

    publicacionesDiv.innerHTML = "";

    for (const comentario of comentarios) {
        const comentarioDiv = document.createElement("div");
        comentarioDiv.classList.add("publicacion");

        const imagenUsuario = document.createElement("img");
        imagenUsuario.classList.add("imagen-usuario");
        imagenUsuario.src = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTsSKMnS28_ZUm8JnnCSxKjlamBsR5DCigKQESm47PkYAnUy8WOBiDasPAbVeaGYEy_Qok&usqp=CAU";
        comentarioDiv.appendChild(imagenUsuario);

        const nombreUsuario = document.createElement("div");
        nombreUsuario.classList.add("nombre-usuario");
        nombreUsuario.textContent = "Andrea Andrade ";
        comentarioDiv.appendChild(nombreUsuario);

        const comentarioUsuario = document.createElement("div");
        comentarioUsuario.classList.add("comentario-usuario");
        comentarioUsuario.textContent = comentario;
        comentarioDiv.appendChild(comentarioUsuario);

        publicacionesDiv.appendChild(comentarioDiv);
    }
}